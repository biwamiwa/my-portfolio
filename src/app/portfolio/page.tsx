import Image from "next/image";

const PAGE_COUNT = 10;
const pages = Array.from(
  { length: PAGE_COUNT },
  (_, i) => `/portfolio/p${String(i + 1).padStart(2, "0")}.jpg`,
);

export default function PortfolioPage() {
  return (
    <div className="max-w-5xl text-sm leading-relaxed">
      <div className="space-y-6">
        {pages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`miwa tanaka portfolio ${i + 1}/${PAGE_COUNT}`}
            width={2200}
            height={1524}
            priority={i === 0}
            sizes="(min-width: 1072px) 1024px, calc(100vw - 48px)"
            className="h-auto w-full border border-black/10"
          />
        ))}
      </div>
      <p className="mt-8">
        <a href="/portfolio.pdf" target="_blank" rel="noopener noreferrer">
          PDF
        </a>
      </p>
    </div>
  );
}
