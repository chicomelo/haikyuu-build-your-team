// Minimal, safe fixer for mojibake issues.
// We avoid complex replacement maps here to keep the build stable.
// Callers can decide to fallback to EN when detecting unusual glyphs.
export function fixMojibake(input?: string | null): string {
  if (!input) return '';
  // Remove ASCII control characters that may leak into content
  return input.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');
}

