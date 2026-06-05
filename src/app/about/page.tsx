import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-2xl text-sm leading-relaxed">
      {/* Photo */}
      <div className="mb-8 w-[200px]">
        <Image
          src="/profile.jpg"
          alt="miwa tanaka"
          width={2411}
          height={3617}
          quality={90}
          className="w-full h-auto"
        />
      </div>

      {/* Name & Title */}
      <p className="mb-1">miwa tanaka</p>
      <p className="mb-6 opacity-50">
        musician・soundscape designer・biwa player
      </p>

      {/* Bio EN */}
      <p className="mb-6 text-xs">
        miwa tanaka started DJing at the age of 13 and has continued to develop
        her work through music production, sound research, and media art. Her
        research on the biwa led her to explore how environmental sounds shape
        perception and the experience of space. She is currently a player in
        &ldquo;Good Life on Earth,&rdquo; hosted by the University of Tokyo and
        the Toyota Mobility Foundation, where she researches urban sound
        environment design based on individual listening. Her media art works
        are based on her concept of &ldquo;personalized soundscapes.&rdquo;
      </p>

      {/* Bio JP */}
      <p className="mb-12 text-xs opacity-50">
        13歳からDJとして活動。琵琶の研究を通して、環境音が認識に与える影響に関心を持つ。
        以降、音楽制作、環境音研究、メディアアートを軸に活動。現在は東京大学とトヨタ・モビリティ基金主催
        &ldquo;Good Life on Earth&rdquo;
        のプレイヤーとして、個人の聴き方から都市の音環境をデザインする研究を行う。
        自身の提案する「個人化されたサウンドスケープ」を題材にメディアアート作品の制作・展示を行う。
      </p>

      {/* Biography */}
      <p className="mb-4">BIOGRAPHY</p>
      <table className="text-sm mb-12 opacity-50">
        <tbody>
          <tr><td className="pr-6 align-top whitespace-nowrap">2005</td><td>Born</td></tr>
          <tr><td className="pr-6 align-top whitespace-nowrap">2023–</td><td>Aoyama Gakuin University, Comparative Art</td></tr>
          <tr><td className="pr-6 align-top whitespace-nowrap">2023–</td><td>Good Life on Earth PLAYER (UTokyo × Toyota Mobility Foundation)</td></tr>
          <tr><td className="pr-6 align-top whitespace-nowrap">2026</td><td>Purdue University Visiting Scholar (United States, Indiana)</td></tr>
        </tbody>
      </table>

      {/* Release */}
      <p className="mb-4">RELEASE</p>
      <div className="space-y-1 mb-12 opacity-50">
        <p>EP &ldquo;come near me&rdquo;, 2026</p>
      </div>

      {/* Exhibition */}
      <p className="mb-4">EXHIBITION</p>
      <div className="space-y-1 mb-12 opacity-50">
        <p>HUMAN through AI, IAMAS, 2026</p>
        <p>GATEWAY Tech TAKANAWA, Takanawa Gateway, 2026</p>
      </div>

      {/* Performance */}
      <p className="mb-4">PERFORMANCE</p>
      <div className="space-y-1 mb-12 opacity-50">
        <p>Yagi Michiyo TALON, LIQUIDROOM, 2026</p>
        <p>J-WAVE RADIO SAKAMOTO Uday, 東間屋, 2025</p>
      </div>

      {/* Publication */}
      <p className="mb-4">PUBLICATION</p>
      <div className="space-y-1 mb-12 opacity-50">
        <a
          href="https://d1whc2skjypxbq.cloudfront.net/uploads/2026/04/5_%E7%94%B0%E4%B8%AD%E7%BE%8E%E7%BE%BD.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>都市を調律する ── 個人化されたサウンドスケープデザインに向けて</p>
          <p>日本財団HUMAIプログラム, 2026</p>
        </a>
      </div>
    </div>
  );
}
