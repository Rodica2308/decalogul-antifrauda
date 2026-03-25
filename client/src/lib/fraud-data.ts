export interface SearchResult {
  title: string;
  category: 'phishing' | 'banking' | 'identity' | 'remote' | 'social' | 'digital';
  content: string;
}

export const fraudData: SearchResult[] = [
  {
    title: 'Fraude pe WhatsApp și rețele sociale',
    category: 'social',
    content: 'Fraudatorii clonează conturi de WhatsApp sau preiau controlul asupra lor pentru a cere bani de la contactele victimei. Verifică mereu identitatea persoanei pe un alt canal de comunicare.'
  },
  {
    title: 'Quishing - Fraude prin coduri QR',
    category: 'phishing',
    content: 'Tehnica „quishing" presupune lipirea unui cod QR fals peste cel legitim pe terminale de plată sau afișe. Scanarea duce către site-uri frauduloase care fură datele de card.'
  },
  {
    title: 'Deepfake și apeluri video false',
    category: 'digital',
    content: 'Tehnologia deepfake bazată pe inteligență artificială poate genera video și audio extrem de realiste, permițând fraudatorilor să imite chipul și vocea oricui.'
  },
  {
    title: 'Magazine online frauduloase',
    category: 'phishing',
    content: 'Magazinele frauduloase oferă prețuri nerealiste și acceptă doar metode de plată ireversibile precum transfer bancar sau criptomonede. Recenziile pot fi fabricate.'
  },
  {
    title: 'SIM Swapping',
    category: 'identity',
    content: 'Atacul SIM Swapping presupune că fraudatorul convinge operatorul de telefonie să transfere numărul tău pe o altă cartelă SIM, primind astfel SMS-urile de confirmare bancară.'
  },
  {
    title: 'Money Mule - Catâr financiar',
    category: 'banking',
    content: 'Schemele de tip „money mule" te transformă în complice la spălare de bani. Dacă primești și retransferi bani pentru „un angajator", riști pedeapsa cu închisoarea.'
  },
  {
    title: 'Riscuri Wi-Fi public',
    category: 'remote',
    content: 'Pe rețele Wi-Fi publice, atacatorii pot intercepta datele tale prin atacuri „Man-in-the-Middle". Evită accesarea aplicațiilor bancare pe Wi-Fi public — folosește datele mobile sau un VPN.'
  },
  {
    title: 'Fraude în numele instituțiilor (ANAF, Poliție)',
    category: 'phishing',
    content: 'Fraudatorii se dau drept ANAF, Poliție sau alte instituții, trimițând emailuri cu amenințări de executare silită. Instituțiile oficiale nu cer plăți urgente prin email.'
  },
  {
    title: 'Tranzacții test pe card',
    category: 'banking',
    content: 'Fraudatorii testează cardurile furate cu tranzacții foarte mici (1-5 lei). Dacă trec, urmează tranzacții mari. Raportează imediat orice tranzacție nerecunoscută!'
  },
  {
    title: 'Parole sigure și autentificare 2FA',
    category: 'digital',
    content: 'O parolă sigură este lungă, conține litere mari și mici, cifre și caractere speciale. Cea mai bună protecție combină o parolă puternică cu autentificarea în doi pași (2FA).'
  }
];
