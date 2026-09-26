// Algemene Voorwaarden — Praktijk van Marijk
// Versie juli 2026 — zakelijke dienstverlening (B2B)
// Lange leespagina met TOC links, genummerde artikelen rechts.
// Brand: bordeaux primair, oker voor cijfers, Lora voor titels, DM Sans voor body.

function AlgemeneVoorwaarden() {
  const articles = [
    {
      nr: '01',
      slug: 'definities',
      title: 'Definities',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}>In deze algemene voorwaarden wordt verstaan onder:</p>
          <ul style={pAv.defList}>
            <li style={pAv.defItem}><span style={pAv.defLetter}>a.</span><span><strong>Opdrachtnemer:</strong> Praktijk van Marijk, de eenmanszaak van Marijke Koomen, gebruiker van deze algemene voorwaarden.</span></li>
            <li style={pAv.defItem}><span style={pAv.defLetter}>b.</span><span><strong>Opdrachtgever:</strong> de professional, onderneming, instelling of organisatie die, handelend in de uitoefening van een beroep of bedrijf, met opdrachtnemer een overeenkomst aangaat of daartoe een offerte of aanbod ontvangt.</span></li>
            <li style={pAv.defItem}><span style={pAv.defLetter}>c.</span><span><strong>Deelnemer:</strong> de natuurlijke persoon die namens of op verzoek van opdrachtgever deelneemt aan een training, intervisie, casuïstiekbegeleiding of andere dienst.</span></li>
            <li style={pAv.defItem}><span style={pAv.defLetter}>d.</span><span><strong>Diensten:</strong> alle werkzaamheden die opdrachtnemer voor opdrachtgever verricht, waaronder training, intervisie, casuïstiekbegeleiding, individuele begeleiding van professionals, advies en consultatie.</span></li>
            <li style={pAv.defItem}><span style={pAv.defLetter}>e.</span><span><strong>Overeenkomst:</strong> iedere afspraak tussen opdrachtgever en opdrachtnemer tot het leveren van diensten, inclusief iedere wijziging of aanvulling daarop.</span></li>
            <li style={pAv.defItem}><span style={pAv.defLetter}>f.</span><span><strong>Open training:</strong> een training of bijeenkomst met een vaste startdatum waarvoor deelnemers zich individueel of per organisatie kunnen inschrijven.</span></li>
            <li style={pAv.defItem}><span style={pAv.defLetter}>g.</span><span><strong>Schriftelijk:</strong> per brief of per e-mail, alsmede ieder ander langs elektronische weg vastgelegd bericht dat aan de andere partij toerekenbaar is.</span></li>
          </ul>
        </React.Fragment>
      ),
    },
    {
      nr: '02',
      slug: 'gegevens-opdrachtnemer',
      title: 'Gegevens van de opdrachtnemer',
      render: () => (
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
      ),
    },
    {
      nr: '03',
      slug: 'toepasselijkheid',
      title: 'Toepasselijkheid en reikwijdte',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>3.1</span> Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, opdrachten en overeenkomsten waarbij opdrachtnemer diensten levert, alsmede op alle daaruit voortvloeiende vervolgopdrachten en aanvullende diensten.</p>
          <p style={pAv.body}><span style={pAv.clause}>3.2</span> Opdrachtnemer levert haar diensten uitsluitend aan professionals en organisaties die handelen in de uitoefening van een beroep of bedrijf binnen het jeugdzorgdomein. De diensten zijn niet gericht op en worden niet aangeboden aan consumenten. Opdrachtgever verklaart bij het aangaan van de overeenkomst te handelen in de uitoefening van een beroep of bedrijf.</p>
          <p style={pAv.body}><span style={pAv.clause}>3.3</span> De toepasselijkheid van inkoopvoorwaarden of andere algemene voorwaarden van opdrachtgever wordt uitdrukkelijk van de hand gewezen, tenzij opdrachtnemer de toepasselijkheid daarvan schriftelijk en uitdrukkelijk heeft aanvaard.</p>
          <p style={pAv.body}><span style={pAv.clause}>3.4</span> Afwijkingen van en aanvullingen op deze voorwaarden gelden uitsluitend indien en voor zover opdrachtnemer deze schriftelijk heeft bevestigd. Een afwijking die op enig moment wordt toegestaan, geeft opdrachtgever geen recht die afwijking ook bij een volgende gelegenheid in te roepen.</p>
          <p style={pAv.body}><span style={pAv.clause}>3.5</span> Indien een of meer bepalingen van deze voorwaarden nietig zijn of vernietigd worden, blijven de overige bepalingen volledig van kracht. Partijen treden in dat geval in overleg om de nietige of vernietigde bepaling te vervangen door een geldige bepaling die de strekking van de oorspronkelijke bepaling zoveel mogelijk benadert.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '04',
      slug: 'aanbod-offertes',
      title: 'Aanbod en offertes',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>4.1</span> Alle aanbiedingen en offertes van opdrachtnemer zijn vrijblijvend, tenzij daarin uitdrukkelijk een termijn voor aanvaarding is genoemd. Een offerte is geldig gedurende 30 dagen na dagtekening, tenzij anders vermeld.</p>
          <p style={pAv.body}><span style={pAv.clause}>4.2</span> Alle prijzen zijn in euro en exclusief btw, tenzij uitdrukkelijk anders is aangegeven.</p>
          <p style={pAv.body}><span style={pAv.clause}>4.3</span> Kennelijke vergissingen of verschrijvingen in een aanbod of offerte binden opdrachtnemer niet.</p>
          <p style={pAv.body}><span style={pAv.clause}>4.4</span> Een samengestelde prijsopgave verplicht opdrachtnemer niet tot het verrichten van een deel van de opdracht tegen een overeenkomstig deel van de opgegeven prijs.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '05',
      slug: 'totstandkoming',
      title: 'Totstandkoming van de overeenkomst',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>5.1</span> De overeenkomst komt tot stand op het moment dat opdrachtgever een offerte of aanbod van opdrachtnemer schriftelijk aanvaardt, dan wel op het moment dat opdrachtnemer een opdracht schriftelijk bevestigt of feitelijk met de uitvoering aanvangt.</p>
          <p style={pAv.body}><span style={pAv.clause}>5.2</span> Voor inschrijving op een open training komt de overeenkomst tot stand op het moment dat opdrachtnemer de inschrijving schriftelijk bevestigt.</p>
          <p style={pAv.body}><span style={pAv.clause}>5.3</span> Opdrachtnemer stelt deze algemene voorwaarden voor of bij het sluiten van de overeenkomst aan opdrachtgever ter beschikking. De voorwaarden zijn tevens raadpleegbaar en te downloaden via de website van opdrachtnemer.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '06',
      slug: 'uitvoering',
      title: 'Uitvoering van de diensten',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>6.1</span> Opdrachtnemer voert de overeenkomst naar beste inzicht en vermogen en met de zorgvuldigheid die van een redelijk bekwaam en redelijk handelend vakgenoot mag worden verwacht. De verbintenis van opdrachtnemer betreft een inspanningsverbintenis. Opdrachtnemer staat niet in voor het bereiken van een bepaald resultaat.</p>
          <p style={pAv.body}><span style={pAv.clause}>6.2</span> Opdrachtnemer bepaalt de wijze waarop en door welke persoon de opdracht wordt uitgevoerd. Indien de goede uitvoering van de opdracht dit vereist, is opdrachtnemer gerechtigd werkzaamheden door derden te laten verrichten. Bij de inschakeling van derden neemt opdrachtnemer de nodige zorgvuldigheid in acht en overlegt zij zoveel mogelijk vooraf met opdrachtgever.</p>
          <p style={pAv.body}><span style={pAv.clause}>6.3</span> Opdrachtnemer is als jeugdprofessional geregistreerd bij Stichting Kwaliteitsregister Jeugd (SKJ) onder nummer 110005309. Aan deze registratie zijn beroepsnormen en een tuchtrechtelijk kader verbonden die opdrachtnemer bij de uitvoering van haar diensten in acht neemt. Voor open trainingen met accreditatie verstrekt opdrachtnemer de gegevens die nodig zijn om deelname en behaalde punten aan SKJ terug te koppelen.</p>
          <p style={pAv.body}><span style={pAv.clause}>6.4</span> Opdrachtgever draagt er zorg voor dat alle gegevens en informatie waarvan opdrachtnemer aangeeft dat deze noodzakelijk zijn, of waarvan opdrachtgever redelijkerwijs behoort te begrijpen dat deze noodzakelijk zijn voor de uitvoering van de overeenkomst, tijdig en volledig aan opdrachtnemer worden verstrekt.</p>
          <p style={pAv.body}><span style={pAv.clause}>6.5</span> Indien de voor de uitvoering benodigde gegevens niet tijdig of niet volledig aan opdrachtnemer zijn verstrekt, heeft opdrachtnemer het recht de uitvoering op te schorten. De hieruit voortvloeiende extra kosten kunnen tegen het op dat moment geldende uurtarief aan opdrachtgever in rekening worden gebracht.</p>
          <p style={pAv.body}><span style={pAv.clause}>6.6</span> Bij dienstverlening op locatie geldt een reistijd van maximaal 30 minuten enkele reis vanuit Hoorn. Bij een langere reistijd of reisafstand kunnen reistijd en reiskosten in rekening worden gebracht, na voorafgaande afstemming met opdrachtgever.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '07',
      slug: 'wijziging-opdracht',
      title: 'Wijziging van de opdracht',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>7.1</span> Indien tijdens de uitvoering blijkt dat het voor een behoorlijke uitvoering noodzakelijk is de opdracht te wijzigen of aan te vullen, passen partijen de overeenkomst in onderling overleg tijdig en in overleg aan.</p>
          <p style={pAv.body}><span style={pAv.clause}>7.2</span> Een wijziging kan gevolgen hebben voor de planning en de kosten van de opdracht. Opdrachtnemer informeert opdrachtgever hierover zo spoedig mogelijk. Indien een wijziging leidt tot meerwerk of meerkosten, wordt dit vooraf met opdrachtgever afgestemd voordat tot uitvoering wordt overgegaan.</p>
          <p style={pAv.body}><span style={pAv.clause}>7.3</span> Is voor de opdracht een vaste prijs afgesproken, dan geeft opdrachtnemer bij een wijziging aan of en in hoeverre deze tot een aanpassing van de prijs leidt.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '08',
      slug: 'duur-beeindiging',
      title: 'Duur, tussentijdse wijziging en beëindiging',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>8.1</span> De overeenkomst wordt aangegaan voor de duur die nodig is om de opdracht uit te voeren, dan wel voor de tussen partijen overeengekomen bepaalde tijd. Een overeenkomst voor een doorlopend traject zonder vaste einddatum geldt als aangegaan voor onbepaalde tijd.</p>
          <p style={pAv.body}><span style={pAv.clause}>8.2</span> Een overeenkomst voor onbepaalde tijd kan door elk van partijen schriftelijk worden opgezegd met inachtneming van een opzegtermijn van een maand. Reeds verrichte diensten en gemaakte kosten tot het einde van de overeenkomst worden op de overeengekomen wijze afgerekend.</p>
          <p style={pAv.body}><span style={pAv.clause}>8.3</span> Bij trajecten met een looptijd van meer dan een jaar is opdrachtnemer gerechtigd tarieven, dienstverlening en voorwaarden tussentijds te wijzigen. Opdrachtnemer informeert opdrachtgever hierover ten minste vier weken voordat de wijziging ingaat. Indien opdrachtgever een tussentijdse verhoging van het tarief niet wenst te aanvaarden, is opdrachtgever gerechtigd de overeenkomst schriftelijk op te zeggen tegen de datum waarop de wijziging zou ingaan. Dit opzegrecht geldt niet indien de wijziging voortvloeit uit een wettelijke verplichting of uit een reeds bij het sluiten van de overeenkomst overeengekomen indexering.</p>
          <p style={pAv.body}><span style={pAv.clause}>8.4</span> Elk van partijen kan de overeenkomst geheel of gedeeltelijk ontbinden indien de andere partij tekortschiet in de nakoming van haar verplichtingen en die tekortkoming, na schriftelijke ingebrekestelling met een redelijke termijn voor herstel, niet binnen die termijn wordt hersteld. Ontbinding is niet vereist voor zover nakoming blijvend of tijdelijk onmogelijk is.</p>
          <p style={pAv.body}><span style={pAv.clause}>8.5</span> Opdrachtnemer kan de overeenkomst met onmiddellijke ingang en zonder ingebrekestelling geheel of gedeeltelijk beëindigen indien aan opdrachtgever surseance van betaling wordt verleend, het faillissement van opdrachtgever wordt aangevraagd of uitgesproken, of de onderneming van opdrachtgever wordt geliquideerd of beëindigd.</p>
          <p style={pAv.body}><span style={pAv.clause}>8.6</span> Opdrachtnemer kan een training annuleren, deelname weigeren of een deelnemer van verdere deelname uitsluiten indien daartoe een redelijke grond bestaat. Annuleert opdrachtnemer een training buiten een aan opdrachtgever toe te rekenen oorzaak, dan wordt het voor die training reeds betaalde bedrag naar rato terugbetaald. Verdergaande aansprakelijkheid is uitgesloten, behoudens het bepaalde in artikel 13.</p>
          <p style={pAv.body}><span style={pAv.clause}>8.7</span> Bedragen die opdrachtnemer voor het einde van de overeenkomst heeft gefactureerd voor reeds verrichte werkzaamheden of gereserveerde capaciteit, blijven verschuldigd en worden op het moment van beëindiging direct opeisbaar.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '09',
      slug: 'annulering-verplaatsing',
      title: 'Annulering en verplaatsing door opdrachtgever',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>9.1</span> Annulering of verplaatsing van een geplande dienst, training of sessie door opdrachtgever of deelnemer dient schriftelijk te gebeuren. Bij annulering of verplaatsing gelden, tenzij schriftelijk anders overeengekomen, de volgende vergoedingen, gerekend vanaf de ontvangst van de schriftelijke melding tot de geplande aanvangsdatum:</p>
          <ul style={pAv.list}>
            <li>tot vier weken voor aanvang: kosteloos</li>
            <li>binnen vier weken tot een week voor aanvang: 50% van het overeengekomen bedrag</li>
            <li>binnen een week voor aanvang of bij niet verschijnen: 100% van het overeengekomen bedrag</li>
          </ul>
          <p style={pAv.body}><span style={pAv.clause}>9.2</span> In plaats van te annuleren mag opdrachtgever of deelnemer kosteloos een vervangende deelnemer aandragen, mits deze voldoet aan de toelatingscriteria van opdrachtnemer en de vervanging uiterlijk drie werkdagen voor aanvang schriftelijk is doorgegeven.</p>
          <p style={pAv.body}><span style={pAv.clause}>9.3</span> Indien opdrachtnemer een training of sessie wegens overmacht verplaatst, plannen partijen in overleg een nieuwe datum. Is een nieuwe datum niet mogelijk, dan wordt het voor die training of sessie reeds betaalde bedrag naar rato terugbetaald.</p>
          <p style={pAv.body}><span style={pAv.clause}>9.4</span> Beëindigt opdrachtgever een lopend traject tussentijds, dan is opdrachtgever de vergoeding verschuldigd voor de tot dat moment verrichte werkzaamheden en voor de reeds gereserveerde capaciteit die opdrachtnemer redelijkerwijs niet meer kan invullen. Reeds betaalde bedragen worden niet gerestitueerd, behoudens het bepaalde in de leden 1 en 3 van dit artikel. Opdrachtnemer kan, uitsluitend naar eigen inzicht en bij wijze van coulance, besluiten een deel van het betaalde te restitueren of te verrekenen, zonder dat opdrachtgever hieraan rechten voor volgende gevallen kan ontlenen.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '10',
      slug: 'tarieven-prijswijziging',
      title: 'Tarieven en prijswijziging',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>10.1</span> De overeengekomen tarieven zijn in euro en exclusief btw en exclusief eventuele reis- en verblijfkosten, tenzij schriftelijk anders is overeengekomen.</p>
          <p style={pAv.body}><span style={pAv.clause}>10.2</span> Bij langlopende trajecten kunnen tarieven jaarlijks worden aangepast. Opdrachtnemer informeert opdrachtgever ten minste vier weken voordat een aanpassing ingaat. Het bepaalde in artikel 8.3 over het opzegrecht van opdrachtgever is van overeenkomstige toepassing.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '11',
      slug: 'betaling',
      title: 'Betaling',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>11.1</span> Opdrachtgever voldoet facturen binnen 14 dagen na factuurdatum, tenzij schriftelijk een andere termijn is overeengekomen. Voor open trainingen, intervisie en andere diensten met een vaste startdatum dient betaling voor aanvang door opdrachtnemer te zijn ontvangen.</p>
          <p style={pAv.body}><span style={pAv.clause}>11.2</span> Betaalt opdrachtgever niet binnen de overeengekomen termijn, dan is opdrachtgever van rechtswege in verzuim, zonder dat een nadere ingebrekestelling is vereist. Vanaf de vervaldatum is opdrachtgever over het openstaande bedrag de wettelijke handelsrente als bedoeld in artikel 6:119a van het Burgerlijk Wetboek verschuldigd.</p>
          <p style={pAv.body}><span style={pAv.clause}>11.3</span> Opdrachtnemer is gerechtigd de uitvoering van haar diensten op te schorten zolang opdrachtgever niet aan zijn betalingsverplichting voldoet. Opschorting laat de betalingsverplichting van opdrachtgever onverlet.</p>
          <p style={pAv.body}><span style={pAv.clause}>11.4</span> Een klacht of bezwaar over een factuur schort de betalingsverplichting niet op. Indien opdrachtgever een deel van de factuur gemotiveerd betwist, voldoet opdrachtgever het onbetwiste deel binnen de betalingstermijn. Over het betwiste deel treden partijen in overleg.</p>
          <p style={pAv.body}><span style={pAv.clause}>11.5</span> Bij opdrachten met gereserveerde capaciteit, waaronder trainingen, intervisie en overige trajecten, blijft de betalingsverplichting in stand, ook wanneer opdrachtgever of deelnemer niet verschijnt of tussentijds stopt, tenzij opdrachtnemer schriftelijk anders heeft bevestigd. Op annulering en verplaatsing is artikel 9 van toepassing.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '12',
      slug: 'incassokosten',
      title: 'Incassokosten',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>12.1</span> Blijft opdrachtgever na het intreden van verzuim in gebreke, dan komen alle redelijke kosten ter verkrijging van voldoening buiten rechte voor rekening van opdrachtgever. De buitengerechtelijke incassokosten worden gesteld op 15% van de openstaande hoofdsom, met een minimum van 40 euro.</p>
          <p style={pAv.body}><span style={pAv.clause}>12.2</span> De in het vorige lid genoemde vergoeding laat het recht van opdrachtnemer onverlet om de daadwerkelijk gemaakte redelijke kosten te vorderen indien deze hoger zijn. Onder deze kosten vallen mede de kosten van een incassobureau, deurwaarder of advocaat, ook voor zover deze de in rechte toegewezen proceskosten overstijgen, een en ander voor zover deze kosten redelijk zijn.</p>
          <p style={pAv.body}><span style={pAv.clause}>12.3</span> De verschuldigde incassokosten en rente worden bij de vordering opgeteld en zijn direct opeisbaar.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '13',
      slug: 'aansprakelijkheid',
      title: 'Aansprakelijkheid',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>13.1</span> Opdrachtnemer is jegens opdrachtgever uitsluitend aansprakelijk voor directe schade die het gevolg is van een toerekenbare tekortkoming in de nakoming van de overeenkomst of van een onrechtmatige daad, met inachtneming van de in dit artikel opgenomen beperkingen.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.2</span> De aansprakelijkheid van opdrachtnemer is per gebeurtenis, waarbij een reeks van samenhangende gebeurtenissen als een gebeurtenis geldt, beperkt tot het bedrag dat voor de betreffende opdracht is gefactureerd. Bij opdrachten met een looptijd van meer dan zes maanden is de aansprakelijkheid beperkt tot het over de laatste zes maanden gefactureerde bedrag.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.3</span> Voor zover opdrachtnemer voor de betreffende schade is verzekerd, is de aansprakelijkheid beperkt tot het bedrag dat in het betreffende geval door haar beroeps- of bedrijfsaansprakelijkheidsverzekering wordt uitgekeerd, vermeerderd met het eigen risico. Overtreft dat bedrag de in lid 2 genoemde grens, dan geldt dat hogere bedrag.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.4</span> Opdrachtnemer is niet aansprakelijk voor indirecte schade, waaronder gevolgschade, gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.5</span> Opdrachtnemer is niet aansprakelijk voor schade die het gevolg is van onjuiste, onvolledige of niet tijdig door opdrachtgever verstrekte informatie, tenzij de onjuistheid of onvolledigheid voor opdrachtnemer kenbaar behoorde te zijn. Opdrachtgever vrijwaart opdrachtnemer voor aanspraken van derden die verband houden met het niet, niet tijdig of onjuist verstrekken van dergelijke informatie.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.6</span> De in dit artikel opgenomen beperkingen en uitsluitingen van aansprakelijkheid gelden niet voor zover de schade het gevolg is van opzet of bewuste roekeloosheid van opdrachtnemer.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.7</span> Een aanspraak tot vergoeding van schade dient schriftelijk bij opdrachtnemer te zijn ingediend binnen twaalf maanden nadat opdrachtgever de schade heeft ontdekt of redelijkerwijs had kunnen ontdekken, bij gebreke waarvan het recht op schadevergoeding vervalt.</p>
          <p style={pAv.body}><span style={pAv.clause}>13.8</span> Schade aan eigendommen van opdrachtnemer die is veroorzaakt door opdrachtgever of een deelnemer, komt voor rekening van opdrachtgever.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '14',
      slug: 'overmacht',
      title: 'Overmacht',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>14.1</span> Opdrachtnemer is niet gehouden tot het nakomen van enige verplichting indien zij daartoe verhinderd is als gevolg van overmacht. Onder overmacht wordt verstaan elke van de wil van opdrachtnemer onafhankelijke omstandigheid die nakoming van de overeenkomst tijdelijk of blijvend verhindert, waaronder ziekte of uitval van opdrachtnemer, storingen, epidemieën en van overheidswege opgelegde maatregelen.</p>
          <p style={pAv.body}><span style={pAv.clause}>14.2</span> Gedurende de periode van overmacht worden de verplichtingen van opdrachtnemer opgeschort. Duurt de overmacht langer dan 30 dagen, dan is elk van partijen gerechtigd de overeenkomst te ontbinden voor het deel dat door de overmacht niet kan worden uitgevoerd, zonder tot schadevergoeding gehouden te zijn.</p>
          <p style={pAv.body}><span style={pAv.clause}>14.3</span> Voor zover opdrachtnemer bij het intreden van de overmacht een deel van haar verplichtingen reeds is nagekomen, is zij gerechtigd dat deel afzonderlijk te factureren.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '15',
      slug: 'geheimhouding',
      title: 'Geheimhouding',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>15.1</span> Partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar of uit andere bron hebben verkregen. Informatie geldt als vertrouwelijk als dit door de andere partij is meegedeeld of als dit voortvloeit uit de aard van de informatie.</p>
          <p style={pAv.body}><span style={pAv.clause}>15.2</span> De geheimhoudingsplicht geldt niet voor zover een wettelijke of beroepsmatige verplichting, waaronder verplichtingen die voortvloeien uit de SKJ-registratie, tot bekendmaking noopt, of voor zover de andere partij schriftelijk toestemming heeft gegeven.</p>
          <p style={pAv.body}><span style={pAv.clause}>15.3</span> Opdrachtnemer zal zonder voorafgaande toestemming van opdrachtgever niet extern refereren aan de opdracht op een wijze die tot opdrachtgever herleidbaar is.</p>
          <p style={pAv.body}><span style={pAv.clause}>15.4</span> Opdrachtnemer mag de bij de uitvoering opgedane algemene kennis en ervaring voor andere doeleinden gebruiken, mits daarbij geen vertrouwelijke informatie van opdrachtgever wordt herleid of gedeeld.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '16',
      slug: 'intellectuele-eigendom',
      title: 'Intellectuele eigendom',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>16.1</span> Alle rechten van intellectuele eigendom op de door opdrachtnemer ontwikkelde of gebruikte materialen, methoden, modellen en kennis berusten bij opdrachtnemer, tenzij schriftelijk anders is overeengekomen.</p>
          <p style={pAv.body}><span style={pAv.clause}>16.2</span> Opdrachtgever en deelnemer verkrijgen uitsluitend een niet-overdraagbaar gebruiksrecht voor het doel waarvoor de materialen zijn verstrekt. Het verveelvoudigen, openbaar maken, bewerken of aan derden ter beschikking stellen van deze materialen is niet toegestaan zonder voorafgaande schriftelijke toestemming van opdrachtnemer.</p>
          <p style={pAv.body}><span style={pAv.clause}>16.3</span> Het logo van Praktijk van Marijk en alle daarmee samenhangende beeldmerken en handelsuitingen zijn eigendom van Marijke Koomen. Opdrachtgever verkrijgt hierop geen rechten. Het is opdrachtgever niet toegestaan het logo of daarmee overeenstemmende of verwarringwekkende tekens te gebruiken, te verveelvoudigen, te bewerken of zich anderszins toe te eigenen, tenzij opdrachtnemer daarvoor voorafgaande, uitdrukkelijke en schriftelijke toestemming heeft verleend.</p>
          <p style={pAv.body}><span style={pAv.clause}>16.4</span> Bij inbreuk op het in dit artikel bepaalde is opdrachtnemer gerechtigd het gebruik per direct te doen staken, haar dienstverlening op te schorten en de hieruit voortvloeiende schade en redelijke kosten op opdrachtgever te verhalen.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '17',
      slug: 'persoonsgegevens',
      title: 'Verwerking van persoonsgegevens',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>17.1</span> Bij de uitvoering van de overeenkomst verwerkt opdrachtnemer persoonsgegevens. Opdrachtnemer verwerkt deze gegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG) en de overige toepasselijke privacywetgeving.</p>
          <p style={pAv.body}><span style={pAv.clause}>17.2</span> Voor haar eigen dienstverlening, waaronder website, aanmelding, intake, deelname aan trainingen en de terugkoppeling aan SKJ, treedt opdrachtnemer op als verwerkingsverantwoordelijke. De wijze waarop opdrachtnemer persoonsgegevens verwerkt, de grondslagen, de bewaartermijnen en de rechten van betrokkenen zijn beschreven in de privacyverklaring van opdrachtnemer, die beschikbaar is via <a href="https://www.praktijkvanmarijk.nl" style={pAv.bgLink}>www.praktijkvanmarijk.nl</a>.</p>
          <p style={pAv.body}><span style={pAv.clause}>17.3</span> Verwerkt opdrachtnemer in het kader van een opdracht persoonsgegevens uitsluitend ten behoeve van en volgens de instructies van opdrachtgever, bijvoorbeeld bij het werken met cliënt- of dossiergegevens namens opdrachtgever, dan treedt opdrachtnemer op als verwerker. In dat geval sluiten partijen een verwerkersovereenkomst als bedoeld in artikel 28 AVG, waarin de afspraken over die verwerking worden vastgelegd.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '18',
      slug: 'klachten',
      title: 'Klachten',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>18.1</span> Klachten over de uitvoering van de diensten dienen zo spoedig mogelijk, doch uiterlijk binnen 30 dagen nadat opdrachtgever het gebrek heeft ontdekt of redelijkerwijs had kunnen ontdekken, schriftelijk en voldoende gemotiveerd aan opdrachtnemer kenbaar te worden gemaakt.</p>
          <p style={pAv.body}><span style={pAv.clause}>18.2</span> Opdrachtnemer reageert binnen een redelijke termijn inhoudelijk op de klacht en spant zich in om samen met opdrachtgever tot een passende oplossing te komen. Het indienen van een klacht schort de betalingsverplichting van opdrachtgever niet op.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '19',
      slug: 'toepasselijk-recht',
      title: 'Toepasselijk recht en geschillen',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>19.1</span> Op alle overeenkomsten tussen opdrachtnemer en opdrachtgever en op deze algemene voorwaarden is uitsluitend Nederlands recht van toepassing.</p>
          <p style={pAv.body}><span style={pAv.clause}>19.2</span> Partijen spannen zich in geschillen in onderling overleg op te lossen voordat zij een geschil aan de rechter voorleggen.</p>
          <p style={pAv.body}><span style={pAv.clause}>19.3</span> Geschillen die niet in onderling overleg kunnen worden opgelost, worden voorgelegd aan de bevoegde rechter van de rechtbank Noord-Holland, locatie Alkmaar, onverminderd het recht van opdrachtnemer om een geschil voor te leggen aan de volgens de wet bevoegde rechter.</p>
        </React.Fragment>
      ),
    },
    {
      nr: '20',
      slug: 'slotbepalingen',
      title: 'Slotbepalingen',
      render: () => (
        <React.Fragment>
          <p style={pAv.body}><span style={pAv.clause}>20.1</span> Opdrachtnemer is gerechtigd deze algemene voorwaarden te wijzigen. Gewijzigde voorwaarden gelden voor nieuwe overeenkomsten en, na schriftelijke kennisgeving, voor lopende overeenkomsten van onbepaalde duur na verloop van een redelijke termijn.</p>
          <p style={pAv.body}><span style={pAv.clause}>20.2</span> In gevallen waarin deze algemene voorwaarden niet voorzien, handelen partijen naar de maatstaven van redelijkheid en billijkheid en zoveel mogelijk in de geest van deze voorwaarden.</p>
          <p style={pAv.body}><span style={pAv.clause}>20.3</span> Deze algemene voorwaarden zijn vastgesteld in juli 2026 en vervangen alle eerdere versies.</p>
        </React.Fragment>
      ),
    },
  ];

  // Scroll naar een artikel, met ruimte voor de vaste topbar
  const scrollToArticle = (slug) => {
    const el = document.getElementById(slug);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 96;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  // Directe link, bijvoorbeeld #voorwaarden/intellectuele-eigendom
  React.useEffect(() => {
    const sub = (window.location.hash || '').replace(/^#\/?/, '').split('/')[1];
    if (sub) setTimeout(() => scrollToArticle(sub), 150);
  }, []);

  const handleTocClick = (e, slug) => {
    e.preventDefault();
    try { history.replaceState(null, '', '#voorwaarden/' + slug); } catch (_) {}
    scrollToArticle(slug);
  };

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
          Van toepassing op alle offertes, aanbiedingen, opdrachten en overeenkomsten waarbij Praktijk van Marijk diensten levert aan professionals en organisaties binnen het jeugdzorgdomein. Deze voorwaarden zijn opgesteld voor zakelijke dienstverlening (business-to-business) en zijn niet gericht op consumenten.
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
            <span style={{ color: 'var(--fg1)', fontWeight: 500 }}>Juli 2026</span>
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
                <a href={`#voorwaarden/${a.slug}`} onClick={(e) => handleTocClick(e, a.slug)} style={{
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
  defList: {
    listStyle: 'none',
    margin: '0 0 14px',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  defItem: {
    display: 'flex',
    gap: 10,
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 15,
    color: 'var(--fg2)',
    lineHeight: 1.75,
  },
  defLetter: {
    color: 'var(--accent-3)',
    fontWeight: 600,
    minWidth: 16,
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
