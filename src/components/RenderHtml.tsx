/**
 * RenderHtml — Renderiza contenido que puede ser texto plano o HTML rico.
 *
 * Si el string contiene etiquetas HTML (resultado de RichTextEditor),
 * se renderiza con dangerouslySetInnerHTML.
 * Si es texto plano, se renderiza como <p> con whitespace-pre-line.
 */

const HTML_PATTERN = /<[a-z][\s\S]*>/i;

interface RenderHtmlProps {
  /** Texto plano o HTML a renderizar */
  content: string;
  className?: string;
}

export function RenderHtml({ content, className = '' }: RenderHtmlProps) {
  if (!content) return null;

  if (HTML_PATTERN.test(content)) {
    return (
      <div
        className={`
          leading-relaxed
          [&_b]:font-bold [&_strong]:font-bold
          [&_i]:italic [&_em]:italic
          [&_u]:underline
          [&_s]:line-through [&_del]:line-through
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-3 [&_h2]:mb-1
          [&_h3]:text-xl  [&_h3]:font-semibold [&_h3]:mt-2 [&_h3]:mb-1
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1
          [&_li]:leading-relaxed
          [&_p]:my-1
          [&_[style*="text-align:center"]]:text-center
          [&_[style*="text-align:right"]]:text-right
          [&_[style*="text-align:justify"]]:text-justify
          ${className}
        `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return (
    <p className={`whitespace-pre-line leading-relaxed ${className}`}>
      {content}
    </p>
  );
}
