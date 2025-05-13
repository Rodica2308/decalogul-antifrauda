import { ReactNode } from "react";

interface FraudIndicatorCardProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

export default function FraudIndicatorCard({ icon, iconBg, title, description }: FraudIndicatorCardProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
      <div className="flex items-center mb-4">
        <div className={`${iconBg} p-3 rounded-full`}>
          {icon}
        </div>
        <h3 className="ml-3 text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
