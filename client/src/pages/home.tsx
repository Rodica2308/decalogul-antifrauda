import FraudIndicatorCard from "@/components/home/fraud-indicator-card";
import FraudAlertCard from "@/components/home/fraud-alert-card";
import { Link } from "wouter";
import { 
  ShieldCheck, 
  Link as LinkIcon, 
  CreditCard,
  TimerOff,
  UserMinus,
  MonitorSmartphone,
  Mail
} from "lucide-react";

export default function Home() {
  const fraudIndicators = [
    {
      icon: <LinkIcon className="h-5 w-5 text-amber-500" />,
      iconBg: "bg-amber-50", 
      title: "Linkuri suspecte",
      description: "Dacă primești mesaje care îți cer să accesezi un link pentru a revendica un premiu sau a verifica informații despre contul tău, este probabil o fraudă."
    },
    {
      icon: <CreditCard className="h-5 w-5 text-primary" />, 
      iconBg: "bg-primary-50",
      title: "Cereri de date bancare",
      description: "Pentru primirea de bani, IBAN-ul este suficient. Solicitările pentru alte date personale sau bancare indică o posibilă tentativă de fraudă."
    },
    {
      icon: <TimerOff className="h-5 w-5 text-amber-500" />,
      iconBg: "bg-amber-50",
      title: "Sentimentul de urgență",
      description: "Mesajele care creează panică și cer acțiuni rapide sunt de obicei tehnici folosite pentru a te face să acționezi impulsiv, fără să verifici legitimitatea cererii."
    },
    {
      icon: <UserMinus className="h-5 w-5 text-red-500" />,
      iconBg: "bg-red-50",
      title: "Impersonarea identității",
      description: "Atacatorii pot pretinde că sunt din partea băncii tale, folosind tehnici de spoofing pentru a falsifica numerele de telefon sau adresele de email."
    },
    {
      icon: <MonitorSmartphone className="h-5 w-5 text-red-500" />,
      iconBg: "bg-red-50",
      title: "Aplicații de control la distanță",
      description: "Solicitările de a instala aplicații precum AnyDesk sau TeamViewer pot permite fraudatorilor să preia controlul dispozitivului tău și să acceseze datele bancare."
    },
    {
      icon: <Mail className="h-5 w-5 text-amber-500" />,
      iconBg: "bg-amber-50",
      title: "Emails de tip phishing",
      description: "Emailurile care imită comunicări oficiale ale băncilor pot conține greșeli gramaticale sau solicitări suspecte de actualizare a datelor."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {/* Hero section */}
      <div className="bg-primary rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Protejează-ți identitatea și banii de fraudele bancare online
            </h1>
            <p className="mt-4 text-lg text-primary-50">
              Învață să recunoști semnele unor potențiale fraude și să-ți protejezi datele personale și financiare în fața atacurilor cibernetice tot mai sofisticate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex rounded-md shadow">
                <Link href="/tipuri-frauda">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-primary-50">
                    Tipuri de fraudă
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="inline-flex">
                <Link href="/quiz">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800">
                    Testează-te
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key points */}
      <div className="mt-12 px-4 sm:px-0">
        <h2 className="text-2xl font-bold text-gray-900">Indicatori ai fraudei bancare</h2>
        <p className="mt-2 text-gray-600">Recunoaște principalele semne care pot indica o tentativă de fraudă:</p>
        
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fraudIndicators.map((indicator, index) => (
            <FraudIndicatorCard 
              key={index}
              icon={indicator.icon}
              iconBg={indicator.iconBg}
              title={indicator.title}
              description={indicator.description}
            />
          ))}
        </div>
      </div>

      {/* Latest fraud alert */}
      <div className="mt-12 px-4 sm:px-0">
        <h2 className="text-2xl font-bold text-gray-900">Alerte recente</h2>
        
        <FraudAlertCard 
          title="Alertă nouă de fraudă"
          content={
            <>
              <p>
                A fost identificat recent un nou val de SMS-uri frauduloase care pretind că sunt de la servicii de curierat, solicitând accesarea unui link pentru "actualizarea adresei de livrare". Aceste mesaje pot conține malware sau pot duce la pagini de phishing care îți fură datele bancare.
              </p>
              <p className="mt-3 text-sm">
                <strong>Ce să faci:</strong> Nu accesa niciodată linkuri din mesaje nesolicitate. Verifică întotdeauna direct cu compania de curierat folosind contactele oficiale de pe site-ul lor.
              </p>
            </>
          }
        />
      </div>
    </div>
  );
}
