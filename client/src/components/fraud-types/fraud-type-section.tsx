import { ReactNode } from "react";

interface FraudTypeSectionProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
  example: ReactNode;
  warningSigns: string[];
  protectionTips: string[];
}

export default function FraudTypeSection({
  icon,
  iconBg,
  title,
  description,
  example,
  warningSigns,
  protectionTips
}: FraudTypeSectionProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center">
        <div className={`${iconBg} p-3 rounded-full`}>
          {icon}
        </div>
        <h2 className="ml-3 text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      
      <div className="mt-4 ml-12">
        <p className="text-gray-600">{description}</p>
        
        {/* Example of the fraud */}
        <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="font-medium text-gray-900">Exemplu de mesaj fraudulos:</h3>
          <div className="mt-2 bg-gray-50 p-4 rounded border border-gray-200">
            {example}
          </div>
          
          {/* Warning Signs */}
          <div className="mt-4">
            <h3 className="font-medium text-gray-900">Cum recunoști frauda:</h3>
            <ul className="mt-2 space-y-2 text-gray-600 list-disc list-inside">
              {warningSigns.map((sign, index) => (
                <li key={index}>{sign}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* How to protect yourself */}
        <div className="mt-6">
          <h3 className="font-medium text-gray-900">Cum te protejezi:</h3>
          <ul className="mt-2 space-y-2 text-gray-600 list-disc list-inside">
            {protectionTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
