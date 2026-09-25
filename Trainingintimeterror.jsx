import { useState } from "react";

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

// ── Webhook URL (aangemaakt via Stroomlijn flow 3679) ───────────────────────
const WEBHOOK_URL =
  "https://app.stroomlijn.nu/api/webhooks/flow/3679/15441ab341b514251bd9cce9fa2ce9886f663788db063c822e4ac0a1c271b9f8";

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
  tag: {
    display: "inline-block",
    background: "rgba(207,135,45,0.18)",
    color: C.okergoud,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "0.06em",
    padding: "4px 12px",
    borderRadius: 3,
    marginBottom: 24,
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

  // ── Items / lijst
  listItem: {
    display: "flex",
    gap: 14,
    marginBottom: 18,
    alignItems: "flex-start",
  },
  listBullet: {
    width: 22,
    height: 22,
    minWidth: 22,
    borderRadius: "50%",
    background: C.rood,
    color: C.creme,
    fontSize: 11,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  listText: {
    fontSize: 15,
    color: C.mid,
    lineHeight: 1.7,
  },

  // ── Checklist
  check: {
    display: "flex",
    gap: 12,
    marginBottom: 12,
    alignItems: "flex-start",
  },
  checkIcon: {
    color: C.olijf,
    fontWeight: 700,
    fontSize: 15,
    marginTop: 2,
    minWidth: 18,
  },

  // ── Blokken dag 1 / dag 2
  dagGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 20,
    marginTop: 28,
  },
  dagCard: {
    background: C.creme,
    border: `1px solid ${C.lijn}`,
    borderRadius: 6,
    padding: "24px 22px",
  },
  dagLabel: {
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: C.okergoud,
    marginBottom: 10,
    fontWeight: 600,
  },
  dagTitle: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: 17,
    fontWeight: 500,
    color: C.donker,
    marginBottom: 12,
  },

  // ── Praktisch blok
  praktischGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 16,
    marginTop: 28,
  },
  praktischItem: {
    background: C.creme,
    border: `1px solid ${C.lijn}`,
    borderRadius: 6,
    padding: "16px 18px",
  },
  praktischLabel: {
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: C.zacht,
    marginBottom: 6,
    fontWeight: 500,
  },
  praktischValue: {
    fontSize: 15,
    color: C.donker,
    fontWeight: 500,
    lineHeight: 1.5,
  },

  // ── Prijs
  prijsBox: {
    background: C.donker,
    color: C.creme,
    borderRadius: 6,
    padding: "36px 32px",
    marginTop: 32,
    display: "flex",
    flexWrap: "wrap",
    gap: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  prijsBedrag: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: 34,
    fontWeight: 500,
    color: C.okergoud,
    marginBottom: 4,
  },
  prijsSub: {
    fontSize: 13,
    color: "#b0a49a",
  },

  // ── Intake CTA
  ctaBox: {
    background: C.rood,
    borderRadius: 6,
    padding: "52px 32px",
    textAlign: "center",
    marginTop: 0,
  },
  ctaH2: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: "clamp(20px, 3vw, 26px)",
    fontWeight: 500,
    color: C.creme,
    marginBottom: 12,
    marginTop: 0,
  },
  ctaSub: {
    fontSize: 15,
    color: "#e0c8c6",
    marginBottom: 36,
    lineHeight: 1.75,
  },

  // ── Formulier
  form: {
    maxWidth: 440,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 4,
    border: `1.5px solid rgba(255,255,255,0.25)`,
    background: "rgba(255,255,255,0.10)",
    color: C.creme,
    fontSize: 15,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    boxSizing: "border-box",
  },
  inputFocus: {
    borderColor: C.okergoud,
  },
  submitBtn: {
    background: C.okergoud,
    color: C.donker,
    border: "none",
    borderRadius: 4,
    padding: "13px 24px",
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
    marginTop: 4,
    letterSpacing: "0.02em",
  },
  submitBtnDisabled: {
    background: "#8a7a68",
    cursor: "not-allowed",
  },
  disclaimer: {
    fontSize: 12,
    color: "#c8bab8",
    marginTop: 12,
    lineHeight: 1.6,
  },

  // ── Success
  success: {
    background: C.olijfLicht,
    border: `1px solid ${C.olijf}`,
    borderRadius: 6,
    padding: "24px 24px",
    marginTop: 20,
    maxWidth: 440,
    margin: "0 auto",
    textAlign: "center",
  },
  successTitle: {
    fontFamily: "'Lora', Georgia, serif",
    fontSize: 18,
    color: C.donker,
    marginBottom: 10,
  },
  successText: {
    fontSize: 14,
    color: C.mid,
    lineHeight: 1.7,
  },

  // ── Voorwaarden notitie
  voorwaardenBox: {
    background: C.beige,
    border: `1px solid ${C.lijn}`,
    borderRadius: 6,
    padding: "18px 20px",
    fontSize: 13,
    lineHeight: 1.7,
    color: C.mid,
  },
  voorwaardenLink: {
    color: C.rood,
    textDecoration: "none",
    fontWeight: 500,
  },
};

// ── Formuliercomponent ───────────────────────────────────────────────────────
function IntakeFormulier() {
  const [form, setForm] = useState({ naam: "", email: "", telefoon: "" });
  const [focus, setFocus] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.naam.trim() || !form.email.trim() || !form.telefoon.trim()) {
      setError("Vul alle velden in.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Vul een geldig e-mailadres in.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactName: form.naam,
          contactEmail: form.email,
          contactPhone: form.telefoon,
          data: {
            bron: "Salespagina training intiem terreur",
            traject: "Tweedaagse vaardigheidstraining",
          },
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={s.success}>
        <div style={s.successTitle}>Aanmelding ontvangen</div>
        <p style={s.successText}>
          Je hoort binnen twee werkdagen van Marijke voor een korte intake. Zij
          kijkt dan samen met je of de training aansluit op jouw rol en
          leerdoel.
        </p>
      </div>
    );
  }

  return (
    <div style={s.form}>
      {["naam", "email", "telefoon"].map((veld) => (
        <input
          key={veld}
          name={veld}
          type={veld === "email" ? "email" : veld === "telefoon" ? "tel" : "text"}
          placeholder={
            veld === "naam"
              ? "Naam"
              : veld === "email"
              ? "E-mailadres"
              : "Telefoonnummer"
          }
          value={form[veld]}
          onChange={handleChange}
          onFocus={() => setFocus(veld)}
          onBlur={() => setFocus("")}
          style={{
            ...s.input,
            ...(focus === veld ? s.inputFocus : {}),
          }}
        />
      ))}
      {error && (
        <p style={{ color: "#f5c5c2", fontSize: 13, margin: "0" }}>{error}</p>
      )}
      <button
        onClick={handleSubmit}
        disabled={status === "loading"}
        style={{
          ...s.submitBtn,
          ...(status === "loading" ? s.submitBtnDisabled : {}),
        }}
      >
        {status === "loading" ? "Bezig..." : "Intake aanvragen"}
      </button>
      {status === "error" && (
        <p style={{ color: "#f5c5c2", fontSize: 13, margin: "0" }}>
          Er ging iets mis. Probeer het opnieuw of mail naar
          marijke@praktijkvanmarijk.nl
        </p>
      )}
      <p style={s.disclaimer}>
        Aanmelden is vrijblijvend. Na je aanmelding volgt een korte intake.
        Deelname wordt pas bevestigd na afstemming.
      </p>
    </div>
  );
}

// ── Hoofdpagina ──────────────────────────────────────────────────────────────
export default function TrainingPage() {
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
          <div style={s.tag}>Tweedaagse vaardigheidstraining</div>
          <h1 style={s.heroH1}>
            Intiem terreur herkennen en regie houden onder manipulatieve druk
          </h1>
          <p style={s.heroSub}>
            Voor ervaren jeugdprofessionals die in complexe
            scheidingsdynamieken werken en hun waarneming, begrenzing en
            interventies toetsbaar willen aanscherpen.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, color: "#b0a49a", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: C.olijf }}>✔</span> Max. 8 deelnemers
            </span>
            <span style={{ fontSize: 13, color: "#b0a49a", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: C.olijf }}>✔</span> Acteursimulaties
            </span>
            <span style={{ fontSize: 13, color: "#b0a49a", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: C.olijf }}>✔</span> SKJ-accreditatie aangevraagd
            </span>
          </div>
        </div>
      </section>

      {/* ── Voor wie ─────────────────────────────────────────────────── */}
      <section style={s.sectionBeige}>
        <div style={s.container}>
          <div style={s.sectionLabel}>Voor wie</div>
          <h2 style={s.h2}>Je werkt met gezinnen waar het niet klopt</h2>
          <p style={s.body}>
            Je voelt het in een gesprek: er is spanning, ze geven antwoorden die kloppen en toch niet
            kloppen. Je intuïtie geeft een signaal. Je verslaglegging vraagt om
            feiten.
          </p>
          <p style={s.body}>
            Deze training is voor professionals die in hun dagelijkse werk
            gesprekken voeren met ouders in hoog conflict, machtsdisbalans of
            dwingende controle. Denk aan jeugdbeschermers, gezinscoaches,
            wijkteamprofessionals, gedragswetenschappers, casusregisseurs en
            aandachtsfunctionarissen.
          </p>

          <div style={{ marginTop: 28 }}>
            <div style={s.sectionLabel}>Niet voor wie</div>
            <p style={s.body}>
              Deze training is selectief. Ze past niet als je geen mandaat hebt
              om te interveniëren, geen gesprekken voert met ouders in conflict,
              of als je vooral meer kennis zoekt zonder te willen oefenen. De
              trainer neemt ook geen casuïstiek van je over.
            </p>
          </div>
        </div>
      </section>

      {/* ── Wat je leert ─────────────────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionLabel}>Na afloop</div>
          <h2 style={s.h2}>Wat je concreet meeneemt</h2>
          {[
            "Je waarneemt wat er in het gesprek gebeurt, in jezelf, in de ander en in het systeem, en je benoemt dat professioneel.",
            "Je herkent manipulatie, omkering en ondermijning en brengt het gesprek terug naar feiten, veiligheid en mandaat.",
            "Je houdt regie onder druk, inclusief tempo, structuur en besluitvorming, zonder je professionele positie te verliezen.",
            "Je doet begrensde interventies die juridisch en professioneel kloppen, zonder escalatie te voeden.",
            "Je werkt met persoonlijke handelingsankers: korte, herhaalbare zinnen en acties die je in het moment terugbrengen naar jouw rol.",
          ].map((tekst, i) => (
            <div key={i} style={s.listItem}>
              <div style={s.listBullet}>{i + 1}</div>
              <div style={s.listText}>{tekst}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Opbouw ───────────────────────────────────────────────────── */}
      <section style={s.sectionOlijf}>
        <div style={s.container}>
          <div style={s.sectionLabel}>Opbouw</div>
          <h2 style={s.h2}>Twee dagen, oplopend in intensiteit</h2>
          <div style={s.dagGrid}>
            <div style={s.dagCard}>
              <div style={s.dagLabel}>Dag 1</div>
              <div style={s.dagTitle}>Fundament, waarneming en taal</div>
              <p style={{ ...s.body, marginBottom: 0 }}>
                Wat is intiem terreur en hoe verschilt het van een
                gewoon conflict. Hoe neem je belichaamd waar. Hoe vertaal je
                een niet-pluis gevoel naar observaties. Oefenen met korte
                scenario's en voorbereiding op de toetsing de dag daarna.
              </p>
            </div>
            <div style={s.dagCard}>
              <div style={s.dagLabel}>Dag 2</div>
              <div style={s.dagTitle}>Intensief oefenen en toetsmoment</div>
              <p style={{ ...s.body, marginBottom: 0 }}>
                Simulaties met professionele acteurs onder toenemende druk.
                Directe feedback op kerncriteria. Toetsmoment: je laat zien
                dat je regie houdt, manipulatie herkent en begrensd
                intervenieert. Vertaling naar jouw eigen praktijk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Praktisch ────────────────────────────────────────────────── */}
      <section style={s.sectionBeige}>
        <div style={s.container}>
          <div style={s.sectionLabel}>Praktisch</div>
          <h2 style={s.h2}>Wat je moet weten</h2>
          <div style={s.praktischGrid}>
            {[
              { label: "Duur", value: "2 dagen" },
              { label: "Tijden", value: "09:30 tot 16:30" },
              { label: "Groepsgrootte", value: "Max. 8 deelnemers" },
              { label: "Locatie", value: "Volgt, in overleg" },
              { label: "SKJ-punten", value: "Aangevraagd, volgt na toekenning" },
              { label: "Incompany", value: "Mogelijk, vraag naar de opties" },
            ].map((item) => (
              <div key={item.label} style={s.praktischItem}>
                <div style={s.praktischLabel}>{item.label}</div>
                <div style={s.praktischValue}>{item.value}</div>
              </div>
            ))}
          </div>

          <div style={s.prijsBox}>
            <div>
              <div style={s.prijsBedrag}>€ 1.500</div>
              <div style={s.prijsSub}>
                excl. btw per deelnemer, volledige tweedaagse
              </div>
            </div>
            <div style={{ fontSize: 14, color: "#c0b5ab", lineHeight: 1.7, maxWidth: 260 }}>
              Inclusief acteursimulaties, toetsing en persoonlijke feedback.
              Deelname wordt bevestigd na een korte intake.
            </div>
          </div>
        </div>
      </section>

      {/* ── Over Marijke (kort) ───────────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.sectionLabel}>Wie geeft de training</div>
          <h2 style={s.h2}>Marijke Koomen</h2>
          <p style={s.body}>
            Marijke werkt twintig jaar in de jeugdbescherming. Ze was
            jeugd- en gezinsbeschermer bij De Jeugd- en Gezinsbeschermers
            Noord-Holland, medewerker bij Veilig Thuis Noord-Holland Noord en
            schreef rapportages richting de kinderrechter en de Raad voor de
            Kinderbescherming.
          </p>
          <p style={s.body}>
            Ze is SKJ-geregistreerd jeugd- en gezinsprofessional
            (nr. 110005309). Ze combineert methodische scherpte met
            ervaringsdeskundigheid op het thema intiem terreur. Ze traint
            professionals om te zien wat er onder de oppervlakte speelt, en om
            dat te vertalen naar feitelijke observaties en onderbouwde
            beslissingen.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}>
            {[
              "SKJ-geregistreerd",
              "Veilig Thuis",
              "Raad voor de Kinderbescherming",
              "20 jaar uitvoerende ervaring",
              "Dwingende controle — Stichting Het Verdwenen Zelf (2025)",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: C.beige,
                  border: `1px solid ${C.lijn}`,
                  borderRadius: 3,
                  fontSize: 12,
                  color: C.mid,
                  padding: "4px 10px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Voorwaarden notitie ──────────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.container}>
          <div style={s.voorwaardenBox}>
            <strong>Let op.</strong> Dit traject volgt de voorwaarden van inschrijving en deelname. Lees de
            <a
              href="/Termijnen%20en%20voorwaarden%20inschrijving,%20training%20intiem%20terreur.%20Sept.%202026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={s.voorwaardenLink}
            >
              {" "}termijnen en voorwaarden{" "}
            </a>
            aandachtig voordat je je aanmeldt.
          </div>
        </div>
      </section>

      {/* ── CTA / Formulier ──────────────────────────────────────────── */}
      <section style={s.ctaBox}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <h2 style={s.ctaH2}>Intake aanvragen</h2>
          <p style={s.ctaSub}>
            Na je aanmelding neemt Marijke binnen twee werkdagen contact op voor
            een korte intake. Zij toetst dan of de training aansluit op jouw
            rol, mandaat en leerdoel. Deelname is selectief.
          </p>
          <IntakeFormulier />
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
          href="/Privacy-en-Geheimhouding"
          style={{ color: "#8a7a68", textDecoration: "none" }}
        >
          Privacy en Geheimhouding
        </a>
        {" · "}
        <a
          href="/Termijnen%20en%20voorwaarden%20inschrijving,%20training%20intiem%20terreur.%20Sept.%202026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#8a7a68", textDecoration: "none" }}
        >
          Voorwaarden inschrijving
        </a>
      </footer>
    </div>
  );
}
