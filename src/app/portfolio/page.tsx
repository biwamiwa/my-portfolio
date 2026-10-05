const PDF_PATH = "/portfolio.pdf";

export default function PortfolioPage() {
  return (
    <div className="text-sm leading-relaxed">
      <object
        data={PDF_PATH}
        type="application/pdf"
        className="mb-6 h-[80vh] w-full max-w-4xl"
      >
        <p className="opacity-50">
          PDFをこの画面で表示できません。下のリンクから開いてください。
        </p>
      </object>
      <p>
        <a href={PDF_PATH} target="_blank" rel="noopener noreferrer">
          Download PDF
        </a>
      </p>
    </div>
  );
}
