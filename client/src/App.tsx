import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Quiz from "@/pages/quiz";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center h-16 items-center">
              <h1 className="text-xl font-bold text-primary-700">CEFCA Secure</h1>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          <Quiz />
        </main>
        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} CEFCA Secure. Toate drepturile rezervate.
            </p>
          </div>
        </footer>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
