import { useState } from "react";
import { 
  Award, 
  ThumbsUp, 
  BookOpen, 
  ArrowRight, 
  Info
} from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizComponentProps {
  questions: Question[];
  allowPrevious?: boolean;
}

export default function QuizComponent({ questions, allowPrevious = false }: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const checkAnswer = () => {
    setAnswered(true);
    
    // Save the user's answer
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(newUserAnswers);
    
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setAnswered(false);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Set the selected option to the previously selected one (if any)
      setSelectedOption(userAnswers[currentQuestionIndex + 1]);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswered(userAnswers[currentQuestionIndex - 1] !== null);
      setSelectedOption(userAnswers[currentQuestionIndex - 1]);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedOption(null);
    setQuizCompleted(false);
    setUserAnswers(Array(questions.length).fill(null));
  };

  return (
    <div className="mt-4 sm:mt-8 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden max-w-3xl mx-auto">
      <div className="bg-primary px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <h2 className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-white mb-1 md:mb-0">Decalogul Antifraudă - 10 întrebări pentru siguranța banilor tăi</h2>
          {!quizCompleted && (
            <span className="text-primary-50 text-xs sm:text-sm md:text-base whitespace-nowrap">
              Întrebarea {currentQuestionIndex + 1} din {questions.length}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-3 sm:p-4 md:p-6">
        {!quizCompleted ? (
          <div>
            <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-900">{questions[currentQuestionIndex].question}</h3>
            
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index}>
                  <label 
                    className={`flex p-2 sm:p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedOption !== index && !answered ? "border-gray-300 bg-white" :
                      selectedOption === index && !answered ? "border-primary-500 bg-primary-50" :
                      answered && index === questions[currentQuestionIndex].correctAnswer ? "border-emerald-500 bg-emerald-50" :
                      answered && selectedOption === index && index !== questions[currentQuestionIndex].correctAnswer ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                    }`}
                  >
                    <input 
                      type="radio" 
                      name={`question-${currentQuestionIndex}`}
                      value={index}
                      checked={selectedOption === index} 
                      onChange={() => !answered && setSelectedOption(index)}
                      disabled={answered}
                      className="h-4 w-4 mt-0.5 cursor-pointer"
                    />
                    <span className="ml-2 text-xs sm:text-sm text-gray-700">{option}</span>
                  </label>
                </div>
              ))}
            </div>
            
            {/* Explanation after answering */}
            {answered && (
              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex">
                  <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div className="ml-2">
                    <p className="text-xs sm:text-sm text-primary-800">{questions[currentQuestionIndex].explanation}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 justify-between">
              {allowPrevious && currentQuestionIndex > 0 && (
                <button 
                  onClick={previousQuestion}
                  className="px-2 sm:px-3 py-1.5 bg-blue-500 text-white text-xs sm:text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Înapoi
                </button>
              )}
              
              {!allowPrevious && (
                <button 
                  onClick={checkAnswer} 
                  disabled={selectedOption === null || answered}
                  className={`px-2 sm:px-3 py-1.5 bg-primary text-white text-xs sm:text-sm font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                    (selectedOption === null || answered) ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Verifică
                </button>
              )}
              
              {allowPrevious && !answered && (
                <button 
                  onClick={checkAnswer} 
                  disabled={selectedOption === null}
                  className={`px-2 sm:px-3 py-1.5 bg-primary text-white text-xs sm:text-sm font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                    selectedOption === null ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Verifică
                </button>
              )}
              
              {answered && (
                <button 
                  onClick={nextQuestion}
                  className="px-2 sm:px-3 py-1.5 bg-primary text-white text-xs sm:text-sm font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center gap-1"
                >
                  {currentQuestionIndex < questions.length - 1 ? "Înainte" : "Rezultate"}
                  <ArrowRight className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              {score === questions.length && (
                <div>
                  <Award className="h-16 w-16 text-amber-500 mx-auto" />
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">Felicitări!</h3>
                  <p className="mt-2 text-lg text-gray-600">Ai obținut scorul maxim!</p>
                </div>
              )}
              
              {score >= (questions.length * 0.7) && score < questions.length && (
                <div>
                  <ThumbsUp className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">Foarte bine!</h3>
                  <p className="mt-2 text-lg text-gray-600">Ai cunoștințe solide despre siguranța bancară.</p>
                </div>
              )}
              
              {score >= (questions.length / 2) && score < (questions.length * 0.7) && (
                <div>
                  <ThumbsUp className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">Bine făcut!</h3>
                  <p className="mt-2 text-lg text-gray-600">Ai cunoștințe bune despre siguranța bancară.</p>
                </div>
              )}
              
              {score < (questions.length / 2) && (
                <div>
                  <BookOpen className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">Continuă să înveți!</h3>
                  <p className="mt-2 text-lg text-gray-600">Ai nevoie de mai multe informații pentru a te proteja eficient.</p>
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-xl font-bold text-gray-900">Scorul tău: {score}/{questions.length}</p>
              <p className="mt-1 text-gray-600">Procentaj: {Math.round((score / questions.length) * 100)}%</p>
            </div>
            
            <div className="mb-8 max-w-lg mx-auto bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Interpretarea scorului tău:</h4>
              {score === questions.length && (
                <p className="text-gray-700">
                  Excelent! Ai toate cunoștințele necesare pentru a te proteja împotriva fraudelor bancare. 
                  Ești vigilent și știi exact cum să identifici și să eviți tentativele de înșelăciune.
                </p>
              )}
              
              {score >= (questions.length * 0.7) && score < questions.length && (
                <div className="text-gray-700">
                  <p>
                    Foarte bun rezultat! Ai cunoștințe solide despre securitatea bancară și poți identifica
                    majoritatea tentativelor de fraudă. Continuă să fii vigilent și să-ți actualizezi informațiile
                    despre metodele de fraudă.
                  </p>
                  <p className="mt-2 text-yellow-600 font-medium">
                    Ai fost păcălit totuși {questions.length - score === 1 ? 'o dată' : `de ${questions.length - score} ori`}! Fii atent la detalii!
                  </p>
                </div>
              )}
              
              {score >= (questions.length / 2) && score < (questions.length * 0.7) && (
                <div className="text-gray-700">
                  <p>
                    Ai cunoștințe bune, dar există loc de îmbunătățire. Te sfătuim să acorzi o atenție deosebită
                    aspectelor legate de verificarea surselor comunicărilor și să nu oferi niciodată date confidențiale
                    prin canale nesigure.
                  </p>
                  <p className="mt-2 text-orange-600 font-medium">
                    Ai fost păcălit de {questions.length - score} ori! Fraudatorii ar putea profita de aceste vulnerabilități!
                  </p>
                </div>
              )}
              
              {score < (questions.length / 2) && score > (questions.length * 0.3) && (
                <div className="text-gray-700">
                  <p>
                    Ai cunoștințe de bază, dar este important să îți îmbunătățești vigilența. Învață să recunoști
                    semnele de avertizare ale fraudelor și nu acționa niciodată sub presiune sau din sentiment de urgență 
                    când e vorba de datele și banii tăi.
                  </p>
                  <p className="mt-2 text-red-600 font-medium">
                    Ai fost păcălit de {questions.length - score} ori! Ești expus la riscuri semnificative de fraudă!
                  </p>
                </div>
              )}
              
              {score <= (questions.length * 0.3) && (
                <div className="text-gray-700">
                  <p>
                    Este necesar să acorzi mai multă atenție siguranței bancare online. Fraudele sunt tot mai sofisticate 
                    și este esențial să înveți cum să te protejezi. Reține că banca nu îți va cere niciodată detalii 
                    confidențiale precum parole sau PIN-uri.
                  </p>
                  <p className="mt-2 text-red-700 font-bold">
                    Ai fost păcălit de {questions.length - score} ori! Ești foarte vulnerabil la fraude! Studiază cu atenție informațiile prezentate!
                  </p>
                </div>
              )}
            </div>
            
            <button 
              onClick={resetQuiz} 
              className="px-5 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Încearcă din nou
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
