import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import FraudTypes from "@/pages/fraud-types";
import Protection from "@/pages/protection";
import Quiz from "@/pages/quiz";
import Resources from "@/pages/resources";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { useState } from "react";
import { SearchProvider } from "@/hooks/use-search";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tipuri-frauda" component={FraudTypes} />
      <Route path="/protectie" component={Protection} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/resurse" component={Resources} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar 
              isMobileMenuOpen={isMobileMenuOpen} 
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
            <Toaster />
          </div>
        </TooltipProvider>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
