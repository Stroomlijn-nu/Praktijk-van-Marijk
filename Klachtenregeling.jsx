// Klachtenregeling.jsx
// Zelfstandige pagina — voeg toe als Klachtenregeling.jsx aan de repo
// en registreer in App.jsx (zie instructies onderaan dit bestand)

function Klachtenregeling() {
  const st = {
    page: {
      fontFamily: 'DM Sans, sans-serif',
      background: 'var(--bg, #faf8f4)',
      color: 'var(--fg1, #2e1f0e)',
    },

    // Hero
    hero: {
      background: 'var(--bg2, #e8dfd2)',
      borderBottom: '0.5px solid var(--line, #e0d8cc)',
      padding: '56px 24px 48px',
    },
    heroInner: { maxWidth: 680, margin: '0 auto' },
    heroLabel: {
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--accent, #89221d)',
      marginBottom: 12,
      fontWeight: 500,
    },
    heroH1: {
      fontFamily: 'Lora, Georgia, serif',
      fontSize: 'clamp(22px, 3.5vw, 30px)',
      fontWeight: 500,
      lineHeight: 1.3,
      color: 'var(--fg1, #2e1f0e)',
      marginBottom: 16,
      marginTop: 0,
    },
    heroSub: {
      fontSize: 15,
      color: 'var(--fg2, #5a4a38)',
      lineHeight: 1.8,
      maxWidth: 540,
    },

    // Inhoud
    content: { maxWidth: 680, margin: '0 auto', padding: '56px 24px' },

    // Sectieblokken
    block: { marginBottom: 48 },
    h2: {
      fontFamily: 'Lora, Georgia, serif',
      fontSize: 'clamp(17px, 2.5vw, 21px)',
      fontWeight: 500,
      color: 'var(--fg1, #2e1f0e)',
      lineHeight: 1.35,
      marginBottom: 14,
      marginTop: 0,
      borderBottom: '0.5px solid var(--line, #e0d8cc)',
      paddingBottom: 10,
    },
    body: {
      fontSize: 15,
      color: 'var(--fg2, #5a4a38)',
      lineHeight: 1.85,
      marginBottom: 14,
    },

    // Stappenblok
    stapGrid: { display: 'flex', flexDirection: 'column', gap: 16, marginTop: 4 },
    stap: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
    },
    stapNr: {
      width: 28, height: 28, minWidth: 28,
      borderRadius: '50%',
      background: 'var(--accent, #89221d)',
      color: '#faf8f4',
      fontSize: 12, fontWeight: 600,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginTop: 1,
    },
    stapText: {
      fontSize: 15,
      color: 'var(--fg2, #5a4a38)',
      lineHeight: 1.75,
      flex: 1,
    },
    stapStrong: {
      fontWeight: 600,
      color: 'var(--fg1, #2e1f0e)',
      display: 'block',
      marginBottom: 2,
    },

    // Contactbox
    contactBox: {
      background: 'var(--bg2, #e8dfd2)',
      border: '0.5px solid var(--line, #e0d8cc)',
      borderRadius: 6,
      padding: '24px 24px',
      marginTop: 8,
    },
    contactLabel: {
      fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: 'var(--fg3, #8a7a68)', marginBottom: 10, fontWeight: 500,
    },
    contactLine: {
      fontSize: 15, color: 'var(--fg2, #5a4a38)', lineHeight: 1.8,
    },
    contactLink: {
      color: 'var(--accent, #89221d)',
      textDecoration: 'none',
    },

    // SKJ-strip
    skjStrip: {
      background: 'var(--bg, #faf8f4)',
      border: '0.5px solid var(--line, #e0d8cc)',
      borderRadius: 6,
      padding: '20px 22px',
      marginTop: 8,
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    skjIcon: { fontSize: 22, marginTop: 1 },
    skjText: { fontSize: 14, color: 'var(--fg2, #5a4a38)', lineHeight: 1.75, flex: 1, minWidth: 200 },
    skjLink: { color: 'var(--accent, #89221d)', textDecoration: 'none' },
  };

  return (
    <div style={st.page}>

      {/* Hero */}
      <div style={st.hero}>
        <div style={st.heroInner}>
          <div style={st.heroLabel}>Praktijk van Marijk</div>
          <h1 style={st.heroH1}>Klachtenregeling</h1>
          <p style={st.heroSub}>
            Heb je een klacht over mijn werkwijze, de inhoud van een training of
            onze samenwerking? Ik neem dat serieus en hoor het graag van je.
          </p>
        </div>
      </div>

      {/* Inhoud */}
      <div style={st.content}>

        {/* 1. Indiening */}
        <div style={st.block}>
          <h2 style={st.h2}>Hoe dien je een klacht in</h2>
          <p style={st.body}>
            Je kunt een klacht schriftelijk indienen via e-mail. Omschrijf daarin
            zo concreet mogelijk wat er is gebeurd, wanneer dat was en wat je van
            mij verwacht.
          </p>
          <div style={st.contactBox}>
            <div style={st.contactLabel}>Contact</div>
            <div style={st.contactLine}>
              Marijke Koomen &mdash; Praktijk van Marijk<br />
              <a href="mailto:marijke@praktijkvanmarijk.nl" style={st.contactLink}>
                marijke@praktijkvanmarijk.nl
              </a><br />
              <a href="tel:+31627376003" style={st.contactLink}>06 27 37 60 03</a>
            </div>
          </div>
        </div>

        {/* 2. Procedure */}
        <div style={st.block}>
          <h2 style={st.h2}>Hoe verloopt de behandeling</h2>
          <div style={st.stapGrid}>
            <div style={st.stap}>
              <div style={st.stapNr}>1</div>
              <div style={st.stapText}>
                <span style={st.stapStrong}>Ontvangstbevestiging</span>
                Ik bevestig de ontvangst van je klacht binnen vijf werkdagen.
              </div>
            </div>
            <div style={st.stap}>
              <div style={st.stapNr}>2</div>
              <div style={st.stapText}>
                <span style={st.stapStrong}>Bespreking</span>
                Ik neem contact met je op om de klacht te bespreken. Samen zoeken
                we naar een oplossing.
              </div>
            </div>
            <div style={st.stap}>
              <div style={st.stapNr}>3</div>
              <div style={st.stapText}>
                <span style={st.stapStrong}>Afhandeling</span>
                Ik streef ernaar de klacht binnen vier weken af te handelen.
                Je ontvangt een schriftelijke reactie.
              </div>
            </div>
          </div>
        </div>

        {/* 3. Externe instantie */}
        <div style={st.block}>
          <h2 style={st.h2}>Als we er samen niet uitkomen</h2>
          <p style={st.body}>
            Ben je niet tevreden met de afhandeling, dan kun je de klacht
            voorleggen aan een externe instantie. Ik ben aangesloten bij
            [naam klachteninstantie invullen]. Je kunt daar terecht via
            [website of contactgegevens invullen].
          </p>
          <p style={st.body} style={{ ...st.body, fontSize: 13, color: 'var(--fg3, #8a7a68)', fontStyle: 'italic' }}>
            Let op: vul hier de naam en contactgegevens in van de externe klachten-
            of geschilleninstantie waarbij je bent aangesloten. Dit is een wettelijke
            verplichting onder de Wkkgz.
          </p>
        </div>

        {/* 4. SKJ */}
        <div style={st.block}>
          <h2 style={st.h2}>Klachten over mijn beroepsregistratie</h2>
          <p style={st.body}>
            Klachten over mijn handelen als geregistreerd professional kun je ook
            indienen bij het SKJ (Stichting Kwaliteitsregister Jeugd).
          </p>
          <div style={st.skjStrip}>
            <div style={st.skjIcon}>📋</div>
            <div style={st.skjText}>
              <strong>SKJ-registratie 110005309</strong><br />
              Geldig tot 25 mei 2028<br />
              <a
                href="https://www.skjeugd.nl"
                target="_blank"
                rel="noopener noreferrer"
                style={st.skjLink}
              >
                www.skjeugd.nl
              </a>
            </div>
          </div>
        </div>

        {/* 5. Vertrouwelijkheid */}
        <div style={st.block}>
          <h2 style={st.h2}>Vertrouwelijkheid</h2>
          <p style={st.body}>
            Ik behandel klachten vertrouwelijk. Gegevens die je deelt in het kader
            van de klachtenprocedure worden niet gebruikt voor andere doeleinden en
            worden bewaard conform mijn privacybeleid.
          </p>
        </div>

        {/* Terug-link */}
        <div style={{ marginTop: 40, paddingTop: 28, borderTop: '0.5px solid var(--line, #e0d8cc)' }}>
          <a
            href="https://www.praktijkvanmarijk.nl"
            style={{
              fontSize: 14,
              color: 'var(--fg2, #5a4a38)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            ← Terug naar praktijkvanmarijk.nl
          </a>
        </div>

      </div>
    </div>
  );
}
