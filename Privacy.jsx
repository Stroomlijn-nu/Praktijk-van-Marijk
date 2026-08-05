// Privacyverklaring — Praktijk van Marijk
// Versie juli 2026
// Zelfde leespagina-opzet als de Algemene Voorwaarden: TOC links, genummerde artikelen rechts.
// Brand: bordeaux primair, oker voor cijfers, Lora voor titels, DM Sans voor body.

function Privacyverklaring() {
  const articles = [
    {
      nr: '01',
      slug: 'verantwoordelijke',
      title: 'Wie is verantwoordelijk voor uw gegevens?',
      render: () => (
        <React.Fragment>
          <p style={pPv.body}>De verwerkingsverantwoordelijke voor de in deze verklaring beschreven verwerkingen is:</p>
          <div style={pPv.bedrijfsgegevens}>
            <div style={pPv.bgGrid}>
              <div style={pPv.bgLabel}>Praktijk</div>
              <div style={pPv.bgValue}>Praktijk van Marijk (eenmanszaak van Marijke Koomen)</div>
              <div style={pPv.bgLabel}>Adres</div>
              <div style={pPv.bgValue}>Breitnerhof 150, 1628 XN Hoorn</div>
              <div style={pPv.bgLabel}>E-mail</div>
              <div style={pPv.bgValue}><a style={pPv.bgLink} href="mailto:marijke@praktijkvanmarijk.nl">marijke@praktijkvanmarijk.nl</a></div>
              <div style={pPv.bgLabel}>Telefoon</div>
              <div style={pPv.bgValue}><a style={pPv.bgLink} href="tel:+31627376003">06 - 27 37 60 03</a></div>
              <div style={pPv.bgLabel}>KvK</div>
              <div style={pPv.bgValueMono}>72258209</div>
            </div>
          </div>
          <p style={pPv.body}>Praktijk van Marijk heeft geen wettelijke verplichting om een functionaris voor gegevensbescherming aan te stellen. Voor vragen over privacy kunt u rechtstreeks contact opnemen via bovenstaande gegevens.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '02',
      slug: 'wanneer-geldt-verklaring',
      title: 'Wanneer geldt deze privacyverklaring?',
      render: () => (
        <React.Fragment>
          <p style={pPv.body}>Deze verklaring geldt voor het verwerken van persoonsgegevens door Praktijk van Marijk als verwerkingsverantwoordelijke, waaronder in de volgende situaties:</p>
          <ul style={pPv.list}>
            <li>het bezoeken van en contact opnemen via onze website www.praktijkvanmarijk.nl</li>
            <li>aanmelding en inschrijving voor open trainingen, intervisie en overige diensten</li>
            <li>de intake voorafgaand aan deelname</li>
            <li>de uitvoering van trainingen, intervisie, casuïstiekbegeleiding en advies</li>
            <li>de terugkoppeling van deelname en behaalde punten aan Stichting Kwaliteitsregister Jeugd (SKJ)</li>
            <li>financiële administratie en facturatie</li>
            <li>het versturen van een nieuwsbrief, indien u zich daarvoor heeft aangemeld</li>
          </ul>
          <p style={pPv.body}>Wanneer Praktijk van Marijk in opdracht van een organisatie persoonsgegevens verwerkt volgens de instructies van die organisatie, bijvoorbeeld bij het werken met cliënt- of dossiergegevens, treedt Praktijk van Marijk op als verwerker. In dat geval gelden de afspraken uit de verwerkersovereenkomst met die organisatie en is die organisatie verwerkingsverantwoordelijke.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '03',
      slug: 'welke-gegevens',
      title: 'Welke persoonsgegevens verwerken wij?',
      render: () => (
        <React.Fragment>
          <p style={pPv.body}>Afhankelijk van de dienst verwerken wij de volgende categorieën persoonsgegevens:</p>
          <DataTable
            headers={['Categorie', 'Voorbeelden']}
            rows={[
              ['Contact- en identificatiegegevens', 'naam, functie, organisatie, e-mailadres, telefoonnummer'],
              ['Aanmeld- en intakegegevens', 'gegevens die u bij aanmelding of intake verstrekt, zoals leerdoelen, werkervaring en de reden van deelname'],
              ['Registratiegegevens', 'SKJ-registratienummer, beroepsregistratie, aanwezigheid en behaalde accreditatiepunten'],
              ['Financiële gegevens', 'factuuradres, bankrekeningnummer, betaalgegevens'],
              ['Correspondentie', 'de inhoud van uw berichten aan ons'],
            ]}
          />
          <p style={pPv.body}>De website gebruikt Google Tag voor bezoekersanalyse. Daarom verwerken wij ook websitegegevens zoals IP-adres, apparaat- en browsergegevens en surfgedrag. Zie artikel 11 voor de cookies die hiervoor worden geplaatst.</p>
          <p style={pPv.body}><strong>Bijzondere persoonsgegevens.</strong> Wij streven ernaar geen bijzondere categorieën van persoonsgegevens (zoals gezondheidsgegevens) te verwerken. Als de intake of casuïstiek onverhoopt gevoelige informatie kan bevatten, vragen wij u die tot het noodzakelijke te beperken. Casuïstiek bespreken wij zoveel mogelijk geanonimiseerd.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '04',
      slug: 'doeleinden-grondslagen',
      title: 'Doeleinden en grondslagen',
      render: () => (
        <React.Fragment>
          <p style={pPv.body}>Wij verwerken uw persoonsgegevens alleen voor welbepaalde doeleinden en uitsluitend op een van de grondslagen van artikel 6 AVG:</p>
          <DataTable
            headers={['Doel', 'Grondslag (art. 6 AVG)']}
            rows={[
              ['Uitvoeren van de overeenkomst: aanmelding, intake, deelname, communicatie', 'noodzakelijk voor de uitvoering van de overeenkomst (art. 6 lid 1 sub b)'],
              ['Facturatie en financiële administratie', 'wettelijke verplichting (art. 6 lid 1 sub c) en uitvoering overeenkomst (sub b)'],
              ['Terugkoppeling deelname en punten aan SKJ', 'gerechtvaardigd belang en uitvoering overeenkomst (art. 6 lid 1 sub f en b)'],
              ['Bewaren van administratie voor de wettelijke termijn', 'wettelijke verplichting (art. 6 lid 1 sub c)'],
              ['Verbeteren en beveiligen van dienstverlening en website', 'gerechtvaardigd belang (art. 6 lid 1 sub f)'],
              ['Versturen van een nieuwsbrief', 'toestemming (art. 6 lid 1 sub a)'],
            ]}
          />
          <p style={pPv.body}>Belangrijk, het aangaan van een overeenkomst is op zichzelf geen toestemming voor gegevensverwerking. Wij baseren onze verwerking daarom niet op toestemming, behalve waar dat expliciet is aangegeven, zoals de nieuwsbrief. Een gegeven toestemming kan altijd worden ingetrokken.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '05',
      slug: 'ontvangers-verwerkers',
      title: 'Ontvangers en verwerkers',
      render: () => (
        <React.Fragment>
          <p style={pPv.body}>Wij delen uw persoonsgegevens niet met derden voor commerciële doeleinden. Wij schakelen wel dienstverleners in die namens ons gegevens verwerken (verwerkers) of aan wie wij op grond van onze werkwijze of een wettelijke verplichting gegevens verstrekken.</p>
          <div style={pPv.flag}>
            <span style={pPv.flagLabel}>Aan te passen</span>
            <p style={pPv.flagText}>Vul hier de daadwerkelijke leveranciers in. Voorbeelden:</p>
            <ul style={pPv.flagList}>
              <li>Stichting Kwaliteitsregister Jeugd (SKJ), voor de terugkoppeling van deelname en accreditatiepunten</li>
              <li>e-mail- en kantoorsoftware (bijvoorbeeld Microsoft of Google)</li>
              <li>boekhouder of boekhoudsoftware (naam invullen)</li>
              <li>websitehosting en eventuele nieuwsbriefsoftware (naam invullen)</li>
              <li>bevoegde instanties, wanneer daartoe een wettelijke verplichting bestaat</li>
            </ul>
          </div>
          <p style={pPv.body}>Met verwerkers die in onze opdracht persoonsgegevens verwerken, sluiten wij een verwerkersovereenkomst waarin afspraken over beveiliging en vertrouwelijkheid zijn vastgelegd.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '06',
      slug: 'doorgifte-buiten-eer',
      title: 'Doorgifte buiten de Europese Economische Ruimte',
      render: () => (
        <React.Fragment>
          <p style={pPv.body}>Wij verwerken uw gegevens in beginsel binnen de Europese Economische Ruimte (EER). Voor de website-analyse gebruiken wij Google Tag. Google kan gegevens verwerken op servers buiten de EER, onder meer in de Verenigde Staten. Voor deze doorgifte gelden de door de Europese Commissie vastgestelde modelcontractbepalingen (standard contractual clauses) tussen Praktijk van Marijk en Google.</p>
          <div style={pPv.flag}>
            <span style={pPv.flagLabel}>Nog te verifiëren</span>
            <p style={pPv.flagText}>Controleer bij Google of de huidige verwerkersovereenkomst (Data Processing Terms) is geaccepteerd in het Google-account, en of IP-anonimisering aanstaat. Voor andere leveranciers die mogelijk buiten de EER verwerken, geldt dezelfde controle.</p>
          </div>
        </React.Fragment>
      ),
    },
    {
      nr: '07',
      slug: 'bewaartermijnen',
      title: 'Hoe lang bewaren wij uw gegevens?',
      render: () => (
        <React.Fragment>
          <p style={pPv.body}>Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld, of zolang een wettelijke bewaarplicht dit voorschrijft.</p>
          <DataTable
            headers={['Gegevens', 'Bewaartermijn']}
            rows={[
              ['Financiële en fiscale administratie (facturen)', '7 jaar (wettelijke fiscale bewaarplicht, art. 52 AWR)'],
              ['Aanmeld-, intake- en deelnamegegevens', '2 jaar na afronding van de dienst'],
              ['SKJ-registratiegegevens (aanwezigheid en punten)', 'conform de eisen van SKJ en de accreditatie'],
              ['Contactgegevens voor de nieuwsbrief', 'tot afmelding'],
              ['Overige correspondentie', '1 tot 2 jaar'],
            ]}
          />
          <div style={pPv.flag}>
            <span style={pPv.flagLabel}>Nog te verifiëren</span>
            <p style={pPv.flagText}>De termijn voor SKJ-registratiegegevens is niet met zekerheid vast te stellen zonder navraag bij SKJ zelf. Verifieer bij SKJ hoeveel jaar terug bewijs van aanwezigheid en behaalde punten aantoonbaar moet blijven bij een audit.</p>
          </div>
        </React.Fragment>
      ),
    },
    {
      nr: '08',
      slug: 'beveiliging',
      title: 'Beveiliging',
      render: () => (
        <p style={pPv.body}>Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking. Denk aan beveiligde apparatuur en accounts, sterke wachtwoorden, het beperken van toegang tot gegevens en het zoveel mogelijk anonimiseren van casuïstiek. Bij een datalek met risico voor uw rechten en vrijheden melden wij dit conform de AVG bij de Autoriteit Persoonsgegevens en, waar vereist, bij u.</p>
      ),
    },
    {
      nr: '09',
      slug: 'uw-rechten',
      title: 'Uw rechten',
      render: () => (
        <React.Fragment>
          <p style={pPv.body}>U heeft op grond van de AVG de volgende rechten met betrekking tot uw persoonsgegevens:</p>
          <ul style={pPv.list}>
            <li>recht op inzage in de gegevens die wij van u verwerken</li>
            <li>recht op rectificatie van onjuiste of onvolledige gegevens</li>
            <li>recht op verwijdering (het recht om vergeten te worden), voor zover wij niet wettelijk verplicht zijn de gegevens te bewaren</li>
            <li>recht op beperking van de verwerking</li>
            <li>recht van bezwaar tegen verwerking op grond van gerechtvaardigd belang</li>
            <li>recht op overdraagbaarheid van gegevens (dataportabiliteit)</li>
            <li>recht om een gegeven toestemming op elk moment in te trekken, zonder dat dit afbreuk doet aan de rechtmatigheid van de verwerking voor de intrekking</li>
          </ul>
          <p style={pPv.body}>U kunt een verzoek indienen via <a href="mailto:marijke@praktijkvanmarijk.nl" style={pPv.bgLink}>marijke@praktijkvanmarijk.nl</a>. Wij reageren binnen een maand. Om zeker te weten dat het verzoek van u afkomstig is, kunnen wij u vragen zich te identificeren op een wijze die niet meer gegevens vraagt dan nodig.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '10',
      slug: 'klacht-ap',
      title: 'Klacht bij de Autoriteit Persoonsgegevens',
      render: () => (
        <p style={pPv.body}>Bent u van mening dat wij niet zorgvuldig met uw persoonsgegevens omgaan, dan gaan wij hierover graag met u in gesprek. U heeft daarnaast het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens via <a href="https://www.autoriteitpersoonsgegevens.nl" style={pPv.bgLink}>www.autoriteitpersoonsgegevens.nl</a>.</p>
      ),
    },
    {
      nr: '11',
      slug: 'cookies',
      title: 'Cookies',
      render: () => (
        <React.Fragment>
          <p style={pPv.body}>De website gebruikt functionele cookies die nodig zijn om de website goed te laten werken. Daarnaast staat Google Tag actief voor bezoekersanalyse, vermoedelijk Google Analytics (GA4). Dit zijn niet-functionele cookies. Voor het plaatsen hiervan wordt vooraf toestemming gevraagd via een cookiemelding. Zonder toestemming worden deze cookies niet geplaatst.</p>
          <div style={pPv.flag}>
            <span style={pPv.flagLabel}>Nog te verifiëren</span>
            <p style={pPv.flagText}>Bevestig welke Google-dienst precies actief staat, GA4 analytics, Google Ads-conversietracking, of beide. Controleer ook of de cookiebanner daadwerkelijk vooraf toestemming vraagt (opt-in), en niet pas na plaatsing van de cookies.</p>
          </div>
        </React.Fragment>
      ),
    },
    {
      nr: '12',
      slug: 'wijzigingen',
      title: 'Wijzigingen',
      render: () => (
        <p style={pPv.body}>Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen. De actuele versie staat altijd op onze website. Deze versie is vastgesteld in juli 2026.</p>
      ),
    },
  ];

  const handlePrint = (e) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div className="pvm-pv" data-screen-label="08 Privacyverklaring">
      {/* ============ HERO ============ */}
      <div className="pvm-section pvm-pv__hero" style={{ padding: '64px 48px 40px', maxWidth: 900 }}>
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
          Privacyverklaring.
        </h1>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 17,
          color: 'var(--fg2)',
          lineHeight: 1.7,
          margin: '0 0 28px',
          maxWidth: '60ch',
        }}>
          Hierin staat welke persoonsgegevens Praktijk van Marijk verwerkt, met welk doel, op welke grondslag en hoe lang deze worden bewaard. Ook de rechten die u heeft, zijn hier terug te vinden. Deze verklaring geldt voor de website, aanmeldingen, intake, deelname aan trainingen en overige dienstverlening.
        </p>

        <div className="pvm-pv__meta" style={{
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
            <span style={{ color: 'var(--fg1)', fontWeight: 500 }}>Juli 2026</span>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* ============ BODY: TOC + ARTIKELEN ============ */}
      <div className="pvm-pv__body" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 220px) minmax(0, 1fr)',
        gap: 72,
        padding: '56px 48px 64px',
        alignItems: 'start',
      }}>
        {/* TOC */}
        <nav className="pvm-pv__toc" aria-label="Inhoudsopgave">
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
        <div className="pvm-pv__articles" style={{ maxWidth: 720 }}>
          {articles.map((a, i) => (
            <article key={a.slug} id={a.slug} className="pvm-pv__article" style={{
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
                <div className="pvm-pv__article-rule" style={{
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
                }}>Artikel {parseInt(a.nr, 10)}</div>
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
          <div className="pvm-pv__contact" style={{
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
            }}>Vragen?</div>
            <h3 style={{
              fontFamily: 'Lora, serif',
              fontSize: 20,
              fontWeight: 500,
              color: 'var(--fg-on-dark)',
              lineHeight: 1.4,
              margin: '0 0 14px',
            }}>Heeft u vragen over deze privacyverklaring?</h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: 'var(--fg-on-dark)',
              lineHeight: 1.7,
              margin: 0,
              opacity: 0.85,
            }}>
              Neem gerust contact op via{' '}
              <a href="mailto:marijke@praktijkvanmarijk.nl" style={{ color: 'var(--accent-3)', textDecoration: 'none', borderBottom: '0.5px solid var(--accent-3)' }}>marijke@praktijkvanmarijk.nl</a>
              {' '}of{' '}
              <a href="tel:+31627376003" style={{ color: 'var(--accent-3)', textDecoration: 'none', borderBottom: '0.5px solid var(--accent-3)', fontVariantNumeric: 'tabular-nums' }}>06 - 27 37 60 03</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Herbruikbare tabelcomponent voor gegevenscategorieën, doeleinden en bewaartermijnen ----
function DataTable({ headers, rows, flagged }) {
  return (
    <div style={pPv.tableWrap}>
      <div style={{ ...pPv.tableRow, ...pPv.tableHeaderRow }}>
        <div style={pPv.tableHeaderCell}>{headers[0]}</div>
        <div style={pPv.tableHeaderCell}>{headers[1]}</div>
      </div>
      {rows.map((row, i) => (
        <div key={i} style={{ ...pPv.tableRow, borderTop: '0.5px solid var(--line)' }}>
          <div style={pPv.tableCellLabel}>{row[0]}</div>
          <div style={flagged ? pPv.tableCellFlagged : pPv.tableCellValue}>{row[1]}</div>
        </div>
      ))}
    </div>
  );
}

// ---- styles object (uniquely named to avoid global collisions) ----
const pPv = {
  body: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 15,
    color: 'var(--fg2)',
    lineHeight: 1.75,
    margin: '0 0 14px',
  },
  list: {
    margin: '0 0 14px',
    padding: '0 0 0 20px',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 15,
    color: 'var(--fg2)',
    lineHeight: 1.75,
  },
  bedrijfsgegevens: {
    background: 'var(--bg-sunken)',
    borderRadius: 6,
    padding: '24px 24px',
    margin: '8px 0 16px',
    border: '0.5px solid var(--line)',
  },
  bgGrid: {
    display: 'grid',
    gridTemplateColumns: '110px 1fr',
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
  bgValueMono: {
    color: 'var(--fg1)',
    fontVariantNumeric: 'tabular-nums',
    letterSpacing: '0.02em',
  },
  bgLink: {
    color: 'var(--fg1)',
    textDecoration: 'none',
    borderBottom: '0.5px solid var(--line-strong)',
  },
  // ── Tabel (categorieën, doeleinden, bewaartermijnen) ──
  tableWrap: {
    border: '0.5px solid var(--line)',
    borderRadius: 6,
    overflow: 'hidden',
    margin: '8px 0 18px',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
    columnGap: 20,
  },
  tableHeaderRow: {
    background: 'var(--bg-sunken)',
  },
  tableHeaderCell: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 11,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--fg3)',
    fontWeight: 500,
    padding: '12px 18px',
  },
  tableCellLabel: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--fg1)',
    lineHeight: 1.6,
    padding: '14px 18px',
  },
  tableCellValue: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 14,
    color: 'var(--fg2)',
    lineHeight: 1.6,
    padding: '14px 18px',
  },
  tableCellFlagged: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 14,
    color: 'var(--accent-3)',
    lineHeight: 1.6,
    padding: '14px 18px',
  },
  // ── Aan-te-passen blok ──
  flag: {
    background: 'rgba(207,135,45,0.08)',
    border: '0.5px solid var(--accent-3)',
    borderLeft: '3px solid var(--accent-3)',
    borderRadius: 6,
    padding: '16px 20px',
    margin: '4px 0 18px',
  },
  flagLabel: {
    display: 'inline-block',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 11,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--accent-3)',
    fontWeight: 600,
    marginBottom: 8,
  },
  flagText: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 14,
    color: 'var(--fg2)',
    lineHeight: 1.7,
    margin: 0,
  },
  flagList: {
    margin: '8px 0 0',
    padding: '0 0 0 18px',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 14,
    color: 'var(--fg2)',
    lineHeight: 1.7,
  },
  flagInline: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 13,
    color: 'var(--accent-3)',
    lineHeight: 1.7,
    margin: '-8px 0 14px',
    fontStyle: 'italic',
  },
};

Object.assign(window, { Privacyverklaring });
