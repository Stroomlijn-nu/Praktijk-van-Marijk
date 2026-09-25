<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact - Praktijk van Marijk</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      color: var(--fg1);
      background: #fff;
      --fg1: #1a1a1a;
      --fg2: #666;
      --fg3: #999;
      --accent: #c17a5c;
      --accent-2: #a8b3a8;
      --beige: #f5f1ed;
      --line: #e5e0db;
      --line-strong: #d0cbc5;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* HERO SECTION */
    .hero {
      padding: 64px 48px 32px;
      max-width: 760px;
    }

    .eyebrow {
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--fg3);
      font-weight: 500;
      margin-bottom: 14px;
    }

    .hero h1 {
      font-family: 'Lora', serif;
      font-size: 34px;
      font-weight: 500;
      color: var(--fg1);
      line-height: 1.3;
      margin: 0 0 20px 0;
    }

    .hero p {
      font-size: 17px;
      color: var(--fg2);
      line-height: 1.7;
      margin: 0;
      max-width: 56ch;
    }

    .section-divider {
      height: 1px;
      background: var(--line);
      margin: 32px 48px;
    }

    /* FORM + DATA SECTION */
    .content-wrapper {
      padding: 56px 48px 64px;
      display: grid;
      grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
      gap: 72px;
      align-items: start;
    }

    /* FORM STYLES */
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 560px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    label {
      display: block;
      font-family: 'DM Sans', sans-serif;
      font-size: 13px;
      font-weight: 500;
      color: var(--fg1);
      margin-bottom: 6px;
    }

    label .optional {
      color: var(--fg3);
      font-weight: 400;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    textarea {
      width: 100%;
      box-sizing: border-box;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      color: var(--fg1);
      background: #fff;
      border: 0.5px solid var(--line-strong);
      border-radius: 4px;
      padding: 10px 12px;
      outline: none;
      font-size: 15px;
    }

    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="tel"]:focus,
    textarea:focus {
      border-color: var(--accent);
    }

    textarea {
      min-height: 160px;
      resize: vertical;
      line-height: 1.65;
    }

    .form-actions {
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    button {
      background: var(--accent);
      color: white;
      border: none;
      border-radius: 4px;
      padding: 12px 24px;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      transition: background 0.2s ease;
    }

    button:hover:not(:disabled) {
      background: #b3694d;
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .error-message {
      font-family: 'DM Sans', sans-serif;
      font-size: 13.5px;
      color: var(--fg2);
      line-height: 1.5;
    }

    .success-message {
      padding: 28px;
      border: 0.5px solid var(--line);
      border-top: 3px solid var(--accent-2);
      border-radius: 6px;
      background: #fff;
      max-width: 560px;
    }

    .success-message h2 {
      font-family: 'Lora', serif;
      font-size: 22px;
      font-weight: 500;
      color: var(--fg1);
      margin-bottom: 8px;
      margin-top: 0;
    }

    .success-message p {
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      color: var(--fg2);
      line-height: 1.7;
      margin: 0;
    }

    /* RIGHT COLUMN */
    .contact-info {
      display: flex;
      flex-direction: column;
    }

    .photo-box {
      background: var(--beige);
      border-radius: 6px;
      overflow: hidden;
      position: relative;
      aspect-ratio: 3/2;
      margin-bottom: 28px;
      border-left: 4px solid var(--accent);
    }

    .photo-box img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .info-section {
      font-family: 'DM Sans', sans-serif;
      font-size: 14.5px;
      color: var(--fg1);
      line-height: 1.8;
    }

    .info-section .eyebrow {
      font-size: 11px;
      margin-bottom: 14px;
    }

    .info-grid {
      display: grid;
      grid-template-columns: 92px 1fr;
      row-gap: 4px;
      font-size: 14px;
      color: var(--fg2);
      margin-bottom: 28px;
    }

    .info-grid .label {
      color: var(--fg3);
    }

    .info-grid .value {
      color: var(--fg1);
    }

    .info-grid .value a {
      color: var(--fg1);
      text-decoration: none;
      border-bottom: 0.5px solid var(--line-strong);
      transition: border-color 0.2s ease;
    }

    .info-grid .value a:hover {
      border-color: var(--accent);
    }

    .info-grid.with-exceptions .exception-label,
    .info-grid.with-exceptions .exception-value {
      padding-top: 8px;
    }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      .content-wrapper {
        grid-template-columns: 1fr;
        gap: 48px;
      }

      .hero {
        padding: 48px 24px 24px;
      }

      .hero h1 {
        font-size: 28px;
      }

      .hero p {
        font-size: 15px;
      }

      .section-divider {
        margin: 24px;
      }

      .content-wrapper {
        padding: 40px 24px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <!-- HERO SECTION -->
    <div class="hero">
      <div class="eyebrow">Contact</div>
      <h1>Plan een vrijblijvende kennismaking.</h1>
      <p>Laat weten waar je tegenaan loopt. Ik reageer binnen twee werkdagen.</p>
    </div>

    <div class="section-divider"></div>

    <!-- FORM + INFO SECTION -->
    <div class="content-wrapper">
      <!-- LEFT: FORM -->
      <div>
        <form id="contactForm">
          <input type="hidden" name="access_key" value="4f2ba78f-5b7f-43b0-8978-065ddc0a9450">
          <input type="hidden" name="from_name" value="Praktijk van Marijk — website">
          <input type="hidden" name="subject" value="Nieuw bericht via contactformulier">
          <input type="checkbox" name="botcheck" style="display: none;" tabindex="-1" autocomplete="off">

          <div class="form-group">
            <label for="naam">Naam</label>
            <input type="text" id="naam" name="name" required>
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="naam@organisatie.nl" required>
          </div>

          <div class="form-group">
            <label for="organisatie">Organisatie</label>
            <input type="text" id="organisatie" name="organisatie" required>
          </div>

          <div class="form-group">
            <label for="telefoon">
              Telefoon
              <span class="optional">(optioneel)</span>
            </label>
            <input type="tel" id="telefoon" name="telefoon">
          </div>

          <div class="form-group">
            <label for="message">Bericht</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <div class="form-actions">
            <button type="submit" id="submitBtn">Verstuur bericht</button>
            <span class="error-message" id="errorMsg" style="display: none;"></span>
          </div>

          <div id="successMsg" style="display: none;">
            <div class="success-message">
              <h2>Verzonden.</h2>
              <p id="successText">Dank. Ik reageer binnen twee werkdagen.</p>
            </div>
          </div>
        </form>
      </div>

      <!-- RIGHT: CONTACT INFO -->
      <div class="contact-info">
        <!-- Photo -->
        <div class="photo-box">
          <img
            src="assets/marijke-contact.jpg"
            alt="Marijke Koomen bij de entree van de praktijk"
          >
        </div>

        <!-- Contact Details -->
        <div class="info-section">
          <!-- Direct Contact -->
          <div class="eyebrow">Direct</div>
          <div class="info-grid">
            <div class="label"></div>
            <div class="value">
              <a href="mailto:marijke@praktijkvanmarijk.nl">
                marijke@praktijkvanmarijk.nl
              </a>
            </div>
            <div class="label"></div>
            <div class="value">
              <a href="tel:+31627376003">06 - 27 37 60 03</a>
            </div>
          </div>

          <!-- Practice Info -->
          <div class="eyebrow">Praktijk</div>
          <div class="info-grid">
            <div class="label">SKJ</div>
            <div class="value">110005309</div>
            <div class="label">KvK</div>
            <div class="value">72258209</div>
          </div>

          <!-- Working Days -->
          <div class="eyebrow">Werkdagen</div>
          <div class="info-grid with-exceptions">
            <div class="label">Maandag</div>
            <div class="value">09.00 - 17.00</div>
            <div class="label">Dinsdag</div>
            <div class="value">09.00 - 17.00</div>
            <div class="label">Donderdag</div>
            <div class="value">09.00 - 17.00</div>
            <div class="label exception-label">Woensdag</div>
            <div class="value exception-value">Bij uitzondering op afspraak</div>
            <div class="label">Vrijdag</div>
            <div class="value">Bij uitzondering op afspraak</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FORM HANDLER SCRIPT -->
  <script>
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const errorMsg = document.getElementById('errorMsg');
    const successMsg = document.getElementById('successMsg');
    const successText = document.getElementById('successText');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Bezig…';
      errorMsg.style.display = 'none';
      errorMsg.textContent = '';

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: new FormData(form)
        });

        const data = await response.json();

        if (data.success) {
          form.style.display = 'none';
          successMsg.style.display = 'block';

          const naamInput = form.querySelector('#naam');
          if (naamInput.value) {
            const firstName = naamInput.value.split(' ')[0];
            successText.textContent = `Dank, ${firstName}. Ik reageer binnen twee werkdagen.`;
          }
        } else {
          errorMsg.textContent = data.message || 'Er ging iets mis. Probeer het opnieuw of mail direct naar marijke@praktijkvanmarijk.nl.';
          errorMsg.style.display = 'block';
          submitBtn.disabled = false;
          submitBtn.textContent = 'Verstuur bericht';
        }
      } catch (err) {
        errorMsg.textContent = 'Er ging iets mis. Probeer het opnieuw of mail direct naar marijke@praktijkvanmarijk.nl.';
        errorMsg.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Verstuur bericht';
      }
    });
  </script>
</body>
</html>
