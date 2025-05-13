import { Building, Shield, FileText, Phone, Mail, Globe, FileSpreadsheet, Video, Book, Store } from "lucide-react";

export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0">
        <h1 className="text-2xl font-bold text-gray-900">Resurse utile</h1>
        <p className="mt-2 text-gray-600">Aceste resurse oficiale te pot ajuta să afli mai multe despre siguranța bancară și să raportezi eventuale fraude.</p>

        <div className="mt-10 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {/* Official Banking Resources */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-primary px-4 py-3">
              <h2 className="text-lg font-semibold text-white">Resurse Bancare Oficiale</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-6">
                <li className="flex">
                  <Building className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Banca Națională a României</h3>
                    <p className="mt-1 text-gray-600">Informații oficiale despre siguranța bancară și alerte de fraudă.</p>
                    <a href="https://www.bnr.ro/Fraude-online-15308.aspx" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-primary hover:text-primary-700">
                      Vizitează site-ul
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </li>
                <li className="flex pt-6 border-t border-gray-200">
                  <Shield className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">CERT-RO</h3>
                    <p className="mt-1 text-gray-600">Centrul Național de Răspuns la Incidente de Securitate Cibernetică cu informații despre atacuri și fraude.</p>
                    <a href="https://cert.ro/citeste/alerte-fraude-phishing" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-primary hover:text-primary-700">
                      Vizitează site-ul
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </li>
                <li className="flex pt-6 border-t border-gray-200">
                  <Store className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Asociația Română a Băncilor</h3>
                    <p className="mt-1 text-gray-600">Resurse educaționale și informații despre prevenirea fraudelor bancare.</p>
                    <a href="https://www.arb.ro/educatie-financiara/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-primary hover:text-primary-700">
                      Vizitează site-ul
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Reporting Fraud Resources */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-primary px-4 py-3">
              <h2 className="text-lg font-semibold text-white">Unde să raportezi fraude</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-6">
                <li className="flex">
                  <Shield className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Poliția Română - Structura de Criminalitate Informatică</h3>
                    <p className="mt-1 text-gray-600">Pentru raportarea fraudelor cibernetice și infracțiunilor electronice.</p>
                    <a href="https://www.politiaromana.ro/ro/structura-politiei-romane/unitati-centrale/directia-de-investigatii-criminale/serviciul-de-combatere-a-criminalitatii-informatice" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-primary hover:text-primary-700">
                      Vizitează site-ul
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </li>
                <li className="flex pt-6 border-t border-gray-200">
                  <FileText className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">ANPC - Autoritatea Națională pentru Protecția Consumatorilor</h3>
                    <p className="mt-1 text-gray-600">Pentru reclamații legate de servicii financiar-bancare și practici înșelătoare.</p>
                    <a href="https://anpc.ro/galerie/file/544/2018/Cum_sa_faci_o_reclamatie_ANPC.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-primary hover:text-primary-700">
                      Descarcă ghidul de reclamații
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3-10a1 1 0 011-1h12a1 1 0 110 2H7a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H7a1 1 0 01-1-1z" />
                      </svg>
                    </a>
                  </div>
                </li>
                <li className="flex pt-6 border-t border-gray-200">
                  <Mail className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Phishing Initiative</h3>
                    <p className="mt-1 text-gray-600">Platformă pentru raportarea site-urilor de phishing și a emailurilor frauduloase.</p>
                    <a href="https://phishing-initiative.eu/contrib/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-primary hover:text-primary-700">
                      Raportează phishing
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Educational Materials */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-primary px-4 py-3">
              <h2 className="text-lg font-semibold text-white">Materiale Educaționale</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-6">
                <li className="flex">
                  <FileSpreadsheet className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Ghid de securitate online</h3>
                    <p className="mt-1 text-gray-600">Ghid complet pentru protejarea identității și datelor financiare în mediul online.</p>
                    <a href="#" className="mt-2 inline-flex items-center text-primary hover:text-primary-700">
                      Descarcă PDF
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </li>
                <li className="flex pt-6 border-t border-gray-200">
                  <Video className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Tutoriale video despre siguranța bancară</h3>
                    <p className="mt-1 text-gray-600">Serie de tutoriale care explică cum să identifici și să te protejezi de fraudele bancare comune.</p>
                    <a href="#" className="mt-2 inline-flex items-center text-primary hover:text-primary-700">
                      Vizionează tutoriale
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </li>
                <li className="flex pt-6 border-t border-gray-200">
                  <Book className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Dicționar de termeni de fraudă bancară</h3>
                    <p className="mt-1 text-gray-600">Termeni și definiții pentru a înțelege mai bine limbajul folosit în contextul securității bancare online.</p>
                    <a href="#" className="mt-2 inline-flex items-center text-primary hover:text-primary-700">
                      Consultă dicționarul
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-primary px-4 py-3">
              <h2 className="text-lg font-semibold text-white">Contacte utile</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-6">
                <li className="flex">
                  <Phone className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Linia telefonică pentru incidente de securitate cibernetică</h3>
                    <p className="mt-1 text-gray-600">Linie telefonică dedicată raportării incidentelor de securitate cibernetică.</p>
                    <p className="mt-2 text-lg font-medium text-primary-700">0800-800-358</p>
                  </div>
                </li>
                <li className="flex pt-6 border-t border-gray-200">
                  <Mail className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Email pentru raportarea fraudelor</h3>
                    <p className="mt-1 text-gray-600">Adresă de email pentru raportarea tentativelor de fraudă.</p>
                    <a href="mailto:raportare@cert.ro" className="mt-2 inline-flex items-center text-primary hover:text-primary-700">
                      raportare@cert.ro
                    </a>
                  </div>
                </li>
                <li className="flex pt-6 border-t border-gray-200">
                  <Globe className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Platformă online de raportare</h3>
                    <p className="mt-1 text-gray-600">Platformă online pentru raportarea incidentelor de securitate cibernetică.</p>
                    <a href="https://www.cert.ro/raportare-incidente" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-primary hover:text-primary-700">
                      Raportează un incident
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
