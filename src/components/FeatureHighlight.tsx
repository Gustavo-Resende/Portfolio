/**
 * Destaque entre chaves nos títulos das features.
 * Se existir " & " no texto, quebra a linha logo após o & (evita títulos longos em uma única linha).
 */
export function FeatureHighlight({ text, className = "" }: { text: string; className?: string }) {
  const sep = " & ";
  const idx = text.indexOf(sep);
  const base = `inline-block max-w-full text-left leading-tight ${className}`.trim();

  if (idx === -1) {
    return <span className={base}>{text}</span>;
  }

  const lineBefore = `${text.slice(0, idx)} &`;
  const lineAfter = text.slice(idx + sep.length);

  return (
    <span className={base}>
      {lineBefore}
      <br />
      {lineAfter}
    </span>
  );
}
