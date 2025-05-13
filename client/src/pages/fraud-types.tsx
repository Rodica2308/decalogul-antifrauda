import FraudTypeSection from "@/components/fraud-types/fraud-type-section";
import { Link, LinkIcon, User, CreditCard, MonitorSmartphone } from "lucide-react";

export default function FraudTypes() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0">
        <h1 className="text-2xl font-bold text-gray-900">Tipuri de fraudă bancară</h1>
        <p className="mt-2 text-gray-600">Descoperă cele mai comune tipuri de fraude bancare și cum să le recunoști.</p>

        <div className="mt-8">
          <FraudTypeSection
            icon={<Link className="text-amber-500 h-5 w-5" />}
            iconBg="bg-amber-50"
            title="Phishing prin linkuri frauduloase"
            description="Atacatorii trimit mesaje ce conțin linkuri care par legitime dar te direcționează către site-uri false care imită portalurile bancare oficiale."
            example={
              <>
                <p className="text-gray-800"><strong>De la:</strong> Banca-TA-Secure@secure-access-portal.com</p>
                <p className="text-gray-800 mt-2"><strong>Subiect:</strong> URGENT: Contul tău este în pericol - Acționează acum!</p>
                <div className="mt-2 p-3 bg-gray-100 rounded text-gray-700">
                  Dragă client,<br /><br />
                  Am detectat activitate suspectă în contul tău. Pentru a preveni accesul neautorizat, trebuie să verifici urgent datele tale de securitate.<br /><br />
                  <a href="#" className="text-blue-600 underline">Click aici pentru a-ți verifica contul</a><br /><br />
                  Dacă nu acționezi în următoarele 24 de ore, contul tău va fi blocat.<br /><br />
                  Echipa de Securitate,<br />
                  Banca TA
                </div>
              </>
            }
            warningSigns={[
              "Adresa de email suspectă care nu aparține domeniului oficial al băncii",
              "Crearea unui sentiment de urgență pentru a te determina să acționezi impulsiv",
              "Amenințări cu consecințe negative dacă nu acționezi imediat",
              "Linkuri care nu indică site-ul oficial al băncii când sunt verificate (se poate observa trecând cursorul peste link)"
            ]}
            protectionTips={[
              "Nu accesa niciodată linkuri din emailuri sau SMS-uri nesolicitate",
              "Accesează direct site-ul băncii tale tastând adresa în browser",
              "Verifică adresa expeditorului - băncile folosesc doar domenii oficiale",
              "Contactează banca la numărul oficial de pe cardul tău sau de pe site-ul oficial dacă ai suspiciuni"
            ]}
          />
          
          <FraudTypeSection
            icon={<User className="text-red-500 h-5 w-5" />}
            iconBg="bg-red-50"
            title="Spoofing și Impersonare"
            description="Fraudatorii falsifică numere de telefon sau adrese de email pentru a părea că te contactează din partea băncii. Această tehnică se numește 'spoofing'."
            example={
              <>
                <p className="text-gray-800"><strong>Apel de la:</strong> 021 345 6789 (apare ca numărul oficial al băncii)</p>
                <div className="mt-2 p-3 bg-gray-100 rounded text-gray-700">
                  <p><strong>Operator fals:</strong> "Bună ziua, sunt Alexandru de la departamentul de securitate al Băncii TA. Am detectat o tranzacție suspectă de 5.000 lei efectuată din contul dumneavoastră către un cont străin. Ați autorizat această tranzacție?"</p>
                  <p className="mt-2"><strong>Client:</strong> "Nu, nu am făcut nicio astfel de tranzacție!"</p>
                  <p className="mt-2"><strong>Operator fals:</strong> "Pentru a bloca această tranzacție și a verifica identitatea dumneavoastră, am nevoie să confirmați datele cardului, inclusiv codul CVV și ultimele parole primite prin SMS."</p>
                </div>
              </>
            }
            warningSigns={[
              "Solicitarea datelor confidențiale (CVV, parole de unică folosință, date complete ale cardului)",
              "Crearea unui sentiment de panică legat de tranzacții neautorizate",
              "Presiunea de a acționa imediat, fără a verifica prin alte mijloace",
              "Cererea de a instala aplicații de control la distanță (AnyDesk, TeamViewer)"
            ]}
            protectionTips={[
              "Închide apelul și contactează banca la numărul oficial de pe spatele cardului",
              "Nu oferi niciodată: PIN, parole, coduri CVV sau coduri de autentificare primite prin SMS",
              "Banca nu îți va cere niciodată să instalezi aplicații de control la distanță",
              "Verifică întotdeauna legitimitatea apelurilor prin contactarea directă a băncii"
            ]}
          />
          
          <FraudTypeSection
            icon={<CreditCard className="text-primary h-5 w-5" />}
            iconBg="bg-primary-50"
            title="Solicitări de date bancare complete"
            description="Fraudatorii solicită date bancare complete sub pretextul unor plăți, actualizări de cont sau oferte speciale."
            example={
              <>
                <p className="text-gray-800"><strong>SMS de la:</strong> Număr necunoscut</p>
                <div className="mt-2 p-3 bg-gray-100 rounded text-gray-700">
                  "Felicitări! Ai fost selectat pentru a primi un premiu de 1.000 lei. Pentru a procesa transferul, te rugăm să ne trimiți următoarele detalii: nume complet, CNP, număr card, data expirării, cod CVV și adresa. Răspunde în 24h."
                </div>
              </>
            }
            warningSigns={[
              "Solicitări de informații excesive și sensibile pentru un simplu transfer",
              "Oferte foarte avantajoase sau câștiguri neașteptate care par prea bune pentru a fi adevărate",
              "Limitarea timpului pentru a răspunde (crearea urgenței)",
              "Expeditorul este necunoscut sau folosește un număr generic"
            ]}
            protectionTips={[
              "Pentru a primi bani, doar IBAN-ul este necesar - niciodată detalii complete ale cardului sau CNP",
              "Nu răspunde la mesaje nesolicitate care promit câștiguri sau premii",
              "Blochează numerele de telefon suspecte",
              "Raportează mesajele suspecte băncii tale și autorităților"
            ]}
          />
          
          <FraudTypeSection
            icon={<MonitorSmartphone className="text-red-500 h-5 w-5" />}
            iconBg="bg-red-50"
            title="Aplicații de control la distanță"
            description="Unul dintre cele mai periculoase tipuri de fraudă implică convingerea victimei să instaleze aplicații care permit controlul de la distanță al dispozitivului."
            example={
              <>
                <p className="text-gray-800"><strong>Apel de la:</strong> Presupus "specialist IT" al băncii</p>
                <div className="mt-2 p-3 bg-gray-100 rounded text-gray-700">
                  <p><strong>Specialist fals:</strong> "Bună ziua, sunt Andrei de la departamentul IT al Băncii TA. Am detectat încercări de acces neautorizat la aplicația dumneavoastră de mobile banking. Pentru a securiza contul, trebuie să instalați o aplicație de protecție specială."</p>
                  <p className="mt-2"><strong>Client:</strong> "Ce fel de aplicație?"</p>
                  <p className="mt-2"><strong>Specialist fals:</strong> "Vă rog să descărcați aplicația AnyDesk din magazinul de aplicații și să ne furnizați codul generat pentru a putea efectua o scanare de securitate a dispozitivului dumneavoastră."</p>
                </div>
              </>
            }
            warningSigns={[
              "Solicitarea de a instala aplicații precum AnyDesk, TeamViewer sau alte aplicații de control la distanță",
              "Pretinderea că aplicația este \"de securitate\" sau \"pentru protecția contului\"",
              "Cererea de a furniza coduri generate de aceste aplicații",
              "Presiunea de timp și invocarea unor amenințări de securitate"
            ]}
            protectionTips={[
              "Banca nu va solicita niciodată instalarea de aplicații de control la distanță",
              "Respinge orice solicitare de a instala aplicații la cererea unor apeluri telefonice",
              "Dacă ai dubii, închide apelul și contactează banca la numărul oficial",
              "Dacă ai instalat deja o astfel de aplicație, deconectează-te imediat de la internet, dezinstalează aplicația și contactează banca pentru a raporta incidentul"
            ]}
          />
        </div>
      </div>
    </div>
  );
}
