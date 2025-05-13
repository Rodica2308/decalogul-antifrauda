import ProtectionCard from "@/components/protection/protection-card";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Bell, MonitorSmartphone, CreditCard } from "lucide-react";

export default function Protection() {
  const protectionSections = [
    {
      title: "Protejarea informațiilor personale",
      icon: <ShieldCheck className="h-5 w-5 text-white" />,
      tips: [
        "Nu furniza niciodată date personale complete precum CNP, informații de card sau credențiale de banking prin telefon, email sau SMS, indiferent cine le solicită.",
        "Pentru a primi bani, doar IBAN-ul este necesar. Niciodată nu oferi număr de card, CVV sau alte detalii sensibile.",
        "Nu distribui coduri primite prin SMS sau generate în aplicațiile de autentificare cu nimeni, nici măcar cu persoane care pretind că sunt de la bancă.",
        "Banca ta are deja datele tale personale în sistem și nu are nevoie să le solicite din nou."
      ]
    },
    {
      title: "Verificarea comunicărilor",
      icon: <Bell className="h-5 w-5 text-white" />,
      tips: [
        "Verifică întotdeauna adresa de email a expeditorului. Băncile folosesc doar domenii oficiale (ex: @banca.ro, nu @banca-secure.com).",
        "Fii atent la greșelile gramaticale sau de ortografie din mesajele primite - acestea pot indica o tentativă de fraudă.",
        "Dacă primești un apel suspect, închide și sună direct la numărul oficial al băncii pentru verificare.",
        "Nu răspunde la comunicări care creează un sentiment de urgență sau panică."
      ]
    },
    {
      title: "Utilizarea sigură a dispozitivelor",
      icon: <MonitorSmartphone className="h-5 w-5 text-white" />,
      tips: [
        "Instalează doar aplicații din surse oficiale (App Store, Google Play) și verifică recenziile și dezvoltatorul.",
        "Menține sistemul de operare și aplicațiile actualizate pentru a beneficia de cele mai recente patch-uri de securitate.",
        "Nu instala niciodată aplicații de control la distanță precum AnyDesk sau TeamViewer la cererea unui apelant.",
        "Utilizează un software antivirus de încredere și efectuează verificări periodice ale dispozitivelor."
      ]
    },
    {
      title: "Securizarea conturilor bancare",
      icon: <CreditCard className="h-5 w-5 text-white" />,
      tips: [
        "Activează notificările pentru toate tranzacțiile pentru a detecta rapid orice activitate suspectă.",
        "Folosește parole puternice și unice pentru conturile bancare online și aplicațiile de mobile banking.",
        "Activează autentificarea în doi factori pentru toate conturile care oferă această opțiune.",
        "Verifică periodic extrasele de cont pentru a identifica tranzacții neautorizate."
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0">
        <h1 className="text-2xl font-bold text-gray-900">Cum să te protejezi</h1>
        <p className="mt-2 text-gray-600">Urmează aceste principii pentru a-ți proteja datele și fondurile de fraude bancare.</p>

        <div className="mt-10 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {protectionSections.map((section, index) => (
            <ProtectionCard
              key={index}
              title={section.title}
              icon={section.icon}
              tips={section.tips}
            />
          ))}
        </div>

        {/* What to do if you become a victim */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-gray-900">Ce să faci dacă ai devenit victima unei fraude</h2>
          <p className="mt-2 text-gray-600">Dacă suspectezi că ai fost victima unei fraude, acționează rapid:</p>

          <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <ol className="space-y-6 list-decimal list-inside">
                <li className="pb-5 border-b border-gray-200">
                  <p className="font-medium text-gray-900 inline">Contactează imediat banca</p>
                  <p className="mt-2 text-gray-700 ml-5">Sună la numărul oficial de pe spatele cardului sau de pe site-ul oficial al băncii. Explică situația în detaliu și solicită blocarea cardurilor sau conturilor compromise. Timpul este esențial.</p>
                </li>
                <li className="pb-5 border-b border-gray-200">
                  <p className="font-medium text-gray-900 inline">Schimbă-ți toate parolele</p>
                  <p className="mt-2 text-gray-700 ml-5">Modifică imediat parolele pentru toate conturile bancare, email și rețele sociale, folosind un dispozitiv sigur. Asigură-te că folosești parole puternice și diferite pentru fiecare cont.</p>
                </li>
                <li className="pb-5 border-b border-gray-200">
                  <p className="font-medium text-gray-900 inline">Documentează incidentul</p>
                  <p className="mt-2 text-gray-700 ml-5">Salvează toate mesajele, emailurile sau istoricul apelurilor legate de incident. Notează și detaliile: dată, oră, ce informații ai furnizat și ce acțiuni ai întreprins.</p>
                </li>
                <li className="pb-5 border-b border-gray-200">
                  <p className="font-medium text-gray-900 inline">Depune plângere la poliție</p>
                  <p className="mt-2 text-gray-700 ml-5">Raportează incidentul la poliție și obține o copie a plângerii. Acest document poate fi necesar pentru procedurile de contestare a tranzacțiilor frauduloase.</p>
                </li>
                <li>
                  <p className="font-medium text-gray-900 inline">Monitorizează-ți conturile</p>
                  <p className="mt-2 text-gray-700 ml-5">Verifică frecvent toate conturile tale bancare în perioada următoare pentru a identifica orice activitate suspectă și raportează imediat orice nereguli.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
