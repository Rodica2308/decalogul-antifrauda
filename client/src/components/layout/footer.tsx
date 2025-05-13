import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center">
            <ShieldCheck className="h-6 w-6 text-white" />
            <span className="ml-2 text-lg font-bold text-white">CEFCA Secure</span>
          </div>
          <p className="mt-4 text-base text-gray-400 md:mt-0">
            &copy; {new Date().getFullYear()} CEFCA Secure. Toate drepturile rezervate. Informații educaționale pentru protecția împotriva fraudelor bancare.
          </p>
        </div>
      </div>
    </footer>
  );
}
