import { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

interface ProtectionCardProps {
  title: string;
  icon: ReactNode;
  tips: string[];
}

export default function ProtectionCard({ title, icon, tips }: ProtectionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-primary px-4 py-3">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          {icon}
          {title}
        </h2>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {tips.map((tip, index) => (
            <li key={index} className="flex">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span className="ml-3 text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
