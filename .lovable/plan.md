

# Plan: "Weitere Cases" Sektion 1:1 wie Homepage gestalten

## Ziel
Die "Weitere Cases" Sektion auf den Case Study Seiten soll exakt wie die Homepage-Version aussehen - mit horizontalem Scroll auf Mobile und komplett ohne Abstände.

---

## Analyse der Unterschiede

| Eigenschaft | Homepage (CaseStudiesGrid) | Case Studies (RelatedCaseStudies) |
|-------------|---------------------------|-----------------------------------|
| Grid Container | `flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4` | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0` |
| Mobile Verhalten | Horizontal scrollbar | Vertikal gestapelt |
| Item Wrapper | `flex-shrink-0 w-[65%] snap-start md:w-auto` | Kein spezielles Styling |
| Plus-Icon | `w-8 h-8 md:w-12 md:h-12` | `w-12 h-12` |
| Hover Padding | `p-3 md:p-6` | `p-6` |
| Text Größen | `text-[10px] md:text-xs`, `text-sm md:text-2xl` | `text-xs`, `text-xl md:text-2xl` |

---

## Änderungen in RelatedCaseStudies.tsx

### 1. Grid Container anpassen (Zeile 88)

**Vorher:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
```

**Nachher:**
```tsx
<div className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4">
```

### 2. Item Wrapper anpassen (Zeile 90)

**Vorher:**
```tsx
<motion.div key={caseStudy.id} ...>
```

**Nachher:**
```tsx
<motion.div key={caseStudy.id} ... className="flex-shrink-0 w-[65%] snap-start md:w-auto">
```

### 3. Plus-Icon Größe anpassen (Zeile 112)

**Vorher:**
```tsx
<Plus className="w-12 h-12 text-white" strokeWidth={2} />
```

**Nachher:**
```tsx
<Plus className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={2} />
```

### 4. Hover Overlay Padding anpassen (Zeile 116)

**Vorher:**
```tsx
<div className="absolute inset-0 bg-[#7C3AED] opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-between p-6">
```

**Nachher:**
```tsx
<div className="absolute inset-0 bg-[#7C3AED] opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-between p-3 md:p-6">
```

### 5. White Line Größe anpassen (Zeile 118)

**Vorher:**
```tsx
<div className="w-16 h-1 bg-white" />
```

**Nachher:**
```tsx
<div className="w-8 md:w-16 h-0.5 md:h-1 bg-white" />
```

### 6. Text Größen anpassen (Zeilen 121-125)

**Client Label - Vorher:**
```tsx
<span className="text-xs font-bold text-white/80 uppercase tracking-wider">
```

**Nachher:**
```tsx
<span className="text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-wider">
```

**Headline - Vorher:**
```tsx
<h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
```

**Nachher:**
```tsx
<h3 className="text-sm md:text-2xl font-bold text-white leading-tight line-clamp-3">
```

**"Case ansehen" Link - Vorher:**
```tsx
<div className="flex items-center gap-2 ...">
```

**Nachher:**
```tsx
<div className="hidden md:flex items-center gap-2 ...">
```

### 7. Category Tag anpassen (Zeile 134)

**Vorher:**
```tsx
<span className="inline-block border border-white/80 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
```

**Nachher:**
```tsx
<span className="inline-block border border-white/80 px-2 md:px-4 py-1 md:py-1.5 text-[8px] md:text-xs font-bold text-white uppercase tracking-wider">
```

### 8. Mobile Button anpassen (Zeile 151)

**Vorher:**
```tsx
className="md:hidden mt-8 text-center"
```

**Nachher:**
```tsx
className="md:hidden mt-6 text-center"
```

---

## Visuelles Ergebnis

**Mobile (vorher):**
```text
+------------------+
|    [Case 1]      |
+------------------+
|    [Case 2]      |
+------------------+
|    [Case 3]      |
+------------------+
```

**Mobile (nachher) - wie Homepage:**
```text
+------------------+
| [Case1][Case2][Case3] ←→ (horizontal scroll)
+------------------+
```

**Desktop - keine Änderung:**
```text
+-------+-------+-------+-------+
|Case 1 |Case 2 |Case 3 |Case 4 |
+-------+-------+-------+-------+
```

---

## Betroffene Datei

- `src/components/RelatedCaseStudies.tsx`

## Ergebnis

Die "Weitere Cases" Sektion auf allen Case Study Seiten wird 1:1 identisch zur Homepage-Version aussehen, mit horizontalem Scroll auf Mobile und kompakter Darstellung.

