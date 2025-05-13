import { ReactNode } from "react";
import { AlertCircle } from "lucide-react";

interface FraudAlertCardProps {
  title: string;
  content: ReactNode;
}

export default function FraudAlertCard({ title, content }: FraudAlertCardProps) {
  return (
    <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertCircle className="h-6 w-6 text-red-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-red-800">{title}</h3>
          <div className="mt-2 text-red-700">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
