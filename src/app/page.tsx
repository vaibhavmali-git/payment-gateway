import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Payment Gateway
        </h1>
        <p className="text-gray-500 mt-2">
          Complete your transaction securely
        </p>
      </header>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 min-h-[400px] flex items-center justify-center">
        <p className="text-gray-400">Payment Form Mount Point</p>
      </div>
      
    </div>
  );
}