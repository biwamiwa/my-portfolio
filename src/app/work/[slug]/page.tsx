import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const projects: Record<
  string,
  {
    title: string;
    subtitle: string;
    year: string;
    category: string;
    collaborator?: string;
    exhibition?: string;
    epigraph?: string;
    epigraphAuthor?: string;
    description: string;
    statement?: string;
    image?: string;
    tracklist?: string[];
    overview?: string;
    phases?: { label: string; text: string; image?: string }[];
    galleryImages?: string[];
  }
> = {
  "come-near-me": {
    title: "come near me",
    subtitle: "EP, 2026",
    year: "",
    category: "",
    description: "",
    image: "/come-hear-me.jpg",
    tracklist: [
      "1. come near me",
      "2. a life between enacting and extending",
    ],
  },
  "personalized-soundscape-design": {
    title: "Personalized Soundscape Design Research",
    subtitle: "個人化されたサウンドスケープデザイン",
    year: "2025– (In Progress)",
    category: "Research Project",
    collaborator:
      "JR東日本, 東京大学情報学環 渡邉英徳研究室, Good Life on Earth",
    exhibition: "",
    overview:
      '個人の聴き方に合わせてサウンドスケープを再構成するための研究プロジェクト。高輪ゲートウェイで実証実験を行い、デジタルツインシミュレーター "A Digital Twin For Soundscape Design" を開発。',
    phases: [
      {
        label: "Composed",
        text: "テクノロジーと視覚によって構築された現代のサウンドスケープ",
        image: "/composed.png",
      },
      {
        label: "Decompose",
        text: "サウンドスケープを音源ごとに分解し、個人の音に対しての意味づけを可視化する",
        image: "/decomposed.png",
      },
      {
        label: "Recompose",
        text: "評価の結果から個人に最適化した音環境をデザインする",
        image: "/recompose.png",
      },
    ],
    description:
      "A Digital Twin For Soundscape Design\n都市の環境音をデザインするためのデジタルツインシミュレーター。実在するオフィス/コミュニティスペースであるTAKANAWA GATEWAY LiSH Studio1の3DモデルをVR環境上に再現し、現地で録音した音源を用いて構成された14種類の音響シナリオを評価することで、どの音響操作が快適・活気の知覚に影響するか、およびシナリオ評価における個人差の構造を明らかにする。",
    galleryImages: ["/sim1.png", "/sim2.png", "/sim3.png"],
  },
  "tuning-the-city": {
    title: "都市の調律 / Tuning the City",
    subtitle:
      "AIの推定する個人の「快」に向けて環境音が変容するインスタレーション",
    year: "2026",
    category: "Installation",
    collaborator: "",
    exhibition: "HUMAN through AI, IAMAS, 2026",
    image: "/tuning-the-city.jpg",
    epigraph:
      "When the train goes by, what should I pay attention to?",
    epigraphAuthor:
      '— A Letter from Home, "Blue" Gene Tyranny',
    description:
      "その場で聴く音が世界を意味づけ、同時に私自身も作り変えているのではないか——AIが感覚を学習する時代において、聴くという経験はどのように再構成されうるのか。本作はその問いから始まっている。\n本作は、環境音と制作者個人の主観データを学習したAIモデルを使い、都市六地点（下北沢・渋谷）の環境音を「快」へ向けて変容させる作品である。\n録音は八つの周波数帯域に分解され、2秒ごとに「快」に近づく方向へ各帯域の音量（dB）が変化していく。同時に、制作者・田中美羽の感じる「快」が推定され、予測値が映像内でリアルタイムに更新される。\nこのように生成された「AIの調律した音」を制作者が聴くことで、環境音を聴く私の判断や感覚を浮かびあがらせようとした。",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function WorkDetailPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-12">
        <Link href="/work" className="text-sm opacity-50">
          ← Work
        </Link>
      </div>

      {project.image && (
        <div className="mb-8 max-w-xl">
          <Image
            src={project.image}
            alt={project.title}
            width={4500}
            height={2400}
            quality={90}
            className="w-full h-auto"
          />
        </div>
      )}

      <h1 className="text-lg mb-1">{project.title}</h1>
      <p className="text-sm opacity-50 mb-2">{project.subtitle}</p>

      {(project.year || project.category || project.collaborator || project.exhibition) && (
        <div className="text-sm leading-relaxed opacity-50 mb-8">
          {project.year && <p>{project.year}</p>}
          {project.category && <p>{project.category}</p>}
          {project.collaborator && <p>{project.collaborator}</p>}
          {project.exhibition && <p>{project.exhibition}</p>}
        </div>
      )}

      {project.epigraph && (
        <div className="text-sm italic mb-8 opacity-60">
          <p>{project.epigraph}</p>
          <p className="mt-1">{project.epigraphAuthor}</p>
        </div>
      )}

      {project.tracklist && (
        <div className="text-sm space-y-1 mb-8">
          {project.tracklist.map((track, i) => (
            <p key={i}>{track}</p>
          ))}
        </div>
      )}

      {project.overview && (
        <p className="text-sm leading-relaxed mb-8">{project.overview}</p>
      )}

      {project.phases && (
        <div className="grid grid-cols-3 gap-6 text-sm mb-8">
          {project.phases.map((phase, i) => (
            <div key={i} className="flex flex-col">
              {phase.image && (
                <div className="aspect-square mb-3 overflow-hidden">
                  <Image
                    src={phase.image}
                    alt={phase.label}
                    width={800}
                    height={800}
                    quality={90}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <p className="text-sm mb-1">{phase.label}</p>
              <p className="text-xs opacity-50">{phase.text}</p>
            </div>
          ))}
        </div>
      )}

      {project.description && (
        <div className="text-sm leading-relaxed mb-8 space-y-4">
          {project.description.split("\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}

      {project.galleryImages && (
        <div className="grid grid-cols-3 gap-6 mb-8">
          {project.galleryImages.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <Image
                src={src}
                alt={`${project.title} ${i + 1}`}
                width={800}
                height={800}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {project.statement && (
        <p className="text-sm leading-relaxed italic opacity-60">
          {project.statement}
        </p>
      )}
    </div>
  );
}
