/**
 * Language translations for CryptoTable
 * English and Norwegian (Bokmål)
 */

const translations = {
  en: {
    // Header
    titleVigenere: "The Vig&egrave;ner Cipher",
    titleBeaufort: "The Beaufort Cipher",
    tryBeaufort: "Try Beaufort",
    tryVigenere: "Try Vig&egrave;ner",
    
    // Labels
    keyLabel: "Key (k)",
    messageLabel: "Message (m)",
    cipherLabel: "Cipher (c)",
    
    // Buttons
    stepEncipher: "Step Encipher",
    automaticEnciphering: "Automatic Enciphering",
    stepDecipher: "Step Decipher",
    automaticDecipherment: "Automatic Decipherment",
    encryptAll: "Encrypt All",
    decryptAll: "Decrypt All",
    reset: "Reset",
    help: "Help",
    close: "Close",
    
    // Algorithm descriptions for help modal
    helpTitle: "Algorithm Information",
    helpDescription: `
      <p><strong>Vigenère and Beaufort Ciphers</strong> are polyalphabetic substitution ciphers that use a keyword to encrypt and decrypt messages.</p>
      
      <h4>Variables:</h4>
      <p><strong>L</strong> - The length of the available alphabet. For the English alphabet (a-z), L = 26.</p>
      <p><strong>m &isin; M</strong> - Your selected plaintext is a message (m) which is an element of the entire message space (M).</p>
      <p><strong>k &isin; K</strong> - Your selected keyword is a key (k) which is an element of the entire key space (K).</p>
      <p><strong>c &isin; C</strong> - The resulting ciphertext (c) which is an element of the entire ciphertext space.</p>
      
      <h4>Indices:</h4>
      <p><strong>m<font class="sub">n</font></strong> - The n-th letter of the current plaintext message. The current plaintext letter being processed.</p>
      <p><strong>k<font class="sub">n</font></strong> - The n-th letter of the current keyword, using modulo operation relative to the keyword length.</p>
      <p><strong>c<font class="sub">n</font></strong> - The n-th letter of the current ciphertext. The letter of the ciphertext that is being generated.</p>
      
      <h4>How it works:</h4>
      <p><strong>Encryption (Vigenère):</strong> c<font class="sub">n</font> = (m<font class="sub">n</font> + k<font class="sub">n</font>) % L</p>
      <p><strong>Decryption (Vigenère):</strong> m<font class="sub">n</font> = (c<font class="sub">n</font> - k<font class="sub">n</font> + L) % L</p>
      <p><strong>Encryption (Beaufort):</strong> c<font class="sub">n</font> = (k<font class="sub">n</font> - m<font class="sub">n</font> + L) % L</p>
      <p><strong>Decryption (Beaufort):</strong> m<font class="sub">n</font> = (k<font class="sub">n</font> - c<font class="sub">n</font> + L) % L</p>
    `,
    
    // Algorithm output messages
    highlightingRow: "Highlighting the row of the current plaintext letter.",
    highlightingColumn: "Highlighting the column of the current key letter.",
    highlightingColumnDecrypt: "Highlighting the column corresponding to the current key letter.",
    highlightingRowDecrypt: "Highlighting the row corresponding to the ciphertext letter in the highlighted column.",
    intersectionCell: "The highlighted cell at the intersection of the highlighted row and column is the next ciphertext letter.",
    leftMostCell: "The next plaintext letter is the highlighted cell in the leftmost column.",
    resettingBoard: "Resetting board for next character",
    
    // Result messages
    encryptedText: "Encrypted text: ",
    decryptedText: "Decrypted text: ",
    originalMessage: "Original Message: "
  },
  
  no: {
    // Header
    titleVigenere: "Vigenère-kryptering",
    titleBeaufort: "Beaufort-kryptering",
    tryBeaufort: "Prøv Beaufort",
    tryVigenere: "Prøv Vigenère",
    
    // Labels
    keyLabel: "Nøkkel (k)",
    messageLabel: "Melding (m)",
    cipherLabel: "Kryptert tekst (c)",
    
    // Buttons
    stepEncipher: "Stegvis krypter",
    automaticEnciphering: "Automatisk kryptering",
    stepDecipher: "Stegvis dekrypter",
    automaticDecipherment: "Automatisk dekryptering",
    encryptAll: "Krypter alt",
    decryptAll: "Dekrypter alt",
    reset: "Nullstill",
    help: "Hjelp",
    close: "Lukk",
    
    // Algorithm descriptions for help modal
    helpTitle: "Algoritmeinformasjon",
    helpDescription: `
      <p><strong>Vigenère- og Beaufort-kryptering</strong> er polyalfabetiske substitusjonskrypter som bruker en nøkkel til å kryptere og dekryptere meldinger.</p>
      
      <h4>Variabler:</h4>
      <p><strong>L</strong> - Lengden på det tilgjengelige alfabetet. For det engelske alfabetet (a-z) er L = 26.</p>
      <p><strong>m &isin; M</strong> - Din valgte klartekst er en melding (m) som er et element av hele meldingsrommet (M).</p>
      <p><strong>k &isin; K</strong> - Din valgte nøkkel er en nøkkel (k) som er et element av hele nøkkelrommet (K).</p>
      <p><strong>c &isin; C</strong> - Den resulterende krypterte teksten (c) som er et element av hele kryptert tekst-rommet.</p>
      
      <h4>Indekser:</h4>
      <p><strong>m<font class="sub">n</font></strong> - Det n-te tegnet i den gjeldende klarteksten. Det gjeldende klartekst tegnet som blir prosessert.</p>
      <p><strong>k<font class="sub">n</font></strong> - Det n-te tegnet i den gjeldende nøkkelen, ved bruk av modulo operasjon i forhold til nøkkelens lengde.</p>
      <p><strong>c<font class="sub">n</font></strong> - Det n-te tegnet i den gjeldende krypterte teksten. Tegnet i krypterte teksten som blir generert.</p>
      
      <h4>Hvordan det fungerer:</h4>
      <p><strong>Kryptering (Vigenère):</strong> c<font class="sub">n</font> = (m<font class="sub">n</font> + k<font class="sub">n</font>) % L</p>
      <p><strong>Dekryptering (Vigenère):</strong> m<font class="sub">n</font> = (c<font class="sub">n</font> - k<font class="sub">n</font> + L) % L</p>
      <p><strong>Kryptering (Beaufort):</strong> c<font class="sub">n</font> = (k<font class="sub">n</font> - m<font class="sub">n</font> + L) % L</p>
      <p><strong>Dekryptering (Beaufort):</strong> m<font class="sub">n</font> = (k<font class="sub">n</font> - c<font class="sub">n</font> + L) % L</p>
    `,
    
    // Algorithm output messages
    highlightingRow: "Markerer raden til gjeldende klartekst-tegn.",
    highlightingColumn: "Markerer kolonnen til gjeldende nøkkel-tegn.",
    highlightingColumnDecrypt: "Markerer kolonnen som tilsvarer gjeldende nøkkel-tegn.",
    highlightingRowDecrypt: "Markerer raden som tilsvarer krypterte tekst-tegn i den markerte kolonnen.",
    intersectionCell: "Den markerte cellen på skjæringspunktet mellom markert rad og kolonne er det neste krypterte tegnet.",
    leftMostCell: "Det neste klartekst-tegnet er den markerte cellen i den venstre kolonnen.",
    resettingBoard: "Nullstiller brett for neste tegn",
    
    // Result messages
    encryptedText: "Kryptert tekst: ",
    decryptedText: "Dekryptert tekst: ",
    originalMessage: "Original melding: "
  }
};

// Function to get translation
function getTranslation(key, lang) {
  if (!translations[lang] || !translations[lang][key]) {
    return translations.en[key] || key;
  }
  return translations[lang][key];
}

// Function to update all UI text based on language
function updateLanguage(lang) {
  const trans = translations[lang] || translations.en;
  
  // Update header
  if ($('#resText').length) {
    // This is Vigenere page
    $('h2').html(trans.titleVigenere + '<small style="display: block; font-size: 12px; margin-top: 5px;"><a href="./beaufort.html" style="color: #00ff00;"><u>' + trans.tryBeaufort + '</u></a></small>');
  } else {
    // This is Beaufort page
    $('h2').html(trans.titleBeaufort + '<small style="display: block; font-size: 12px; margin-top: 5px;"><a href="./index.html" style="color: #00ff00;"><u>' + trans.tryVigenere + '</u></a></small>');
  }
  
  // Update labels
  $('.input-group-addon').each(function() {
    const text = $(this).text().trim();
    if (text.includes('Key') || text.includes('Nøkkel')) {
      $(this).text(trans.keyLabel);
    } else if (text.includes('Message') || text.includes('Melding')) {
      $(this).text(trans.messageLabel);
    } else if (text.includes('Cipher') || text.includes('Kryptert')) {
      $(this).text(trans.cipherLabel);
    }
  });
  
  // Update buttons
  $('#encryptStep').text(trans.stepEncipher);
  $('#encryptRun').text(trans.automaticEnciphering);
  $('#decryptStep').text(trans.stepDecipher);
  $('#decryptRun').text(trans.automaticDecipherment);
  $('#encryptAll').text(trans.encryptAll);
  $('#decryptAll').text(trans.decryptAll);
  $('#reset').text(trans.reset);
  
  // Update help modal
  $('#helpModal .modal-title').text(trans.helpTitle);
  $('#helpModal .modal-body').html(trans.helpDescription);
  $('#helpModal .btn-default').text(trans.close);
  $('#helpModal .close').attr('title', trans.close);
  
  // Store current language
  localStorage.setItem('cryptoTableLang', lang);
}

// Function to apply message with translation
function wMsgBox( mainH, subH, msg, lang ){
	var l = lang || currentLanguage || 'en';
	var t = translations[l] || translations.en;
	
	$("#algorithmOutput").empty();
	if( mainH != null )
		$("#algorithmOutput").append("<h4>" + (t[mainH] || mainH) + "</h4>");
	if( subH != null )
		$("#algorithmOutput").append("<h3>" + (t[subH] || subH) + "</h3>");
	if( msg != null )
		$("#algorithmOutput").append("<p>" + (t[msg] || msg) + "</p>");
}
