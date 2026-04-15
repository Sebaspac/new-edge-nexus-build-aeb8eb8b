import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "New Edge"

interface KiAuditNotificationProps {
  name?: string
  email?: string
  phone?: string
  timestamp?: string
}

const KiAuditNotificationEmail = ({ name, email, phone, timestamp }: KiAuditNotificationProps) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>Neuer KI-Audit Lead: {name || 'Unbekannt'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Neuer KI-Audit Lead</Heading>
        <Hr style={hr} />
        <Text style={label}>Name</Text>
        <Text style={value}>{name || '–'}</Text>
        <Text style={label}>E-Mail</Text>
        <Text style={value}>{email || '–'}</Text>
        <Text style={label}>Telefon</Text>
        <Text style={value}>{phone || '–'}</Text>
        <Text style={label}>Zeitpunkt</Text>
        <Text style={value}>{timestamp || new Date().toLocaleString('de-DE')}</Text>
        <Hr style={hr} />
        <Text style={footer}>Automatisch gesendet von der KI-Audit Landing Page — {SITE_NAME}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: KiAuditNotificationEmail,
  subject: (data: Record<string, any>) => `Neuer KI-Audit Lead: ${data.name || 'Unbekannt'}`,
  to: 'Santiago.p@newedgebrand.com',
  displayName: 'KI-Audit Lead Notification',
  previewData: { name: 'Max Mustermann', email: 'max@example.com', phone: '+49 170 1234567', timestamp: '15.04.2026, 14:30:00' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Consolas', 'Monaco', monospace" }
const container = { padding: '32px 28px', maxWidth: '600px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#000000', margin: '0 0 24px' }
const hr = { borderColor: '#e5e5e5', margin: '20px 0' }
const label = { fontSize: '11px', color: '#888888', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '0 0 2px', fontFamily: "'Consolas', monospace" }
const value = { fontSize: '15px', color: '#000000', margin: '0 0 16px' }
const footer = { fontSize: '11px', color: '#999999', margin: '24px 0 0' }
