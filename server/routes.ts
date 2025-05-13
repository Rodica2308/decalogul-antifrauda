import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for banking fraud prevention application
  
  // Get fraud types information
  app.get('/api/fraud-types', (req, res) => {
    const fraudTypes = [
      {
        id: 1,
        type: 'phishing',
        title: 'Phishing prin linkuri frauduloase',
        description: 'Atacatorii trimit mesaje ce conțin linkuri care par legitime dar te direcționează către site-uri false.'
      },
      {
        id: 2,
        type: 'spoofing',
        title: 'Spoofing și Impersonare', 
        description: 'Fraudatorii falsifică numere de telefon sau adrese de email pentru a părea că te contactează din partea băncii.'
      },
      {
        id: 3,
        type: 'data_requests',
        title: 'Solicitări de date bancare complete',
        description: 'Fraudatorii solicită date bancare complete sub pretextul unor plăți sau actualizări.'
      },
      {
        id: 4,
        type: 'remote_control',
        title: 'Aplicații de control la distanță',
        description: 'Convingerea victimei să instaleze aplicații care permit controlul de la distanță al dispozitivului.'
      }
    ];
    
    res.json(fraudTypes);
  });

  // Get protection tips
  app.get('/api/protection-tips', (req, res) => {
    const tips = [
      {
        id: 1,
        category: 'personal_data',
        title: 'Protejarea informațiilor personale',
        tips: [
          'Nu furniza niciodată date personale complete precum CNP sau credențiale',
          'Pentru a primi bani, doar IBAN-ul este necesar'
        ]
      },
      {
        id: 2,
        category: 'communication',
        title: 'Verificarea comunicărilor',
        tips: [
          'Verifică întotdeauna adresa de email a expeditorului',
          'Fii atent la greșelile gramaticale din mesaje'
        ]
      }
    ];
    
    res.json(tips);
  });

  // Submit quiz results
  app.post('/api/quiz-results', (req, res) => {
    const { score, totalQuestions } = req.body;
    
    if (typeof score !== 'number' || typeof totalQuestions !== 'number') {
      return res.status(400).json({ message: 'Score and totalQuestions must be numbers' });
    }
    
    // In a real application, we might store these results
    // For now we just return a success message
    res.json({ 
      message: 'Quiz results saved successfully',
      percentageCorrect: Math.round((score / totalQuestions) * 100)
    });
  });

  // Get fraud alerts
  app.get('/api/fraud-alerts', (req, res) => {
    const alerts = [
      {
        id: 1,
        title: 'Alertă nouă de fraudă',
        content: 'A fost identificat recent un nou val de SMS-uri frauduloase care pretind că sunt de la servicii de curierat.',
        date: '2023-07-15',
        severity: 'high'
      },
      {
        id: 2,
        title: 'Campanie de phishing în desfășurare',
        content: 'S-a observat o campanie de phishing care țintește clienții băncilor prin emailuri false despre actualizarea aplicației.',
        date: '2023-07-10',
        severity: 'medium' 
      }
    ];
    
    res.json(alerts);
  });

  const httpServer = createServer(app);

  return httpServer;
}
