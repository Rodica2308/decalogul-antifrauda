import QuizComponent from "@/components/quiz/quiz-component";

export default function Quiz() {
  const quizQuestions = [
    {
      question: 'Ce informații sunt necesare pentru a primi bani în cont?',
      options: [
        'IBAN-ul (codul bancar în format internațional)',
        'Numărul cardului, data expirării și codul CVV',
        'CNP și seria buletinului',
        'Numele de utilizator și parola pentru internet banking'
      ],
      correctAnswer: 0,
      explanation: 'Pentru a primi bani, doar IBAN-ul este necesar. Niciodată nu trebuie să furnizezi alte date sensibile precum numere de card, CVV sau credențiale de banking.'
    },
    {
      question: 'Ce trebuie să faci dacă primești un SMS care pretinde că este de la bancă și îți cere să accesezi un link pentru a actualiza datele?',
      options: [
        'Accesez link-ul și verific dacă site-ul pare legitim',
        'Dau click pe link și introduc datele solicitate pentru a preveni blocarea contului',
        'Ignor mesajul și contactez banca la numărul oficial pentru verificare',
        'Răspund la mesaj cerând mai multe detalii'
      ],
      correctAnswer: 2,
      explanation: 'Nu accesa niciodată linkuri din mesaje nesolicitate. Contactează direct banca la numărul oficial de pe cardul tău sau de pe site-ul oficial pentru a verifica legitimitatea oricărei comunicări.'
    },
    {
      question: 'Ce aplicații nu trebuie niciodată să instalezi la cererea unui apelant care pretinde că este de la bancă?',
      options: [
        'Aplicația oficială a băncii',
        'Aplicații de control la distanță precum AnyDesk sau TeamViewer',
        'Aplicații de autentificare în doi factori',
        'Aplicația de plăți a băncii'
      ],
      correctAnswer: 1,
      explanation: 'Niciodată nu instala aplicații de control la distanță precum AnyDesk sau TeamViewer la cererea unui apelant, chiar dacă pretinde că este de la bancă. Aceste aplicații pot permite fraudatorilor să preia controlul dispozitivului tău.'
    },
    {
      question: 'Cum poți verifica dacă un email primit este într-adevăr de la banca ta?',
      options: [
        'Dacă are logo-ul băncii, sigur este legitim',
        'Verific adresa exactă a expeditorului pentru a confirma că este domeniul oficial al băncii',
        'Dacă conține detalii personale precum numele meu, este legitim',
        'Emailurile de la bănci sunt întotdeauna legitime'
      ],
      correctAnswer: 1,
      explanation: 'Verifică întotdeauna adresa completă a expeditorului. Băncile folosesc doar domenii oficiale (ex: @banca.ro). Fraudatorii pot folosi adrese similare dar ușor modificate (ex: @banca-secure.com).'
    },
    {
      question: 'Ce trebuie să faci imediat dacă suspectezi că ai fost victima unei fraude bancare?',
      options: [
        'Aștept să văd dacă se întâmplă ceva suspect în cont',
        'Contactez imediat banca la numărul oficial și raportez incidentul',
        'Încerc să rezolv problema direct cu persoana care m-a contactat',
        'Închid contul bancar și deschid unul nou'
      ],
      correctAnswer: 1,
      explanation: 'Contactează imediat banca la numărul oficial. Timpul este esențial pentru a limita daunele și a bloca accesul neautorizat la conturile tale.'
    },
    {
      question: 'Ce tehnică folosesc atacatorii pentru a face ca apelurile lor telefonice să pară că provin de la banca ta?',
      options: [
        'Phishing',
        'Spoofing',
        'Malware',
        'Social engineering'
      ],
      correctAnswer: 1,
      explanation: 'Atacatorii folosesc o tehnică numită "spoofing", prin care falsifică numărul expeditorului pentru a părea că provine de la bancă. Astfel, victima crede că este sunată de către bancă.'
    },
    {
      question: 'Ce detalii nu va cere niciodată banca ta prin telefon, SMS sau email?',
      options: [
        'Numele tău',
        'Adresa de email',
        'CNP și parole de internet banking',
        'Sucursala unde ai deschis contul'
      ],
      correctAnswer: 2,
      explanation: 'Banca nu îți va cere niciodată detalii precum CNP, cont bancar, parole sau date de logare în aplicațiile de banking, pentru că acestea se află deja în sistemul băncii.'
    },
    {
      question: 'Ce riști dacă dai datele tale bancare personale unor persoane neautorizate?',
      options: [
        'Nimic, datele sunt protejate oricum',
        'Doar spam pe email',
        'Furt de identitate sau de bani din cont',
        'Doar apeluri telefonice nedorite'
      ],
      correctAnswer: 2,
      explanation: 'Dacă datele tale bancare ajung în mâinile nepotrivite, riști să fii victima furtului de identitate sau de bani din conturile tale.'
    },
    {
      question: 'Cum recunoști un email de tip phishing de la o bancă?',
      options: [
        'Are mereu o adresă de email similară cu cea a băncii',
        'Conține greșeli gramaticale în text și solicitări urgente de "actualizare a datelor"',
        'Are un font diferit de cel al comunicărilor oficiale',
        'Este întotdeauna trimis noaptea'
      ],
      correctAnswer: 1,
      explanation: 'E-mailurile de tip phishing pot imita comunicările oficiale, dar conțin adesea greșeli gramaticale din text sau solicitări suspecte precum "actualizează datele pentru a nu-ți bloca accesul".'
    },
    {
      question: 'Ce strategie folosesc hackerii pentru a te determina să acționezi fără să verifici legitimitatea cererii?',
      options: [
        'Îți oferă timp de gândire',
        'Creează un sentiment de panică și urgență',
        'Îți dau informații complete',
        'Îți cer să consulți un specialist'
      ],
      correctAnswer: 1,
      explanation: 'Hackerii se folosesc de crearea sentimentului de panică și de urgență pentru a te convinge să transferi o sumă de bani sau să oferi date sensibile, fără să ai timp să verifici legitimitatea cererii.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0">
        <p className="text-sm text-gray-600 mb-6 text-left">Designed by prof. Simina Marius</p>
        <p className="text-gray-600 text-center mb-6">Testează-ți cunoștințele despre protecția împotriva fraudelor bancare.</p>
        
        <QuizComponent questions={quizQuestions} allowPrevious={true} />
      </div>
    </div>
  );
}
