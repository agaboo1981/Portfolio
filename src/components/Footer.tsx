"use client";

/**
 * Footer — the designed close on the inverse ground: four quiet columns, the
 * name running the full width once more, one legal line.
 */
const COLUMNS: {
  head: string;
  items: { label: string; href: string; external?: boolean }[];
}[] = [
  {
    head: "Site",
    items: [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    head: "Elsewhere",
    items: [
      { label: "X / Twitter", href: "https://x.com/Agabo07", external: true },
      { label: "GitHub", href: "https://github.com/agaboo1981", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/joshua-adesina", external: true },
    ],
  },
  {
    head: "Contact",
    items: [
      { label: "giganticjosha@gmail.com", href: "mailto:giganticjosha@gmail.com" },
      { label: "Lagos, Nigeria", href: "" },
    ],
  },
  {
    head: "Status",
    items: [
      { label: "Available for projects", href: "#contact" },
      { label: "Remote-friendly", href: "" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-inverse px-5 pb-8 pt-24 text-inverse sm:px-8 sm:pt-32 md:px-10">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8">
        {COLUMNS.map((col) => (
          <div key={col.head}>
            <p className="text-[16px] text-inverse-text">{col.head}</p>
            <ul className="mt-3 space-y-1.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-[14px] text-inverse-muted transition-colors duration-200 hover:text-inverse-text"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-[14px] text-inverse-muted">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-24 sm:mt-32">
        <svg
          viewBox="0 0 1200 108"
          className="block h-auto w-full text-inverse-text"
          aria-hidden="true"
          focusable="false"
        >
          <text
            x="0"
            y="100"
            textLength="1200"
            lengthAdjust="spacingAndGlyphs"
            className="fill-current font-display font-bold"
            style={{ fontSize: "138px", letterSpacing: "-0.02em" }}
          >
            JOSHUA ADESINA
          </text>
        </svg>
      </div>

      <p className="mt-5 text-[14px] text-inverse-muted">
        © {new Date().getFullYear()} Joshua Adesina
      </p>
    </footer>
  );
}
