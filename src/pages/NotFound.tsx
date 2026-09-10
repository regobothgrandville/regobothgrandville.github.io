export function NotFound() {
  return (
    <div className="case-study">
      <a className="skip-link" href="#not-found-content">Aller au contenu principal</a>
      <header className="case-header">
        <a className="brand" href="/" aria-label="Retour à l'accueil">RG<span>.</span></a>
        <a className="case-back" href="/">← RETOUR À L’ACCUEIL</a>
      </header>

      <main id="not-found-content">
        <section className="case-hero">
          <p className="case-index">ERROR_404 // ROUTE NOT FOUND</p>
          <h1>Ce nœud n’existe pas.</h1>
          <p className="case-subtitle">La route demandée ne correspond à aucune page du portfolio. Revenez à l’observatoire pour reprendre la navigation.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="/">Retour à l’accueil</a>
            <a className="button button--ghost" href="/#projets">Voir les projets</a>
          </div>
        </section>
      </main>

      <footer className="case-site-footer"><a className="brand" href="/" aria-label="Retour à l'accueil">RG<span>.</span></a><span>NETWORK OBSERVATORY // OFFLINE NODE</span></footer>
    </div>
  )
}
