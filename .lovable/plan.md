

## Root Cause Analysis

There are **two separate problems** causing `phone`, `company`, and `position` to arrive as `null`:

### Problem 1: Index.tsx and Services.tsx forms don't collect all fields

Both `Index.tsx` (line 88-92) and `Services.tsx` (line 68-72) only extract **3 fields** from FormData:

```typescript
const rawData = {
  name: formData.get('name')?.toString() || '',
  email: formData.get('email')?.toString() || '',
  message: formData.get('message')?.toString() || formData.get('nachricht')?.toString() || '',
};
```

**`phone`, `company`, and `position` are never read from the form**, even though the Index.tsx form actually has `telefon`, `firma`, and `position` input fields (lines 381-397). The data is in the DOM but never extracted.

### Problem 2: German vs English field name mismatch

The Index.tsx form uses **German** field names (`telefon`, `firma`, `nachricht`) while:
- The Edge Function expects **English** names (`phone`, `company`, `message`)
- The `submitContactForm` function sends English names
- The n8n workflow "Edit Fields" node references German names

### Problem 3: Edge Function doesn't handle German input aliases

Even if the frontend sent German keys, the Edge Function destructures only English keys (line 66):
```typescript
const { name, email, phone, company, position, message } = body;
```

---

## Fix Plan

### 1. Fix `src/pages/Index.tsx` — extract all form fields with bilingual key support

Update `handleSubmit` (around line 88) to read all fields using both EN and DE names:

```typescript
const rawData = {
  name: formData.get('name')?.toString() || '',
  email: formData.get('email')?.toString() || '',
  phone: formData.get('phone')?.toString() || formData.get('telefon')?.toString() || '',
  company: formData.get('company')?.toString() || formData.get('firma')?.toString() || '',
  position: formData.get('position')?.toString() || '',
  message: formData.get('message')?.toString() || formData.get('nachricht')?.toString() || '',
};
```

### 2. Fix `src/pages/Services.tsx` — same extraction fix

Update `handleSubmit` (around line 68) with the same bilingual field extraction.

### 3. Fix `supabase/functions/new-contact/index.ts` — normalize input + bilingual output

- **Input normalization** (line 66): Accept both EN and DE field names from `body`
- **Sanitization**: Use the normalized object
- **Output to n8n**: Send both EN and DE keys
- **Debug logging**: Add `console.log` before n8n send

```typescript
// Normalize input — accept both EN and DE keys
const normalized = {
  name: body.name ?? null,
  email: body.email ?? null,
  phone: body.phone ?? body.telefon ?? null,
  company: body.company ?? body.firma ?? null,
  position: body.position ?? null,
  message: body.message ?? body.nachricht ?? null,
};

// Use normalized for validation and sanitization...

// n8n payload with both EN and DE aliases
const n8nPayload = {
  name: sanitized.name,
  email: sanitized.email,
  phone: sanitized.phone,
  telefon: sanitized.phone,
  company: sanitized.company,
  firma: sanitized.company,
  position: sanitized.position,
  message: sanitized.message,
  nachricht: sanitized.message,
  ip,
  user_agent: req.headers.get("user-agent") || null,
  source: "new-contact",
};

console.log("Normalized payload:", JSON.stringify(normalized));
console.log("Sanitized payload:", JSON.stringify(sanitized));
console.log("n8n payload:", JSON.stringify(n8nPayload));
```

### 4. No changes needed to `ContactFormModal.tsx`

This component already correctly reads all 6 fields with English names — it works fine.

---

## Summary

| Layer | Issue | Fix |
|-------|-------|-----|
| **Index.tsx** | Only reads 3 of 6 fields; uses German `name` attrs but reads English keys | Read all 6 fields with EN/DE fallback |
| **Services.tsx** | Same — only reads 3 fields | Same fix |
| **Edge Function** | Only destructures English keys | Normalize EN+DE input, send both in output |
| **ContactFormModal** | No issue | No change |

Three files modified, one root cause: the frontend forms never extracted the optional fields from FormData.

