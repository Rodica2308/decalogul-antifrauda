import QuizComponent from "@/components/quiz/quiz-component";

export default function Quiz() {
  const quizQuestions = [
    {
      question: 'Primești un mesaj pe WhatsApp de la un „prieten" care îți cere urgent bani pentru o urgență medicală. Ce faci?',
      options: [
        'Transfer imediat banii, prietenul meu are nevoie de ajutor',
        'Sun prietenul la numărul lui real de telefon pentru a verifica dacă el a trimis mesajul',
        'Cer detalii suplimentare prin același chat WhatsApp',
        'Trimit jumătate din suma cerută, ca măsură de precauție'
      ],
      correctAnswer: 1,
      explanation: 'Fraudatorii clonează conturi de WhatsApp sau preiau controlul asupra lor. Singura modalitate sigură de verificare este să contactezi persoana pe alt canal (telefon, față în față). Nu trimite niciodată bani fără confirmare directă.'
    },
    {
      question: 'Scanezi un cod QR lipit pe un terminal de plată într-un restaurant. Ce risc există?',
      options: [
        'Codul QR poate fi un sticker fals lipit peste cel original, care te redirecționează către un site fraudulos',
        'Codurile QR sunt întotdeauna sigure deoarece sunt generate automat',
        'Riscul este doar dacă telefonul nu are antivirus',
        'Nu există niciun risc, codurile QR nu pot conține viruși'
      ],
      correctAnswer: 0,
      explanation: 'Tehnica „quishing" (QR + phishing) presupune lipirea unui cod QR fals peste cel legitim. Când îl scanezi, ești redirecționat către un site care îți fură datele de card. Verifică mereu dacă codul QR nu este un autocolant lipit peste cel original.'
    },
    {
      question: 'Primești un apel video în care „directorul băncii" îți cere să confirmi o tranzacție. Vocea și chipul par reale. Ce faci?',
      options: [
        'Confirm tranzacția, deoarece am văzut chipul directorului',
        'Închid și sun la numărul oficial al băncii, deoarece tehnologia deepfake poate genera imagini și voci false',
        'Cer să îmi trimită un email de confirmare în timpul apelului',
        'Verific dacă apelul vine de pe un număr cu prefixul băncii'
      ],
      correctAnswer: 1,
      explanation: 'Tehnologia deepfake bazată pe inteligență artificială poate genera video și audio extrem de realiste. Fraudatorii pot imita perfect chipul și vocea oricui. Nu lua decizii financiare bazate pe apeluri video nesolicitate — sună mereu banca la numărul oficial.'
    },
    {
      question: 'Găsești un magazin online cu prețuri incredibil de mici (iPhone la 200 lei). Ce indiciu sugerează că este o fraudă?',
      options: [
        'Site-ul are multe recenzii pozitive',
        'Acceptă plata doar prin transfer bancar direct sau criptomonede, fără opțiuni de plată cu cardul sau ramburs',
        'Site-ul are un design profesional',
        'Oferă livrare gratuită'
      ],
      correctAnswer: 1,
      explanation: 'Magazinele frauduloase oferă prețuri nerealiste și acceptă doar metode de plată ireversibile (transfer bancar, cripto). Un site legitim oferă multiple opțiuni de plată (card, ramburs). Recenziile pot fi false, iar designul poate fi copiat de pe site-uri reale.'
    },
    {
      question: 'Telefonul tău pierde brusc semnalul mobil și nu mai poți primi SMS-uri sau apeluri. Ce s-ar putea întâmpla?',
      options: [
        'Probabil e o problemă temporară de rețea, aștept câteva ore',
        'Este posibil să fiu victima unui atac SIM Swapping — sun imediat operatorul de la alt telefon',
        'Repornesc telefonul și aștept să revină semnalul',
        'Mă conectez la Wi-Fi și folosesc aplicațiile de banking normal'
      ],
      correctAnswer: 1,
      explanation: 'Atacul SIM Swapping presupune că fraudatorul convinge operatorul de telefonie să transfere numărul tău pe o altă cartelă SIM. Astfel, primește el SMS-urile de confirmare bancară. Dacă pierzi brusc semnalul, contactează imediat operatorul și banca!'
    },
    {
      question: 'Un „angajator" de pe internet îți oferă un job de acasă: să primești bani în contul tău și să îi transferi mai departe, păstrând un comision. Ce este de fapt?',
      options: [
        'O oportunitate legitimă de lucru de acasă',
        'O schemă de tip „money mule" — devii complice la spălare de bani, riscând închisoarea',
        'Un mod sigur de a câștiga bani extra dacă sumele sunt mici',
        'O practică obișnuită în comerțul internațional'
      ],
      correctAnswer: 1,
      explanation: 'Aceasta este o schemă de tip „money mule" (catâr financiar). Banii proveniți din fraude sunt „spălați" prin contul tău. Ești considerat complice la spălare de bani și riști pedeapsa cu închisoarea, chiar dacă nu știai proveniența banilor.'
    },
    {
      question: 'Te conectezi la Wi-Fi-ul gratuit dintr-o cafenea și vrei să verifici soldul bancar. Ce risc major există?',
      options: [
        'Bateria telefonului se consumă mai repede',
        'Nu există niciun risc dacă site-ul băncii are lacătul verde (HTTPS)',
        'Un atacator poate intercepta datele tale printr-un atac „Man-in-the-Middle", chiar și pe site-uri HTTPS',
        'Wi-Fi-ul public este la fel de sigur ca cel de acasă'
      ],
      correctAnswer: 2,
      explanation: 'Pe rețele Wi-Fi publice, atacatorii pot crea puncte de acces false sau intercepta traficul prin atacuri „Man-in-the-Middle". Evită accesarea aplicațiilor bancare pe Wi-Fi public. Folosește datele mobile sau un VPN pentru tranzacții financiare.'
    },
    {
      question: 'Primești un email de la „ANAF" care spune că ai o restanță fiscală și trebuie să plătești imediat pentru a evita executarea silită. Ce faci?',
      options: [
        'Plătesc imediat pentru a evita probleme legale',
        'Accesez linkul din email pentru a verifica situația fiscală',
        'Verific pe site-ul oficial anaf.ro sau sun la numărul oficial al ANAF pentru confirmare',
        'Răspund la email cerând mai multe detalii despre restanță'
      ],
      correctAnswer: 2,
      explanation: 'ANAF, băncile și alte instituții nu trimit niciodată solicitări de plată prin email cu amenințări de executare imediată. Verifică mereu pe site-ul oficial sau la telefonul instituției. Presiunea și urgența sunt semne clare de fraudă.'
    },
    {
      question: 'Observi pe extras de cont o tranzacție mică (2-3 lei) pe care nu o recunoști. Ce semnifică acest lucru?',
      options: [
        'Probabil un cost bancar minor, nu e nimic grav',
        'Poate fi un test al fraudatorilor care verifică dacă datele cardului funcționează, înainte de tranzacții mari',
        'Este normal să apară mici diferențe pe extras',
        'Banca a aplicat o taxă automată'
      ],
      correctAnswer: 1,
      explanation: 'Fraudatorii testează adesea cardurile furate cu tranzacții foarte mici (1-5 lei) pentru a verifica dacă funcționează. Dacă trec, urmează tranzacții mari. Raportează imediat orice tranzacție nerecunoscută, oricât de mică!'
    },
    {
      question: 'Ce parolă este cea mai sigură pentru aplicația de internet banking?',
      options: [
        'NumeleMeu2024',
        'parola123',
        'Data ta de naștere (ex: 15031990)',
        'O frază unică precum „CaineleMeuAre3PeteNegre!" combinată cu autentificare în doi pași'
      ],
      correctAnswer: 3,
      explanation: 'O parolă sigură este lungă, conține litere mari și mici, cifre și caractere speciale, și nu conține informații personale. Cea mai bună protecție combină o parolă puternică cu autentificarea în doi pași (2FA), care adaugă un nivel extra de securitate.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-3 sm:py-6 sm:px-6 lg:px-8">
      <div className="px-3 sm:px-0">
        <p className="text-[0.65rem] text-gray-600 mb-2 sm:mb-3 text-left">by prof. Simina Marius</p>
        <p className="text-xs sm:text-sm text-gray-600 text-center mb-4 sm:mb-6">Testează-ți cunoștințele despre protecția împotriva fraudelor bancare.</p>
        
        <QuizComponent questions={quizQuestions} allowPrevious={true} />
      </div>
    </div>
  );
}
