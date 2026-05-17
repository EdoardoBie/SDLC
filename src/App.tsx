import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Settings, 
  TestTube, 
  Rocket, 
  Wrench, 
  Search,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

// --- Components ---

function Slide({ children, id }: { children: React.ReactNode, id?: string }) {
  return (
    <section 
      id={id}
      className="h-screen w-screen shrink-0 flex items-center justify-center p-8 snap-center relative"
    >
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center">
        {children}
      </div>
    </section>
  );
}

// --- Specific Slides ---

function IntroSlide() {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex items-center gap-3 bg-google-blue/10 rounded-full px-6 py-3 mb-4"
      >
        <Code2 className="w-6 h-6 text-google-blue" />
        <span className="text-google-blue font-medium tracking-wide">Edoardo Biestro</span>
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl font-semibold tracking-tight text-apple-text"
      >
        Il Ciclo di Vita<br />del Software
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, text: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl"
      >
        Come trasformare un'idea in codice funzionante, passo dopo passo.
      </motion.p>
    </div>
  );
}

function DefinitionSlide() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">Cos'è il SDLC?</h2>
        <p className="text-xl text-gray-600 leading-relaxed font-light">
          Il <strong className="font-semibold text-apple-text">Software Development Life Cycle</strong> è il processo metodico che i team utilizzano per progettare, sviluppare, testare e mantenere un software. 
        </p>
        <br />
        <p className="text-xl text-gray-600 leading-relaxed font-light">
          Assicura che il prodotto finale sia di alta qualità e soddisfi le richieste dei clienti, ottimizzando tempi e costi.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-1 w-full bg-apple-surface rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
      >
        <h3 className="text-2xl font-medium mb-8 text-google-blue">Obiettivi Principali</h3>
        <ul className="space-y-6">
          {[
            "Ridurre i rischi e gli imprevisti",
            "Migliorare la qualità del codice",
            "Rispettare le scadenze e il budget",
            "Soddisfare le esigenze dell'utente"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-lg text-gray-700">
              <CheckCircle2 className="w-6 h-6 text-google-blue shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

const phases = [
  { icon: Search, title: "1. Analisi", desc: "Cosa dobbiamo costruire?" },
  { icon: Settings, title: "2. Design", desc: "Come lo costruiamo?" },
  { icon: Code2, title: "3. Sviluppo", desc: "Scrittura del codice" },
  { icon: TestTube, title: "4. Test", desc: "Funziona tutto bene?" },
  { icon: Rocket, title: "5. Rilascio", desc: "In mano agli utenti" },
  { icon: Wrench, title: "6. Mantenimento", desc: "Fix e aggiornamenti" },
];

function PhasesSlide() {
  return (
    <div className="flex flex-col h-full justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-16 tracking-tight">Le 6 Fasi</h2>
      </motion.div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-apple-surface rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-google-blue/5 transition-colors duration-300">
              <phase.icon className="w-8 h-8 text-gray-700 group-hover:text-google-blue transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-medium mb-2">{phase.title}</h3>
            <p className="text-gray-500 font-light">{phase.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MethodologiesSlide() {
  return (
    <div className="flex flex-col h-full justify-center">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">Methodologie a Confronto</h2>
        <p className="text-xl text-gray-500 font-light">Due filosofie per gestire il ciclo di vita.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-apple-surface rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col"
        >
          <div className="h-2 w-20 bg-gray-300 rounded-full mb-8"></div>
          <h3 className="text-3xl font-semibold mb-4">Waterfall <span className="text-gray-400 font-light">(A Cascata)</span></h3>
          <p className="text-lg text-gray-600 mb-8 font-light flex-grow">
            Un processo lineare. Finisci una fase prima di passare alla successiva. Rigido, ideale per progetti in cui i requisiti sono chiarissimi sin dall'inizio.
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Metafora</p>
            <p className="text-lg text-gray-800">Costruire un ponte. Non puoi rimettere le fondamenta una volta posato l'asfalto.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-apple-surface rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-google-blue/20 flex flex-col relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-google-blue/5 rounded-bl-[100px]"></div>
          <div className="h-2 w-20 bg-google-blue rounded-full mb-8"></div>
          <h3 className="text-3xl font-semibold mb-4 text-google-blue">Agile <span className="text-gray-400 font-light">(Iterativo)</span></h3>
          <p className="text-lg text-gray-600 mb-8 font-light flex-grow">
            Un processo circolare. Sviluppo a piccoli passi (sprint), con feedback continuo del cliente. Flessibile, ideale per startup e software moderni.
          </p>
          <div className="bg-google-blue/5 rounded-2xl p-6 border border-google-blue/10">
            <p className="text-sm font-medium text-google-blue uppercase tracking-widest mb-2">Metafora</p>
            <p className="text-lg text-gray-800">Dipingere un quadro. Fai uno schizzo, aggiungi i colori, correggi i dettagli in base a cosa vedi.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const quizQuestions = [
  {
    question: "Quale metodologia è migliore se il cliente cambia spesso idea?",
    options: ["Waterfall", "Agile", "Nessuna delle due"],
    correct: 1,
    explanation: "Agile è progettato per adattarsi rapidamente ai cambiamenti tramite cicli brevi (sprint)."
  },
  {
    question: "Qual è la primissima fase del ciclo di vita del software?",
    options: ["Test", "Sviluppo (Codice)", "Analisi (Requisiti)"],
    correct: 2,
    explanation: "Prima di scrivere qualsiasi codice o design, bisogna analizzare e capire cosa serve costruire."
  },
  {
    question: "Che succede nella fase di 'Manutenzione'?",
    options: ["Si disegna l'interfaccia utente", "Si risolvono bug e si fanno aggiornamenti", "Il software viene venduto"],
    correct: 1,
    explanation: "Durante la manutenzione, il software è già live e si lavora per mantenerlo sicuro, veloce e senza errori nel tempo."
  }
];

function QuizSlide({ goToNextSlide }: { goToNextSlide: () => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelectedOpt(idx);
    setShowResult(true);
    if (idx === quizQuestions[currentQ].correct) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(q => q + 1);
      setSelectedOpt(null);
      setShowResult(false);
    } else {
      setCurrentQ(q => q + 1); // Move to final screen
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setScore(0);
    setSelectedOpt(null);
    setShowResult(false);
  };

  const isFinished = currentQ >= quizQuestions.length;

  return (
    <div className="flex flex-col h-full justify-center max-w-3xl mx-auto w-full">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Verifica le tue conoscenze</h2>
        <p className="text-xl text-gray-500 font-light">Un breve quiz interattivo.</p>
      </motion.div>

      <div className="bg-apple-surface rounded-[2.5rem] p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 min-h-[400px] flex flex-col">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div 
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Domanda {currentQ + 1} di {quizQuestions.length}</span>
              </div>
              <h3 className="text-2xl font-medium mb-8 leading-snug">{quizQuestions[currentQ].question}</h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                {quizQuestions[currentQ].options.map((opt, idx) => {
                  let buttonClass = "w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 font-medium text-lg ";
                  
                  if (!showResult) {
                    buttonClass += "border-gray-100 bg-gray-50/50 hover:border-gray-300 text-gray-700 hover:bg-gray-50";
                  } else {
                    if (idx === quizQuestions[currentQ].correct) {
                      buttonClass += "border-green-500 bg-green-50 text-green-800";
                    } else if (idx === selectedOpt) {
                      buttonClass += "border-red-500 bg-red-50 text-red-800";
                    } else {
                      buttonClass += "border-gray-100 bg-gray-50/50 text-gray-400 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={showResult}
                      className={buttonClass}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {showResult && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50 p-6 rounded-2xl"
                  >
                    <p className="text-gray-600 font-light flex-1">
                      {selectedOpt === quizQuestions[currentQ].correct 
                        ? <span className="text-green-600 font-medium">Esatto! </span> 
                        : <span className="text-red-500 font-medium">Non proprio. </span>
                      }
                      {quizQuestions[currentQ].explanation}
                    </p>
                    <button 
                      onClick={nextQuestion}
                      className="whitespace-nowrap px-6 py-3 bg-google-blue text-white rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 justify-center"
                    >
                      Avanti <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center flex-grow text-center h-full"
            >
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-semibold mb-4">Quiz Completato!</h3>
              <p className="text-xl text-gray-600 font-light mb-10">Hai risposto correttamente a {score} domande su {quizQuestions.length}.</p>
              
              <div className="flex gap-4">
                <button 
                  onClick={reset}
                  className="px-8 py-4 bg-gray-100 text-gray-800 rounded-2xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Riprova
                </button>
                <button 
                  onClick={goToNextSlide}
                  className="px-8 py-4 bg-apple-text text-white rounded-2xl font-medium hover:bg-black transition-colors"
                >
                  Concludi Presentazione
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ConclusionSlide() {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-semibold tracking-tight"
      >
        Fine.
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl"
      >
        Il ciclo di vita del software è la base di ogni prodotto digitale di successo. Costruisci con criterio.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="pt-8 flex flex-col items-center"
      >
        <div className="w-16 h-[1px] bg-gray-300 mb-6"></div>
        <p className="text-lg text-gray-400 font-medium tracking-widest uppercase">Edoardo Biestro</p>
      </motion.div>
    </div>
  );
}

// --- Main App ---

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = 6;

  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    const slides = containerRef.current.children;
    if (slides[index]) {
      slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  // Update current slide index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollX = containerRef.current.scrollLeft;
      const width = containerRef.current.clientWidth;
      const index = Math.round(scrollX / width);
      
      setCurrentSlideIndex(index);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleNextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      scrollToSlide(currentSlideIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      scrollToSlide(currentSlideIndex - 1);
    }
  };


  return (
    <div className="relative w-screen h-screen bg-apple-bg overflow-hidden font-sans">
      
      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="flex w-full h-full overflow-x-scroll no-scrollbar snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        <Slide><IntroSlide /></Slide>
        <Slide><DefinitionSlide /></Slide>
        <Slide><PhasesSlide /></Slide>
        <Slide><MethodologiesSlide /></Slide>
        <Slide><QuizSlide goToNextSlide={handleNextSlide} /></Slide>
        <Slide><ConclusionSlide /></Slide>
      </div>

      {/* Navigation Controls Overlay */}
      <div className="absolute bottom-8 left-0 right-0 px-8 flex items-center justify-between pointer-events-none">
        
        {/* Progress Indicator */}
        <div className="flex gap-2 pointer-events-auto">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlideIndex === i ? 'w-8 bg-apple-text' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Next/Prev Buttons */}
        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={handlePrevSlide}
            disabled={currentSlideIndex === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
              currentSlideIndex === 0 
                ? 'bg-white/50 text-gray-300 cursor-not-allowed' 
                : 'bg-white/80 text-apple-text shadow-sm hover:bg-white hover:shadow-md'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
              currentSlideIndex === totalSlides - 1 
                ? 'bg-google-blue/50 text-white/50 cursor-not-allowed' 
                 : 'bg-google-blue text-white shadow-sm hover:bg-blue-600 hover:shadow-md'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
      </div>
    </div>
  );
}
