export interface SearchResult {
  title: string;
  category: 'phishing' | 'banking' | 'identity' | 'remote';
  content: string;
}

export const fraudData: SearchResult[] = [
  {
    title: 'Mesaje suspecte cu linkuri',
    category: 'phishing',
    content: 'Dacă primești mesaje suspecte în care ți se cere să intri pe un link pentru a revendica un premiu, este vorba despre o tentativă de fraudă.'
  },
  {
    title: 'Cereri de date bancare',
    category: 'banking',
    content: 'Dacă trebuie să primești o sumă de bani, IBAN-ul este tot ce ai nevoie să dai mai departe. Dacă ți se cer și alte date ale conturilor sau aplicațiilor de banking, este vorba despre o tentativă de fraudă.'
  },
  {
    title: 'Solicitări de date personale',
    category: 'identity',
    content: 'Banca nu îți va cere niciodată detalii precum CNP, cont bancar, parole sau date de logare în aplicațiile de banking, pentru că acestea se află deja în sistemul băncii.'
  },
  {
    title: 'Linkuri false',
    category: 'phishing',
    content: 'Linkurile pot fi false și pot duce către pagini de phishing sau pot conține viruși.'
  },
  {
    title: 'Aplicații de control la distanță',
    category: 'remote',
    content: 'Aplicațiile de tipul AnyDesk sau Team View au rolul de a prelua controlul dispozitivelor tale, pentru a avea acces la aplicațiile tale de banking sau la alte date confidențiale.'
  },
  {
    title: 'E-mailuri de tip phishing',
    category: 'phishing',
    content: 'E-mailurile de tip phishing pot imita foarte bine comunicările oficiale ale băncilor.'
  }
];
