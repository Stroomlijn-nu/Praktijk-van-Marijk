// Algemene Voorwaarden — Praktijk van Marijk
// Lange leespagina met TOC links, genummerde artikelen rechts.
// Brand: bordeaux primair, oker voor cijfers, Lora voor titels, DM Sans voor body.

function AlgemeneVoorwaarden() {
  const articles = [
    {
      nr: '01',
      slug: 'wie-zijn-we',
      title: 'Wie zijn we?',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}>
            In deze voorwaarden wordt Praktijk van Marijk aangeduid als <em>opdrachtnemer</em>. U, de professional of organisatie die de dienst afneemt, wordt aangeduid als <em>opdrachtgever</em>.
          </p>
          <div style={pAv.bedrijfsgegevens}>
            <div className="pvm-av__bg-grid" style={pAv.bgGrid}>
              <div data-bg="label" style={pAv.bgLabel}>Eigenaar</div>
              <div style={pAv.bgValue}>Marijke Koomen</div>
              <div data-bg="label" style={pAv.bgLabel}>Adres</div>
              <div style={pAv.bgValue}>Breitnerhof 150, 1628 XN Hoorn</div>
              <div data-bg="label" style={pAv.bgLabel}>Telefoon</div>
              <div style={pAv.bgValue}><a style={pAv.bgLink} href="tel:+31627376003">06 - 27 37 60 03</a></div>
              <div data-bg="label" style={pAv.bgLabel}>E-mail</div>
              <div style={pAv.bgValue}><a style={pAv.bgLink} href="mailto:marijke@praktijkvanmarijk.nl">marijke@praktijkvanmarijk.nl</a></div>
              <div data-bg="label" style={pAv.bgLabel}>Website</div>
              <div style={pAv.bgValue}><a style={pAv.bgLink} href="https://www.praktijkvanmarijk.nl">www.praktijkvanmarijk.nl</a></div>
            </div>
            <div style={{ height: 1, background: 'var(--line)', margin: '16px 0' }} />
            <div className="pvm-av__bg-grid" style={pAv.bgGrid}>
              <div data-bg="label" style={pAv.bgLabel}>KvK</div>
              <div style={pAv.bgValueMono}>72258209</div>
              <div data-bg="label" style={pAv.bgLabel}>BTW</div>
              <div style={pAv.bgValueMono}>NL002136255B51</div>
              <div data-bg="label" style={pAv.bgLabel}>SKJ</div>
              <div style={pAv.bgValueMono}>110005309 <span style={{ color: 'var(--fg3)' }}>(geldig tot mei 2028)</span></div>
              <div data-bg="label" style={pAv.bgLabel}>AGB</div>
              <div style={pAv.bgValueMono}>78780688</div>
            </div>
          </div>
        </React.Fragment>
      ),
    },
    {
      nr: '02',
      slug: 'voor-wie',
      title: 'Voor wie zijn deze voorwaarden?',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>2.1</span> Deze voorwaarden gelden voor alle diensten van Praktijk van Marijk, waaronder:</p>
          <ul style={pAv.list}>
            <li>Individuele begeleiding van professionals</li>
            <li>Casusoverleg en intervisie</li>
            <li>Trainingen en workshops voor teams</li>
            <li>Advies en consultatie voor organisaties</li>
          </ul>
          <p style={pAv.body}><span style={pAv.clause}>2.2</span> Deze voorwaarden gelden ook voor vervolgopdrachten en aanvullende diensten.</p>
          <p style={pAv.body}><span style={pAv.clause}>2.3</span> Eventuele algemene voorwaarden van de opdrachtgever zijn niet van toepassing, tenzij Praktijk van Marijk deze schriftelijk heeft aanvaard.</p>
          <p style={pAv.body}><span style={pAv.clause}>2.4</span> Elke factuur geldt als volledig bewijs van de verschuldigdheid.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '03',
      slug: 'offertes-en-prijzen',
      title: 'Offertes en prijzen',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>3.1</span> Offertes zijn 30 dagen geldig, tenzij anders vermeld. Praktijk van Marijk is pas gebonden aan een offerte na schriftelijke bevestiging door de opdrachtgever binnen deze termijn.</p>
          <p style={pAv.body}><span style={pAv.clause}>3.2</span> Alle prijzen zijn exclusief BTW, tenzij anders aangegeven.</p>
          <p style={pAv.body}><span style={pAv.clause}>3.3</span> Bij langlopende trajecten kunnen tarieven jaarlijks worden aangepast. U wordt hier minimaal 4 weken van tevoren over geïnformeerd.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '04',
      slug: 'wat-kunt-u-verwachten',
      title: 'Wat kunt u van ons verwachten?',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>4.1</span> Praktijk van Marijk levert diensten volgens afspraak en met zorgvuldigheid, maar geeft geen garantie op resultaat. Wij spannen ons in om u zo goed mogelijk te ondersteunen.</p>
          <p style={pAv.body}><span style={pAv.clause}>4.2</span> Afspraken vinden plaats op basis van een geplande tijd en locatie.</p>
          <p style={pAv.body}><span style={pAv.clause}>4.3</span> Bij dienstverlening op locatie geldt een reistijd van maximaal 30 minuten (vanuit Hoorn). Bij een langere reistijd worden extra kosten in rekening gebracht.</p>
          <p style={pAv.body}><span style={pAv.clause}>4.4</span> Praktijk van Marijk is geregistreerd bij Stichting Kwaliteitsregister Jeugd (SKJ) onder nummer 110005309. Deze registratie loopt tot mei 2028.</p>
          <p style={pAv.body}><span style={pAv.clause}>4.5</span> Praktijk van Marijk beschikt over een AGB-code (78780688). Afhankelijk van uw zorgverzekering kan (een deel van) de dienstverlening in aanmerking komen voor vergoeding.</p>
          <p style={pAv.body}><span style={pAv.clause}>4.6</span> Als de uitvoering van de opdracht dit vereist, kunnen bepaalde werkzaamheden worden uitbesteed aan derden. Dit gebeurt altijd in overleg met u.</p>
          <p style={pAv.body}><span style={pAv.clause}>4.7</span> U zorgt ervoor dat alle benodigde informatie tijdig wordt aangeleverd. Bij vertraging door ontbrekende informatie kunnen extra kosten in rekening worden gebracht.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '05',
      slug: 'afwijkingen',
      title: 'Afwijkingen van deze voorwaarden',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>5.1</span> Afwijkingen van deze voorwaarden zijn alleen geldig als Praktijk van Marijk dit schriftelijk heeft bevestigd.</p>
          <p style={pAv.body}><span style={pAv.clause}>5.2</span> Als op enig moment wordt afgeweken van deze voorwaarden, betekent dit niet dat dit voor de toekomst ook geldt. Praktijk van Marijk behoudt het recht om de voorwaarden op elk moment weer strikt toe te passen.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '06',
      slug: 'wijzigingen-traject',
      title: 'Wijzigingen tijdens een traject',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>6.1</span> Bij een traject met meerdere afspraken geldt de overeenkomst voor onbepaalde tijd, tenzij anders is afgesproken.</p>
          <p style={pAv.body}><span style={pAv.clause}>6.2</span> Praktijk van Marijk kan tarieven, dienstverlening en voorwaarden tussentijds wijzigen bij trajecten langer dan één jaar. U wordt hier minimaal 4 weken van tevoren over geïnformeerd. Dit geldt niet bij vooruitbetaling.</p>
          <p style={pAv.body}><span style={pAv.clause}>6.3</span> Beide partijen kunnen de overeenkomst schriftelijk opzeggen met een opzegtermijn van één maand.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '07',
      slug: 'wijziging-opdracht',
      title: 'Wijziging van de opdracht',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>7.1</span> Als tijdens de uitvoering blijkt dat de opdracht moet worden aangepast, gebeurt dit in overleg tussen beide partijen.</p>
          <p style={pAv.body}><span style={pAv.clause}>7.2</span> Een wijziging kan invloed hebben op de planning. Praktijk van Marijk informeert u hier zo snel mogelijk over.</p>
          <p style={pAv.body}><span style={pAv.clause}>7.3</span> Als een wijziging financiële gevolgen heeft, wordt u hier minimaal 4 weken van tevoren over geïnformeerd.</p>
          <p style={pAv.body}><span style={pAv.clause}>7.4</span> Bij een vast afgesproken bedrag wordt aangegeven of de wijziging leidt tot meerkosten.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '08',
      slug: 'annuleren',
      title: 'Annuleren en verzetten van afspraken',
      render: () => (
        <React.Fragment>
          <h3 style={pAv.subhead}>8.1 Individuele afspraken</h3>
          <p style={pAv.body}>Annuleren of verzetten kan tot 24 uur voor de afspraak. Bij annulering binnen 24 uur wordt 50% van het tarief in rekening gebracht. Bij niet verschijnen wordt het volledige tarief in rekening gebracht (minimaal €90 per uur).</p>
          <h3 style={pAv.subhead}>8.2 Trainingen en trajecten door organisaties</h3>
          <p style={pAv.body}>Annulering moet minimaal 24 uur van tevoren schriftelijk of per e-mail worden doorgegeven. Bij latere annulering worden de volledige kosten in rekening gebracht.</p>
          <h3 style={pAv.subhead}>8.3 Annulering door Praktijk van Marijk</h3>
          <p style={pAv.body}>Als Praktijk van Marijk een afspraak annuleert, wordt zo snel mogelijk een nieuwe afspraak gepland. Is dit niet mogelijk, dan wordt het betaalde bedrag binnen 30 dagen geretourneerd. Verdere schadevergoeding is niet van toepassing.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '09',
      slug: 'geheimhouding',
      title: 'Geheimhouding',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>9.1</span> Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die in het kader van de samenwerking wordt gedeeld.</p>
          <p style={pAv.body}><span style={pAv.clause}>9.2</span> Praktijk van Marijk zal zonder uw toestemming niet extern refereren aan de opdracht.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '10',
      slug: 'intellectueel-eigendom',
      title: 'Intellectueel eigendom',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>10.1</span> Alle rechten op materialen, methodes en kennis die Praktijk van Marijk ontwikkelt of gebruikt, blijven eigendom van Praktijk van Marijk.</p>
          <p style={pAv.body}><span style={pAv.clause}>10.2</span> U mag verstrekte materialen alleen gebruiken voor het doel waarvoor ze zijn verstrekt. Vermenigvuldigen of aanpassen is niet toegestaan zonder toestemming.</p>
          <p style={pAv.body}><span style={pAv.clause}>10.3</span> Het logo van Praktijk van Marijk is eigendom van Marijke Koomen. Gebruik, bewerking of toe-eigening is verboden zonder toestemming.</p>
          <p style={pAv.body}><span style={pAv.clause}>10.4</span> Praktijk van Marijk mag opgedane kennis gebruiken voor andere doeleinden, zonder vertrouwelijke informatie te delen.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '11',
      slug: 'betaling',
      title: 'Betaling',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>11.1</span> Betaling geschiedt binnen 21 dagen na factuurdatum, tenzij anders is afgesproken.</p>
          <p style={pAv.body}><span style={pAv.clause}>11.2</span> Bij te late betaling is de opdrachtgever automatisch in verzuim. Er is geen nadere aanmaning nodig.</p>
          <p style={pAv.body}><span style={pAv.clause}>11.3</span> Bij betalingsverzuim is Praktijk van Marijk gerechtigd werkzaamheden op te schorten zonder schadeplichtig te zijn.</p>
          <p style={pAv.body}><span style={pAv.clause}>11.4</span> Bij te late betaling is de wettelijke rente verschuldigd over het openstaande bedrag.</p>
          <p style={pAv.body}><span style={pAv.clause}>11.5</span> Bij liquidatie, faillissement of surseance van betaling van de opdrachtgever zijn alle vorderingen direct opeisbaar.</p>
          <p style={pAv.body}><span style={pAv.clause}>11.6</span> Betalingen worden eerst verrekend met rente en kosten, daarna met de oudste openstaande facturen.</p>
          <p style={pAv.body}><span style={pAv.clause}>11.7</span> Praktijk van Marijk kan vooruitbetaling eisen als meer dan gebruikelijke inspanning wordt verwacht.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '12',
      slug: 'incassokosten',
      title: 'Incassokosten',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>12.1</span> Bij niet-betaling en gerechtelijke incasso zijn alle redelijke kosten voor rekening van de opdrachtgever. Dit omvat kosten van incassobureaus, deurwaarders en advocaten, ook als deze hoger zijn dan de in rechte toegewezen proceskosten.</p>
          <p style={pAv.body}><span style={pAv.clause}>12.2</span> De vergoeding voor gemaakte incassokosten bedraagt minimaal 15% van de hoofdsom.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '13',
      slug: 'aansprakelijkheid',
      title: 'Aansprakelijkheid',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>13.1</span> Praktijk van Marijk is niet aansprakelijk voor schade, tenzij de opdrachtgever kan aantonen dat deze is veroorzaakt door opzet of grove schuld.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.2</span> De aansprakelijkheid is beperkt tot de factuurwaarde van de opdracht, of het deel van de opdracht waarop de aansprakelijkheid betrekking heeft.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.3</span> Bij opdrachten langer dan zes maanden is de aansprakelijkheid beperkt tot het bedrag van de laatste zes maanden.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.4</span> Als Praktijk van Marijk verzekerd is voor aansprakelijkheid, is de schadevergoeding beperkt tot het bedrag dat de verzekeraar uitkeert, inclusief het eigen risico.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.5</span> Praktijk van Marijk is niet aansprakelijk voor indirecte schade, gevolgschade of bedrijfsschade.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.6</span> Praktijk van Marijk geeft geen garantie op haar diensten.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.7</span> Praktijk van Marijk is niet aansprakelijk voor schade door onjuiste of onvolledige informatie van de opdrachtgever, tenzij deze onjuistheid kenbaar had moeten zijn.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.8</span> Schade aan eigendom van Praktijk van Marijk veroorzaakt door de opdrachtgever is voor rekening van de opdrachtgever.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.9</span> Praktijk van Marijk is niet aansprakelijk voor schade door verzwegen (medische) informatie.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '14',
      slug: 'beeindiging',
      title: 'Beëindiging van de overeenkomst',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>14.1</span> Praktijk van Marijk kan zonder opgave van reden een traject annuleren of deelname weigeren. In dat geval heeft de opdrachtgever recht op volledige terugbetaling.</p>
          <p style={pAv.body}><span style={pAv.clause}>14.2</span> De opdrachtgever kan een traject annuleren tot 1 week voor aanvang. Daarna is het volledige bedrag verschuldigd.</p>
          <p style={pAv.body}><span style={pAv.clause}>14.3</span> Bij annulering tussen 4 weken en 1 week voor aanvang wordt 50% van het bedrag in rekening gebracht.</p>
          <p style={pAv.body}><span style={pAv.clause}>14.4</span> Bij tussentijdse beëindiging door de opdrachtgever is geen terugbetaling mogelijk, tenzij bijzondere omstandigheden dit rechtvaardigen.</p>
          <p style={pAv.body}><span style={pAv.clause}>14.5</span> Als één van de partijen tekortschiet in haar verplichtingen en dit niet binnen redelijke termijn herstelt, kan de andere partij de overeenkomst beëindigen. Al geleverde diensten worden op de afgesproken wijze betaald.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '15',
      slug: 'persoonsgegevens',
      title: 'Persoonsgegevens',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>15.1</span> Door een overeenkomst aan te gaan, geeft u toestemming voor verwerking van uw persoonsgegevens.</p>
          <p style={pAv.body}><span style={pAv.clause}>15.2</span> Praktijk van Marijk houdt zich aan de AVG (Algemene Verordening Gegevensbescherming) en deelt uw gegevens niet met derden.</p>
          <p style={pAv.body}><span style={pAv.clause}>15.3</span> Uw gegevens worden alleen gebruikt voor eigen activiteiten van Praktijk van Marijk.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '16',
      slug: 'geschillen',
      title: 'Geschillen',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>16.1</span> Op alle overeenkomsten is Nederlands recht van toepassing.</p>
          <p style={pAv.body}><span style={pAv.clause}>16.2</span> Geschillen worden voorgelegd aan de bevoegde rechter van het arrondissement waar Praktijk van Marijk is gevestigd.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '17',
      slug: 'slotbepaling',
      title: 'Slotbepaling',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>17.1</span> In situaties waar deze voorwaarden niet in voorzien, beslist Praktijk van Marijk.</p>
          <p style={pAv.body}><span style={pAv.clause}>17.2</span> Deze algemene voorwaarden zijn laatst gewijzigd in mei 2026.</p>
        </React.Fragment>
      ),
    },
  ];

  const handlePrint = (e) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div className="pvm-av" data-screen-label="07 Algemene voorwaarden">
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
          Algemene voorwaarden.
        </h1>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 17,
          color: 'var(--fg2)',
          lineHeight: 1.7,
          margin: '0 0 28px',
          maxWidth: '60ch',
        }}>
          Van toepassing op alle diensten die Praktijk van Marijk levert aan professionals en organisaties in de jeugdhulp. Door een afspraak te maken of een opdracht te verstrekken, gaat u akkoord met deze voorwaarden.
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
            }}>Vragen?</div>
            <h3 style={{
              fontFamily: 'Lora, serif',
              fontSize: 20,
              fontWeight: 500,
              color: 'var(--fg-on-dark)',
              lineHeight: 1.4,
              margin: '0 0 14px',
            }}>Heeft u vragen over deze voorwaarden?</h3>
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

// ---- styles object (uniquely named to avoid global collisions) ----
const pAv = {
  body: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 15,
    color: 'var(--fg2)',
    lineHeight: 1.75,
    margin: '0 0 14px',
  },
  clause: {
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 600,
    color: 'var(--fg1)',
    marginRight: 8,
    fontVariantNumeric: 'tabular-nums',
  },
  subhead: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--fg1)',
    margin: '20px 0 8px',
    letterSpacing: '0.01em',
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
    margin: '8px 0 4px',
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
};

Object.assign(window, { AlgemeneVoorwaarden });
