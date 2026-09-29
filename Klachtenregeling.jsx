// Klachtenregeling.jsx
// Zelfstandige pagina, voeg toe als Klachtenregeling.jsx aan de repo
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

    // Vergelijking commissies
    vergelijk: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      marginTop: 8,
    },
    kaart: {
      flex: '1 1 280px',
      background: 'var(--bg, #faf8f4)',
      border: '0.5px solid var(--line, #e0d8cc)',
      borderRadius: 6,
      padding: '22px 22px 10px',
    },
    kaartTitel: {
      fontFamily: 'Lora, Georgia, serif',
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--fg1, #2e1f0e)',
      lineHeight: 1.4,
      marginTop: 0,
      marginBottom: 16,
    },
    kaartRij: {
      marginBottom: 16,
    },
    kaartLabel: {
      fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: 'var(--fg3, #8a7a68)', marginBottom: 4, fontWeight: 500,
    },
    kaartTekst: {
      fontSize: 14,
      color: 'var(--fg2, #5a4a38)',
      lineHeight: 1.75,
      margin: 0,
    },
    noot: {
      fontSize: 14,
      color: 'var(--fg2, #5a4a38)',
      lineHeight: 1.8,
      marginTop: 20,
      marginBottom: 0,
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

  // Stappen bij de externe klachteninstantie
  const externeStappen = [
    {
      titel: 'Contact met jou',
      tekst:
        'De klachtenfunctionaris neemt in alle gevallen contact met je op om het probleem helder te krijgen.',
    },
    {
      titel: 'Contact met Marijke',
      tekst:
        'Daarna neemt de klachtenfunctionaris contact op met Marijke om haar kant van het verhaal te horen en de mogelijkheden voor een oplossing te verkennen.',
    },
    {
      titel: 'Neutrale begeleiding',
      tekst:
        'De inzet is gericht op neutrale begeleiding van jou en Marijke, met het oog op herstel van vertrouwen. Wat daarvoor nodig is hangt af van de aard van de onvrede, de redelijkheid van beide partijen en de welwillendheid om eruit te komen. Een drie-gesprek onder begeleiding van een bemiddelaar is ook een mogelijkheid.',
    },
    {
      titel: 'Commissie',
      tekst:
        'Lukt het niet om jullie weer tot elkaar te brengen, dan kan de geschillencommissie of de klachtencommissie Jeugdwet worden ingeschakeld.',
    },
  ];

  // Vergelijking van de twee commissies
  const commissies = [
    {
      titel: 'Klachtencommissie Jeugdwet',
      rijen: [
        ['Oordeel', 'Een oordeel dat niet bindend is. De commissie kan eventueel aanbevelingen doen.'],
        ['Vastlegging', 'De uitspraak wordt aan beide partijen toegestuurd.'],
        ['Toezicht op naleving', 'De commissie ziet niet toe op naleving van de uitspraak.'],
        ['Bij niet naleven', 'Er zijn geen consequenties.'],
      ],
    },
    {
      titel: 'Geschillencommissie',
      rijen: [
        ['Oordeel', 'Een bindend advies, wettelijk vastgelegd. Partijen spreken vooraf af dat ze dit advies opvolgen en kunnen de uitspraak niet zomaar aanvechten.'],
        ['Vastlegging', 'De uitspraken worden geanonimiseerd gepubliceerd.'],
        ['Toezicht op naleving', 'De commissie ziet niet toe op naleving van de uitspraak.'],
        ['Bij niet naleven', 'Een partij kan de rechter inschakelen om nakoming af te dwingen.'],
      ],
    },
  ];

  return (
    <div style={st.page}>

      {/* Hero */}
      <div style={st.hero}>
        <div style={st.heroInner}>
          <div style={st.heroLabel}>Praktijk van Marijk</div>
          <h1 style={st.heroH1}>Klachtenregeling</h1>
          <p style={st.heroSub}>
            Heb je een klacht over de werkwijze van Praktijk van Marijk, de inhoud
            van een training of de samenwerking? Marijke neemt dat serieus en hoort
            het graag van je.
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
            Marijke verwacht.
          </p>
          <div style={st.contactBox}>
            <div style={st.contactLabel}>Contact</div>
            <div style={st.contactLine}>
              Marijke Koomen<br />
              Praktijk van Marijk<br />
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
                Marijke bevestigt de ontvangst van je klacht binnen vijf werkdagen.
              </div>
            </div>
            <div style={st.stap}>
              <div style={st.stapNr}>2</div>
              <div style={st.stapText}>
                <span style={st.stapStrong}>Bespreking</span>
                Marijke neemt contact met je op om de klacht te bespreken. Samen
                zoeken jullie naar een oplossing.
              </div>
            </div>
            <div style={st.stap}>
              <div style={st.stapNr}>3</div>
              <div style={st.stapText}>
                <span style={st.stapStrong}>Afhandeling</span>
                Marijke streeft ernaar de klacht binnen vier weken af te handelen.
                Je ontvangt een schriftelijke reactie.
              </div>
            </div>
          </div>
        </div>

        {/* 3. Externe instantie */}
        <div style={st.block}>
          <h2 style={st.h2}>Als jullie er samen niet uitkomen</h2>
          <p style={st.body}>
            Ben je niet tevreden over de afhandeling van je klacht, dan kun je deze
            voorleggen aan een onafhankelijke, externe klachten- en
            geschilleninstantie. Praktijk van Marijk is hiervoor aangesloten bij
            "Er is iets misgegaan", een instantie gericht op preventie en
            klachtenopvang in de zorg.
          </p>
          <div style={st.contactBox}>
            <div style={st.contactLabel}>Externe klachteninstantie</div>
            <div style={st.contactLine}>
              "Er is iets misgegaan"<br />
              Preventie en Klachtenopvang<br />
              <a
                href="https://erisietsmisgegaan.nl/"
                target="_blank"
                rel="noopener noreferrer"
                style={st.contactLink}
              >
                erisietsmisgegaan.nl
              </a>
            </div>
          </div>
        </div>

        {/* 4. Melden bij de externe instantie */}
        <div style={st.block}>
          <h2 style={st.h2}>Een klacht melden bij "Er is iets misgegaan"</h2>
          <p style={st.body}>
            Je dient een klacht in via het online onvredemelden formulier van
            "Er is iets misgegaan". Na ontvangst van je melding neemt een
            klachtenfunctionaris contact met je op.
          </p>
          <div style={st.contactBox}>
            <div style={st.contactLabel}>Online onvrede melden</div>
            <div style={st.contactLine}>
              <a
                href="https://erisietsmisgegaan.nl/onvrede-melden/"
                target="_blank"
                rel="noopener noreferrer"
                style={st.contactLink}
              >
                erisietsmisgegaan.nl/onvrede-melden
              </a>
            </div>
          </div>
        </div>

        {/* 5. Procedure bij de externe instantie */}
        <div style={st.block}>
          <h2 style={st.h2}>Wat gebeurt er nadat je een melding hebt gedaan</h2>
          <div style={st.stapGrid}>
            {externeStappen.map((s, i) => (
              <div style={st.stap} key={s.titel}>
                <div style={st.stapNr}>{i + 1}</div>
                <div style={st.stapText}>
                  <span style={st.stapStrong}>{s.titel}</span>
                  {s.tekst}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Rol van de commissie */}
        <div style={st.block}>
          <h2 style={st.h2}>De rol van de commissie</h2>
          <p style={st.body}>
            De klachtencommissie Jeugdwet of de geschillencommissie geeft een
            oordeel over de klacht. Hieronder lees je hoe bindend dat oordeel is,
            hoe het wordt vastgelegd en wat er gebeurt als het niet wordt nageleefd.
          </p>
          <div style={st.vergelijk}>
            {commissies.map((c) => (
              <div style={st.kaart} key={c.titel}>
                <h3 style={st.kaartTitel}>{c.titel}</h3>
                {c.rijen.map(([label, tekst]) => (
                  <div style={st.kaartRij} key={label}>
                    <div style={st.kaartLabel}>{label}</div>
                    <p style={st.kaartTekst}>{tekst}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p style={st.noot}>
            Tegen een bindend advies van de geschillencommissie is geen beroep
            mogelijk. Een burgerlijke rechter kan een bindend advies alleen in zeer
            uitzonderlijke situaties vernietigen, bijvoorbeeld als de beslissing
            naar maatstaven van redelijkheid en billijkheid onaanvaardbaar is, of
            als er sprake is van ernstige fouten in de besluitvorming of van
            belangenverstrengeling.
          </p>
        </div>

        {/* 7. SKJ */}
        <div style={st.block}>
          <h2 style={st.h2}>Klachten over de beroepsregistratie van Marijke</h2>
          <p style={st.body}>
            Klachten over het handelen van Marijke als geregistreerd professional
            kun je ook indienen bij het SKJ (Stichting Kwaliteitsregister Jeugd).
          </p>
          <div style={st.skjStrip}>
            <div style={st.skjIcon}>📋</div>
            <div style={st.skjText}>
              <strong>SKJ-registratie 110005309</strong>
              <br />
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

        {/* 8. Vertrouwelijkheid */}
        <div style={st.block}>
          <h2 style={st.h2}>Vertrouwelijkheid</h2>
          <p style={st.body}>
            Praktijk van Marijk behandelt klachten vertrouwelijk. Gegevens die je
            deelt in het kader van de klachtenprocedure worden niet gebruikt voor
            andere doeleinden en worden bewaard conform het privacybeleid van
            Praktijk van Marijk.
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

// ── Registratie in App.jsx ──────────────────────────────────────────────────
// 1. Voeg 'klachtenregeling: <Klachtenregeling />,' toe aan het routeobject
//    in de page-map (naast privacy, voorwaarden, enz.).
// 2. Voeg de route toe aan het label-object en aan ROUTES, zodat
//    #klachtenregeling herkend wordt door de hash-router.
// 3. Link er bijvoorbeeld vanuit de footer naar met
//    <a href="#klachtenregeling">Klachtenregeling</a>.
