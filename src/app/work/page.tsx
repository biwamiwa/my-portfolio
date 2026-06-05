import Link from "next/link";

const works = [
  {
    slug: "come-near-me",
    title: "come near me",
    category: "EP",
    date: "2026",
  },
  {
    slug: "personalized-soundscape-design",
    title: "Personalized Soundscape Design Research",
    category: "Research Project",
    date: "2025–",
  },
  {
    slug: "tuning-the-city",
    title: "都市の調律 / Tuning the City",
    category: "Installation",
    date: "2026",
  },
  {
    title: "SAKAMOTO RYUICHI DJ MIX",
    category: "mix",
    date: "2025",
    href: "https://youtu.be/MQ-HriNesvg?si=dG9effKUAAMb9fAH",
  },
];

export default function WorkPage() {
  return (
    <div className="space-y-8">
      {works.map((work, i) => {
        const isExternal = "href" in work && work.href;
        if (isExternal) {
          return (
            <a
              key={i}
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm leading-relaxed"
            >
              <span>{work.title}</span>
              <br />
              <span className="opacity-50">{work.category}</span>
              {work.date && (
                <>
                  <br />
                  <span className="opacity-50">{work.date}</span>
                </>
              )}
            </a>
          );
        }
        return (
          <Link
            key={i}
            href={`/work/${work.slug}`}
            className="block text-sm leading-relaxed"
          >
            <span>{work.title}</span>
            <br />
            <span className="opacity-50">{work.category}</span>
            <br />
            <span className="opacity-50">{work.date}</span>
          </Link>
        );
      })}
    </div>
  );
}
