import QuizComponent from "@/components/quiz/quiz-component";

export default function Quiz() {
  const quizQuestions = [
    {
      category: 'Phishing prin mesaj (prieten fals)',
      question: 'Un „prieten" îți scrie pe WhatsApp că are o urgență medicală și are nevoie de bani chiar acum. Ce faci?',
      options: [
        'Trimit banii imediat, e vorba de o urgență',
        'Îl sun pe numărul lui obișnuit, ca să fiu sigur că el a scris, nu altcineva',
        'Îi cer mai multe detalii tot pe WhatsApp',
        'Trimit doar jumătate din sumă, ca să fiu precaut'
      ],
      correctAnswer: 1
    },
    {
      category: 'Cod QR fraudulos (quishing)',
      question: 'Vrei să plătești parcarea scanând un cod QR lipit pe un stâlp. Ce ar trebui să te pui pe gânduri?',
      options: [
        'Codul ar putea fi un abțibild fals, lipit peste cel oficial, care te duce pe un site ce îți fură datele cardului',
        'Codurile QR sunt mereu sigure, sunt generate automat',
        'E o problemă doar dacă telefonul n-are antivirus',
        'Nu există niciun risc la coduri QR'
      ],
      correctAnswer: 0
    },
    {
      category: 'Deepfake / apel video fals',
      question: 'Primești un apel video în care cineva care arată și vorbește exact ca directorul băncii tale îți cere să confirmi o plată. Ce faci?',
      options: [
        'Confirm, doar l-am văzut cu ochii mei',
        'Închid și sun eu banca la numărul oficial, pentru că imaginea și vocea pot fi falsificate',
        'Îi cer să-mi trimită un email de confirmare',
        'Verific doar dacă numărul de telefon pare să fie al băncii'
      ],
      correctAnswer: 1
    },
    {
      category: 'Magazin online fals',
      question: 'Găsești un magazin online care vinde un iPhone la doar 200 de lei. Ce te-ar face să bănuiești o țeapă?',
      options: [
        'Are multe recenzii pozitive',
        'Acceptă plata doar prin transfer bancar sau criptomonede, nu și cu cardul sau ramburs',
        'Are un design de site foarte profesionist',
        'Oferă livrare gratuită'
      ],
      correctAnswer: 1
    },
    {
      category: 'SIM Swapping',
      question: 'Din senin, telefonul tău rămâne fără semnal și nu mai poți primi apeluri sau SMS-uri. Ce ar trebui să faci?',
      options: [
        'Aștept câteva ore, probabil e o problemă de rețea',
        'Sun imediat operatorul, de pe alt telefon — cineva ar fi putut să-mi preia numărul pe o altă cartelă SIM',
        'Repornesc telefonul și aștept',
        'Mă conectez la Wi-Fi și intru normal în aplicația băncii'
      ],
      correctAnswer: 1
    },
    {
      category: 'Money mule',
      question: 'Cineva cunoscut online îți propune o „afacere": banii lui trec prin contul tău, iar tu păstrezi o parte drept comision. Ce faci?',
      options: [
        'Accept, pare un mod ușor de a face bani',
        'Refuz — banii care trec fără motiv real prin contul meu ar putea fi din fraude, iar eu aș răspunde pentru asta',
        'Accept, dar doar dacă suma e mică',
        'Cer un contract semnat înainte'
      ],
      correctAnswer: 1
    },
    {
      category: 'Wi-Fi public / Man-in-the-Middle',
      question: 'Ești într-o cafenea și vrei să-ți verifici contul bancar folosind Wi-Fi-ul gratuit al localului. E o idee bună?',
      options: [
        'Da, atât timp cât site-ul băncii are lacătul verde în bara de adresă',
        'Nu, pe o rețea publică altcineva ar putea „asculta" ce trimit și fura datele mele',
        'Da, un Wi-Fi public e la fel de sigur ca cel de acasă',
        'Nu contează, telefonul are oricum parolă'
      ],
      correctAnswer: 1
    },
    {
      category: 'Phishing ANAF',
      question: 'Primești un email care pare de la ANAF, spunând că ai o datorie și trebuie să plătești urgent, altfel îți blochează contul. Ce faci?',
      options: [
        'Plătesc imediat, ca să evit problemele',
        'Dau click pe link să văd despre ce e vorba',
        'Verific direct pe site-ul oficial anaf.ro sau sun la ANAF, fără să folosesc linkul din email',
        'Răspund la email cerând mai multe detalii'
      ],
      correctAnswer: 2
    },
    {
      category: 'Tranzacție test (card furat)',
      question: 'Vezi pe extrasul de cont o plată de 2-3 lei pe care nu ți-o amintești. E o sumă prea mică ca să conteze?',
      options: [
        'Da, e neglijabilă',
        'Nu neapărat — hoții testează adesea un card furat cu sume mici, înainte să facă plăți mari',
        'E normal, băncile mai pun taxe mici din când în când',
        'Nu, doar dacă suma trece de 50 de lei'
      ],
      correctAnswer: 1
    },
    {
      category: 'Parole și 2FA',
      question: 'Care e cea mai bună metodă de a-ți proteja contul de internet banking?',
      options: [
        'O parolă cu numele tău și anul nașterii',
        'Aceeași parolă pe care o folosești și pe alte site-uri',
        'O parolă lungă, greu de ghicit, plus un cod de confirmare primit pe telefon la fiecare autentificare',
        'O parolă scurtă, dar schimbată des'
      ],
      correctAnswer: 2
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
