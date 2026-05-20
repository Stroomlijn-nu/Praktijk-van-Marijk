// Privacybeleid — Praktijk van Marijk
// Korte juridische pagina; gespiegeld aan AlgemeneVoorwaarden, maar luchtiger
// omdat de inhoud aanzienlijk korter is. Toon: "je" (site-default), kalm-feitelijk.

function Privacy() {
  const articles = [
    {
      nr: '01',
      slug: 'contactgegevens',
      title: 'Contactgegevens',
      render: () => (
        <React.Fragment>
          <p style={pPr.body}>
            Praktijk van Marijk wordt gerund door Marijke Koomen. Voor vragen over dit beleid kun je contact opnemen via het contactformulier op de website.
          </p>
          <div style={pPr.bedrijfsgegevens}>
            <div className="pvm-pr__bg-grid" style={pPr.bgGrid}>
              <div data-bg="label" style={pPr.bgLabel}>Praktijk</div>
              <div style={pPr.bgValue}>Praktijk van Marijk</div>
              <div data-bg="label" style={pPr.bgLabel}>Verantwoordelijke</div>
              <div style={pPr.bgValue}>Marijke Koomen</div>
              <div data-bg="label" style={pPr.bgLabel}>Website</div>
              <div style={pPr.bgValue}><a style={pPr.bgLink} href="https://www.praktijkvanmarijk.nl">www.praktijkvanmarijk.nl</a></div>
            </div>
          </div>
        </React.Fragment>
      ),
    },
    {
      nr: '02',
      slug: 'welke-gegevens',
      title: 'Welke gegevens worden verzameld',
      render: () => (
        <React.Fragment>
          <p style={pPr.body}>
            Via het contactformulier op deze website worden <em>naam</em>, <em>e&#8209;mailadres</em> en je <em>bericht</em> verwerkt. Deze gegevens worden uitsluitend gebruikt om je vraag te beantwoorden. Ze worden niet gedeeld met derden en niet gebruikt voor commerciële doeleinden.
          </p>
          <p style={pPr.body}>
            De website maakt gebruik van cookies via de Complianz&#8209;plugin. Bij je eerste bezoek word je gevraagd om toestemming. Functionele cookies zijn noodzakelijk voor de werking van de site en worden altijd geplaatst. Analytische cookies worden alleen geplaatst na toestemming.
          </p>
          <div style={pPr.cookieTable}>
            <div className="pvm-pr__ct-row" style={pPr.ctRow}>
              <div style={pPr.ctLabel}>Functioneel</div>
              <div style={pPr.ctValue}>Noodzakelijk voor de werking van de site. Altijd geplaatst.</div>
            </div>
            <div style={{ height: 1, background: 'var(--line)' }} />
            <div className="pvm-pr__ct-row" style={pPr.ctRow}>
              <div style={pPr.ctLabel}>Analytisch</div>
              <div style={pPr.ctValue}>Alleen geplaatst na expliciete toestemming via Complianz.</div>
            </div>
          </div>
        </React.Fragment>
      ),
    },
    {
      nr: '03',
      slug: 'bewaartermijn',
      title: 'Hoe lang worden gegevens bewaard',
      render: () => (
        <React.Fragment>
          <p style={pPr.body}>
            Berichten via het contactformulier worden bewaard zolang dat nodig is voor de afhandeling van je vraag, en daarna verwijderd.
          </p>
        </React.Fragment>
      ),
    },
    {
      nr: '04',
      slug: 'je-rechten',
      title: 'Je rechten',
      render: () => (
        <React.Fragment>
          <p style={pPr.body}>
            Je hebt het recht om je gegevens in te zien, te corrigeren of te laten verwijderen. Stuur daarvoor een bericht via het contactformulier. Er wordt binnen twee weken gereageerd.
          </p>
          <p style={pPr.body}>
            Heb je een klacht over de verwerking van je gegevens, dan kun je die indienen bij de Autoriteit Persoonsgegevens via{' '}
            <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" style={pPr.bgLink}>www.autoriteitpersoonsgegevens.nl</a>.
          </p>
        </React.Fragment>
      ),
    },
    {
      nr: '05',
      slug: 'beveiliging',
      title: 'Beveiliging',
      render: () => (
        <React.Fragment>
          <p style={pPr.body}>
            Er worden passende technische en organisatorische maatregelen genomen om persoonsgegevens te beschermen tegen verlies of onbevoegde toegang.
          </p>
        </React.Fragment>
      ),
    },
    {
      nr: '06',
      slug: 'wijzigingen',
      title: 'Wijzigingen',
      render: () => (
        <React.Fragment>
          <p style={pPr.body}>
            Dit privacybeleid kan worden aangepast. De meest recente versie staat altijd op deze pagina.
          </p>
        </React.Fragment>
      ),
    },
  ];

  const handlePrint = (e) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div className="pvm-av pvm-pr" data-screen-label="08 Privacybeleid">
      {/* ============ HERO ============ */}
      <div className="pvm-section pvm-av__hero" style={{ padding: '64px 48px 40px', maxWidth: 900 }}>
        <Eyebrow>Juridisch</Eyebrow>
        <h1 className="pvm-h1" style={{
          fontFamily: 'Lora, serif',
          fontSize: 34,
          fontWeight: 500,
          color: 'var(--fg1)',
          lineHeight: 1.3,
          margin: '0 0 20px',
          textWrap: 'balance',
        }}>
          Privacybeleid.
        </h1>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 17,
          color: 'var(--fg2)',
          lineHeight: 1.7,
          margin: '0 0 28px',
          maxWidth: '60ch',
        }}>
          Praktijk van Marijk verwerkt uitsluitend de gegevens die nodig zijn om je vraag via het contactformulier te beantwoorden. Geen blog, geen registraties, geen webshop, geen commercieel gebruik.
        </p>

        <div className="pvm-av__meta" style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 16,
          paddingTop: 4,
        }}>
          <Button onClick={handlePrint}>
            Download als PDF
          </Button>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--fg3)', whiteSpace: 'nowrap' }}>
            <span style={{ letterSpacing: '0.12em', textTransform: 'uppercase', marginRight: 10 }}>Versie</span>
            <span style={{ color: 'var(--fg1)', fontWeight: 500 }}>Mei 2026</span>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* ============ BODY: TOC + ARTIKELEN ============ */}
      <div className="pvm-av__body" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 220px) minmax(0, 1fr)',
        gap: 72,
        padding: '56px 48px 64px',
        alignItems: 'start',
      }}>
        {/* TOC */}
        <nav className="pvm-av__toc" aria-label="Inhoudsopgave">
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--fg3)',
            fontWeight: 500,
            marginBottom: 14,
          }}>Inhoud</div>
          <ol style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}>
            {articles.map((a) => (
              <li key={a.slug} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 12,
                  color: 'var(--accent-3)',
                  fontVariantNumeric: 'tabular-nums',
                  minWidth: 18,
                }}>{a.nr}</span>
                <a href={`#${a.slug}`} style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13,
                  color: 'var(--fg2)',
                  textDecoration: 'none',
                  lineHeight: 1.5,
                  borderBottom: '0.5px solid transparent',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg2)'; }}
                >{a.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Artikelen */}
        <div className="pvm-av__articles" style={{ maxWidth: 720 }}>
          {articles.map((a, i) => (
            <article key={a.slug} id={a.slug} className="pvm-av__article" style={{
              padding: i === 0 ? '0 0 48px' : '48px 0',
              borderTop: i === 0 ? 'none' : '0.5px solid var(--line)',
              scrollMarginTop: 100,
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14, flexWrap: 'wrap' }}>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 22,
                  fontWeight: 500,
                  color: 'var(--accent-3)',
                  fontVariantNumeric: 'tabular-nums',
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                }}>{a.nr}</div>
                <div className="pvm-av__article-rule" style={{
                  height: 1,
                  flex: '0 0 32px',
                  background: 'var(--accent-3)',
                  alignSelf: 'center',
                  marginTop: 2,
                }} />
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--fg3)',
                  whiteSpace: 'nowrap',
                }}>Onderdeel {parseInt(a.nr, 10)}</div>
              </div>
              <h2 style={{
                fontFamily: 'Lora, serif',
                fontSize: 22,
                fontWeight: 500,
                color: 'var(--fg1)',
                lineHeight: 1.35,
                margin: '0 0 22px',
                textWrap: 'balance',
              }}>{a.title}</h2>
              <div>{a.render()}</div>
            </article>
          ))}

          {/* Contact-box */}
          <div className="pvm-av__contact" style={{
            marginTop: 56,
            padding: '32px 32px',
            background: 'var(--surface-dark)',
            color: 'var(--fg-on-dark)',
            borderRadius: 6,
            borderLeft: '3px solid var(--accent)',
          }}>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent-3)',
              fontWeight: 500,
              marginBottom: 12,
            }}>Vraag of klacht?</div>
            <h3 style={{
              fontFamily: 'Lora, serif',
              fontSize: 20,
              fontWeight: 500,
              color: 'var(--fg-on-dark)',
              lineHeight: 1.4,
              margin: '0 0 14px',
            }}>Inzage, correctie of verwijdering van je gegevens?</h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: 'var(--fg-on-dark)',
              lineHeight: 1.7,
              margin: 0,
              opacity: 0.85,
            }}>
              Stuur een bericht via het{' '}
              <a href="mailto:marijke@praktijkvanmarijk.nl" style={{ color: 'var(--accent-3)', textDecoration: 'none', borderBottom: '0.5px solid var(--accent-3)' }}>contactformulier</a>
              {' '}of mail rechtstreeks naar{' '}
              <a href="mailto:marijke@praktijkvanmarijk.nl" style={{ color: 'var(--accent-3)', textDecoration: 'none', borderBottom: '0.5px solid var(--accent-3)' }}>marijke@praktijkvanmarijk.nl</a>.
              Er wordt binnen twee weken gereageerd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- styles object (uniquely named to avoid global collisions) ----
const pPr = {
  body: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 15,
    color: 'var(--fg2)',
    lineHeight: 1.75,
    margin: '0 0 14px',
  },
  bedrijfsgegevens: {
    background: 'var(--bg-sunken)',
    borderRadius: 6,
    padding: '24px 24px',
    margin: '8px 0 4px',
    border: '0.5px solid var(--line)',
  },
  bgGrid: {
    display: 'grid',
    gridTemplateColumns: '140px 1fr',
    rowGap: 8,
    columnGap: 16,
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 14,
  },
  bgLabel: {
    color: 'var(--fg3)',
    fontSize: 11,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontWeight: 500,
    paddingTop: 2,
  },
  bgValue: {
    color: 'var(--fg1)',
    lineHeight: 1.55,
  },
  bgLink: {
    color: 'var(--fg1)',
    textDecoration: 'none',
    borderBottom: '0.5px solid var(--line-strong)',
  },
  cookieTable: {
    marginTop: 18,
    border: '0.5px solid var(--line)',
    borderRadius: 6,
    overflow: 'hidden',
  },
  ctRow: {
    display: 'grid',
    gridTemplateColumns: '140px 1fr',
    gap: 16,
    padding: '14px 20px',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 14,
    alignItems: 'baseline',
  },
  ctLabel: {
    fontSize: 11,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--fg3)',
    fontWeight: 500,
  },
  ctValue: {
    color: 'var(--fg1)',
    lineHeight: 1.55,
  },
};

Object.assign(window, { Privacy });
