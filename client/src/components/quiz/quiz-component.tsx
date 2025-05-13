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
}

export default function QuizComponent({ questions }: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const checkAnswer = () => {
    setAnswered(true);
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setAnswered(false);
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedOption(null);
    setQuizCompleted(false);
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden max-w-3xl mx-auto">
      <div className="bg-primary px-6 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">CEFCA Secure: Testează-ți cunoștințele</h2>
          {!quizCompleted && (
            <span className="text-primary-50">
              Întrebarea {currentQuestionIndex + 1} din {questions.length}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        {!quizCompleted ? (
          <div>
            <h3 className="text-lg font-medium text-gray-900">{questions[currentQuestionIndex].question}</h3>
            
            <div className="mt-6 space-y-3">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index}>
                  <label 
                    className={`flex p-4 border rounded-lg cursor-pointer transition-colors ${
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
                      className="h-5 w-5 mt-0.5 cursor-pointer"
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                </div>
              ))}
            </div>
            
            {/* Explanation after answering */}
            {answered && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex">
                  <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-primary-800">{questions[currentQuestionIndex].explanation}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-8 flex justify-between">
              <button 
                onClick={checkAnswer} 
                disabled={selectedOption === null || answered}
                className={`px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  (selectedOption === null || answered) ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Verifică răspunsul
              </button>
              
              {answered && (
                <button 
                  onClick={nextQuestion}
                  className="px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center gap-2"
                >
                  {currentQuestionIndex < questions.length - 1 ? "Următoarea întrebare" : "Vezi rezultatele"}
                  <ArrowRight className="h-4 w-4" />
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
              
              {score >= (questions.length / 2) && score < questions.length && (
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
            
            <div className="mb-8">
              <p className="text-xl font-bold text-gray-900">Scorul tău: {score}/{questions.length}</p>
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
