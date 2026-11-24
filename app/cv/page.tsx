export default function CvPage() {
  return (
    <main className="cv-page">
      <div className="cv-toolbar">
        <a className="brand" href="/">Abdullah Jamil<span>.</span></a>
        <div className="cv-actions">
          <a className="button button-quiet" href="/">Back to portfolio</a>
          <a className="button button-primary" href="/Muhammad-Abdullah-Jamil-CV.pdf" download>
            Download CV ↓
          </a>
        </div>
      </div>
      <iframe
        className="cv-frame"
        src="/Muhammad-Abdullah-Jamil-CV.pdf#toolbar=0"
        title="Muhammad Abdullah Jamil CV preview"
      />
    </main>
  );
}
