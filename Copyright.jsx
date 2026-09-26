// Copyright.jsx
// Copyright en eigendom, Praktijk van Marijk
// Zelfde opmaak als Klachtenregeling.jsx. Route: #copyright
// Verwijst voor opdrachtgevers en deelnemers naar artikel 16 van de algemene voorwaarden
// via #voorwaarden/intellectuele-eigendom

function Copyright({ setRoute }) {
  const st = {
    page: {
      fontFamily: 'DM Sans, sans-serif',
      background: 'var(--bg, #faf8f4)',
      color: 'var(--fg1, #2e1f0e)',
    },
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
      margin: 0,
    },
    content: { maxWidth: 680, margin: '0 auto', padding: '56px 24px' },
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
    list: { listStyle: 'none', margin: '4px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 },
    item: { display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, color: 'var(--fg2, #5a4a38)', lineHeight: 1.75 },
    markYes: { color: 'var(--olive, #a6ac3e)', fontWeight: 600, minWidth: 16, marginTop: 1 },
    markNo: { color: 'var(--accent, #89221d)', fontWeight: 600, minWidth: 16, marginTop: 1 },
    box: {
      background: 'var(--bg2, #e8dfd2)',
      border: '0.5px solid var(--line, #e0d8cc)',
      borderRadius: 6,
      padding: '24px 24px',
      marginTop: 8,
    },
    boxLabel: {
      fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: 'var(--fg3, #8a7a68)', marginBottom: 10, fontWeight: 500,
    },
    boxLine: { fontSize: 15, color: 'var(--fg2, #5a4a38)', lineHeight: 1.8 },
    link: { color: 'var(--accent, #89221d)', textDecoration: 'none', borderBottom: '0.5px solid var(--accent, #89221d)' },
    avLink: {
      display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 4,
      fontSize: 15, fontWeight: 500, color: 'var(--accent, #89221d)', textDecoration: 'none', cursor: 'pointer',
    },
    meta: { fontSize: 13, color: 'var(--fg3, #8a7a68)', marginTop: 8 },
  };

  const Wel = ({ children }) => (
    <li style={st.item}><span style={st.markYes} aria-hidden="true">✓</span><span>{children}</span></li>
  );
  const Niet = ({ children }) => (
    <li style={st.item}><span style={st.markNo} aria-hidden="true">×</span><span>{children}</span></li>
  );

  return (
    <div style={st.page} data-screen-label="10 Copyright">

      {/* Hero */}
      <div style={st.hero}>
        <div style={st.heroInner}>
          <div style={st.heroLabel}>Juridisch</div>
          <h1 style={st.heroH1}>Copyright en eigendom</h1>
          <p style={st.heroSub}>
            De teksten, methoden en materialen op deze website zijn ontwikkeld vanuit
            jarenlange praktijk. Hier lees je wat je er wel en niet mee mag doen.
          </p>
        </div>
      </div>

      <div style={st.content}>

        {/* 1. Eigendom */}
        <div style={st.block}>
          <h2 style={st.h2}>Van wie is de inhoud</h2>
          <p style={st.body}>
            Alle inhoud van deze website is eigendom van Marijke Koomen, Praktijk van
            Marijk, of wordt gebruikt met toestemming van de rechthebbende. Dat geldt
            voor teksten, trainingsbeschrijvingen, methoden en modellen, downloads zoals
            de werkgeversbrief, foto's en beeldmateriaal en de vormgeving van de website.
          </p>
          <p style={st.body}>
            Deze inhoud is beschermd door het auteursrecht en andere rechten van
            intellectueel eigendom.
          </p>
        </div>

        {/* 2. Naam en logo */}
        <div style={st.block}>
          <h2 style={st.h2}>Naam en logo</h2>
          <p style={st.body}>
            De naam Praktijk van Marijk, het logo en de bijbehorende beeldmerken zijn
            eigendom van Marijke Koomen. Gebruik ervan, ook in aangepaste of
            vergelijkbare vorm, is alleen toegestaan met mijn schriftelijke toestemming.
          </p>
        </div>

        {/* 3. Wat mag wel */}
        <div style={st.block}>
          <h2 style={st.h2}>Wat mag wel</h2>
          <ul style={st.list}>
            <Wel>Pagina's bekijken, afdrukken of opslaan voor eigen gebruik of voor intern overleg binnen je team.</Wel>
            <Wel>Korte passages citeren, met bronvermelding: Praktijk van Marijk, praktijkvanmarijk.nl.</Wel>
            <Wel>Naar deze website of naar een specifieke pagina linken.</Wel>
            <Wel>De werkgeversbrief downloaden, invullen en gebruiken voor je eigen aanvraag bij je werkgever.</Wel>
          </ul>
        </div>

        {/* 4. Wat mag niet */}
        <div style={st.block}>
          <h2 style={st.h2}>Wat mag niet zonder toestemming</h2>
          <ul style={st.list}>
            <Niet>Teksten, methoden of materialen overnemen, verspreiden of openbaar maken, geheel of gedeeltelijk.</Niet>
            <Niet>Materialen bewerken of gebruiken voor eigen trainingen, intervisie, publicaties of andere commerciële doeleinden.</Niet>
            <Niet>Inhoud van deze website omzetten naar eigen les- of trainingsmateriaal, ook niet met hulp van AI-tools.</Niet>
            <Niet>De inhoud of vormgeving namaken op een andere website of in een ander product.</Niet>
          </ul>
        </div>

        {/* 5. Opdrachtgevers en deelnemers */}
        <div style={st.block}>
          <h2 style={st.h2}>Voor opdrachtgevers en deelnemers</h2>
          <p style={st.body}>
            Neem je deel aan een training, casuïstiekcoaching of andere dienst, dan
            gelden daarnaast de afspraken over intellectuele eigendom in artikel 16 van
            mijn algemene voorwaarden. Studiemateriaal, ankerzinnen en andere
            materialen die je ontvangt, mag je gebruiken voor het doel waarvoor je ze
            hebt gekregen. Verder verspreiden of bewerken kan alleen met schriftelijke
            toestemming.
          </p>
          <a href="#voorwaarden/intellectuele-eigendom" style={st.avLink}>
            Lees artikel 16 van de algemene voorwaarden <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* 6. Toestemming */}
        <div style={st.block}>
          <h2 style={st.h2}>Toestemming vragen</h2>
          <p style={st.body}>
            Wil je iets gebruiken dat hier niet onder valt, bijvoorbeeld een passage in
            een beleidsstuk of een verwijzing in een eigen training? Vraag het gerust.
            Ik denk graag mee over wat mogelijk is.
          </p>
          <div style={st.box}>
            <div style={st.boxLabel}>Contact</div>
            <div style={st.boxLine}>
              Marijke Koomen, Praktijk van Marijk<br />
              <a href="mailto:marijke@praktijkvanmarijk.nl" style={st.link}>marijke@praktijkvanmarijk.nl</a><br />
              <a href="tel:+31627376003" style={st.link}>06 27 37 60 03</a>
            </div>
          </div>
        </div>

        {/* 7. Inbreuk */}
        <div style={st.block}>
          <h2 style={st.h2}>Gebruik zonder toestemming</h2>
          <p style={st.body}>
            Zie ik dat inhoud van deze website of mijn materialen zonder toestemming
            worden gebruikt, dan vraag ik je om dat direct te stoppen. Ik behoud mij het
            recht voor om schade en redelijke kosten te verhalen.
          </p>
          <p style={st.meta}>Versie september 2026</p>
        </div>

        {/* Terug-link */}
        <div style={{ marginTop: 40, paddingTop: 28, borderTop: '0.5px solid var(--line, #e0d8cc)' }}>
          <a
            onClick={() => setRoute && setRoute('home')}
            style={{ fontSize: 14, color: 'var(--fg2, #5a4a38)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}
          >
            ← Terug naar de homepage
          </a>
        </div>

      </div>
    </div>
  );
}

Object.assign(window, { Copyright });
