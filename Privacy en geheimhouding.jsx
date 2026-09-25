import React from "react";

// ── Kleuren op basis van huisstijl praktijkvanmarijk.nl ─────────────────────
const C = {
  rood:       "#89221d",
  okergoud:   "#cf872d",
  olijf:      "#a6ac3e",
  olijfLicht: "#f0f2e4",
  creme:      "#faf8f4",
  donker:     "#2e1f0e",
  mid:        "#5a4a38",
  zacht:      "#8a7a68",
  lijn:       "#e0d8cc",
  beige:      "#e8dfd2",
  wit:        "#ffffff",
};

// ── Stijlhulp ───────────────────────────────────────────────────────────────
const s = {
  page: {
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
    background: C.creme,
    color: C.donker,
    lineHeight: 1.7,
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: 780,
    margin: "0 auto",
    padding: "0 24px",
  },

  // ── Hero
  hero: {
    background: C.donker,
    color: C.creme,
    padding: "72px 24px 64px",
    textAlign: "center",
  },
  heroLabel: {
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: C.okergoud,
    marginBottom: 20,
    fontWeight: 500,
  },
  heroH1: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: "clamp(24px, 4vw, 36px)",
    fontWeight: 500,
    lineHeight: 1.3,
    color: C.creme,
    maxWidth: 640,
    margin: "0 auto 20px",
  },
  heroSub: {
    fontSize: 16,
    color: "#c9bfb5",
    maxWidth: 540,
    margin: "0 auto 36px",
    lineHeight: 1.75,
  },

  // ── Secties
  section: {
    padding: "56px 24px",
  },
  sectionBeige: {
    background: C.beige,
    padding: "56px 24px",
  },
  sectionOlijf: {
    background: C.olijfLicht,
    padding: "56px 24px",
  },

  sectionLabel: {
    fontSize: 11,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: C.rood,
    marginBottom: 12,
    fontWeight: 500,
  },
  h2: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: "clamp(20px, 3vw, 26px)",
    fontWeight: 500,
    color: C.donker,
    lineHeight: 1.35,
    marginBottom: 20,
    marginTop: 0,
  },
  body: {
    fontSize: 15,
    color: C.mid,
    lineHeight: 1.8,
    marginBottom: 16,
  },

  // ── Blokken
  block: {
    background: C.wit,
    border: `1px solid ${C.lijn}`,
    borderRadius: 6,
    padding: "32px 28px",
    marginBottom: 24,
  },
  blockTitle: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: 18,
    fontWeight: 500,
    color: C.donker,
    marginBottom: 12,
    marginTop: 0,
  },
  blockText: {
    fontSize: 15,
    color: C.mid,
    lineHeight: 1.8,
    marginBottom: 0,
  },

  // ── Info box
  infoBox: {
    background: C.olijfLicht,
    border: `1px solid ${C.olijf}`,
    borderRadius: 6,
    padding: "24px 24px",
    marginTop: 24,
  },
  infoTitle: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: 16,
    color: C.donker,
    marginBottom: 10,
    marginTop: 0,
  },
  infoText: {
    fontSize: 14,
    color: C.mid,
    lineHeight: 1.7,
    marginBottom: 0,
  },

  // ── Link
  link: {
    color: C.rood,
    textDecoration: "none",
    fontWeight: 500,
    borderBottom: `1px solid ${C.rood}`,
  },
};

// ── Hoofdpagina ──────────────────────────────────────────────────────────────
export default function PrivacyEnGeheimhouding() {
  return (
    <div style={s.page}>
      {/* Google Fonts laden */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Lora:ital,wght@0,500;1,400&display=swap"
        rel="stylesheet"
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section style={s.hero}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={s.heroLabel}>Privacy en Geheimhouding</div>
          <h1 style={s.heroH1}>
            Je vertrouwen is heilig
          </h1>
          <p style={s.heroSub}>
            Wat je deelt in trainingen en coaching, blijft vertrouwelijk. Hier lees je
            hoe ik met jouw gegevens omga.
          </p>
        </div>
      </section>

      {/* ── Geheimhouding ────────────────────────────────────────────── */}
      <section style={s.sectionBeige}>
        <div style={s.container}>
          <div style={s.block}>
            <h2 style={s.blockTitle}>Geheimhouding</h2>
            <p style={s.blockText}>
              Alles wat deelnemers delen tijdens trainingen, intervisie of casuïstiekcoaching
              wordt door mij vertrouwelijk behandeld. Dit geldt ook voor bedrijfsgevoelige
              informatie over organisaties, werkprocessen, klantgroepen, strategieën en
              interne besluitvorming.
            </p>
            <p style={s.blockText}>
              In de training werken we met geanonimiseerde casuïstiek. Deelnemers blijven
              zelf verantwoordelijk voor het anonimiseren van herkenbare gegevens.
            </p>
            <p style={s.blockText}>
              Ik deel geen informatie met derden, tenzij ik daartoe wettelijk verplicht ben
              of jij daar vooraf schriftelijk toestemming voor geeft.
            </p>
          </div>

          {/* ── Privacy ────────────────────────────────────────────────────── */}
          <div style={s.block}>
            <h2 style={s.blockTitle}>Privacy</h2>
            <p style={s.blockText}>
              Voor inschrijving, facturatie en communicatie verwerk ik persoonsgegevens.
              Ik ga zorgvuldig om met jouw gegevens en bewaar ze niet langer dan nodig.
            </p>
            <p style={s.blockText}>
              In mijn{" "}
              <a href="https://www.praktijkvanmarijk.nl/privacy" style={s.link}>
                privacyverklaring
              </a>
              {" "}lees je welke gegevens ik verwerk, met welk doel en welke rechten je hebt.
            </p>
          </div>

          {/* ── Klachtenafhandeling ────────────────────────────────────────── */}
          <div style={s.block}>
            <h2 style={s.blockTitle}>Klachtenafhandeling</h2>
            <p style={s.blockText}>
              Heb je een klacht over de training, de service of de behandeling van jouw
              gegevens. Je kunt contact opnemen met:
            </p>
            <div style={s.infoBox}>
              <p style={s.infoText}>
                <strong>"Er is iets misgegaan"</strong>
                <br />
                Website:{" "}
                <a href="https://erisietsmisgegaan.nl/" style={s.link}>
                  erisietsmisgegaan.nl
                </a>
                <br />
                (Hier kun je je klacht indienen en volgen hoe deze wordt afgehandeld)
              </p>
              <p style={s.infoText}>
                <strong>Directe contactmogelijkheid met mij:</strong>
                <br />
                <a href="mailto:marijke@praktijkvanmarijk.nl" style={s.link}>
                  marijke@praktijkvanmarijk.nl
                </a>
                <br />
                (Voor snelle afhandeling van praktische zaken kun je mij ook direct benaderen)
              </p>
            </div>
          </div>

          {/* ── Copyright ────────────────────────────────────────────────────── */}
          <div style={s.block}>
            <h2 style={s.blockTitle}>Copyright en Eigendomsrecht</h2>
            <p style={s.blockText}>
              Alle inhoud op deze website (teksten, afbeeldingen, trainingsmaterialen)
              is eigendom van Praktijk van Marijk. Kopiëren, verspreiden of hergebruiken
              zonder schriftelijke toestemming is niet toegestaan.
            </p>
            <p style={s.blockText}>
              Voor vragen over licenties of hergebruik:{" "}
              <a href="mailto:marijke@praktijkvanmarijk.nl" style={s.link}>
                Neem contact op
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Vragen ────────────────────────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionLabel}>Nog een vraag</div>
          <h2 style={s.h2}>Stuur een bericht</h2>
          <p style={s.body}>
            Heb je een vraag over privacy, geheimhouding of hoe ik met jouw gegevens omga.
            Stuur een e-mail naar{" "}
            <a href="mailto:marijke@praktijkvanmarijk.nl" style={s.link}>
              marijke@praktijkvanmarijk.nl
            </a>
            {" "}en je hoort binnen twee werkdagen antwoord.
          </p>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer
        style={{
          background: C.donker,
          color: "#8a7a68",
          fontSize: 12,
          padding: "28px 24px",
          textAlign: "center",
          lineHeight: 1.8,
        }}
      >
        Praktijk van Marijk · marijke@praktijkvanmarijk.nl · 06-27376003
        <br />
        SKJ-registratie 110005309 · geldig t/m 25-05-2028
        <br />
        <a
          href="https://www.praktijkvanmarijk.nl"
          style={{ color: "#8a7a68", textDecoration: "none" }}
        >
          praktijkvanmarijk.nl
        </a>
        <br />
        <a
          href="/Training-intiem-terreur"
          style={{ color: "#8a7a68", textDecoration: "none" }}
        >
          Terug naar training
        </a>
      </footer>
    </div>
  );
}
