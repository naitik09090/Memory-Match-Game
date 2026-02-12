import { useState, useEffect } from "react";
import SingleCard from "./components/SingleCard";
import {
  Sword, Shield, Potion, Scroll, Ring, Gem, Axe, Bow, Staff, Chest, Coin,
  Eye, Lightning, Hourglass
} from "./components/Icons";

// Settings & Control Icons
const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
  </svg>
)

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
  </svg>
)

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
)

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const ITEM_TYPES = [
  "sword", "shield", "potion", "scroll", "ring", "gem",
  "axe", "bow", "staff", "chest", "coin"
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Game State
  const [level, setLevel] = useState(1);
  const [energy, setEnergy] = useState(0);
  const [maxEnergy, setMaxEnergy] = useState(100);
  const [timer, setTimer] = useState(60);
  const [gameState, setGameState] = useState("menu"); // menu, playing, paused, won, lost, levelup
  const [shake, setShake] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Settings State
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Difficulty Config
  const getLevelConfig = (lvl) => {
    const pairs = Math.min(12, 4 + (lvl * 2));
    const time = 30 + (lvl * 15);
    return { pairs, time };
  }

  // Effect to handle Dark/Light Mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const startGame = () => {
    setLevel(1);
    startLevel(1);
  }

  const startLevel = (lvl) => {
    const config = getLevelConfig(lvl);
    const selectedItems = [...ITEM_TYPES].sort(() => Math.random() - 0.5).slice(0, config.pairs);

    const shuffledCards = [...selectedItems, ...selectedItems]
      .sort(() => Math.random() - 0.5)
      .map((type) => ({ type, id: Math.random(), matched: false }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setEnergy(50); // Start with some energy
    setTimer(config.time);
    setGameState("playing");
    setShowAll(true);
    setTimeout(() => setShowAll(false), 1500); // Initial peek
  };

  const nextLevel = () => {
    setLevel(prev => prev + 1);
    startLevel(level + 1);
  }

  const togglePause = () => {
    if (gameState === "playing") setGameState("paused");
    else if (gameState === "paused") setGameState("playing");
  }

  // Timer Logic
  useEffect(() => {
    let interval;
    if (gameState === "playing" && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && gameState === "playing") {
      setGameState("lost");
    }
    return () => clearInterval(interval);
  }, [timer, gameState]);

  const handleChoice = (card) => {
    if (gameState !== "playing" || disabled) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }

  // Powerup Functions
  const usePowerup = (type) => {
    if (gameState !== "playing") return;

    if (type === "reveal" && energy >= 50) {
      setEnergy(prev => prev - 50);
      setShowAll(true);
      setTimeout(() => setShowAll(false), 2000);
    }
    else if (type === "time" && energy >= 30) {
      setEnergy(prev => prev - 30);
      setTimer(prev => prev + 15);
    }
    else if (type === "auto" && energy >= 80) {
      const firstUnmatched = cards.find(c => !c.matched);
      if (firstUnmatched) {
        setEnergy(prev => prev - 80);
        setChoiceOne(firstUnmatched);
        const pair = cards.find(c => c.type === firstUnmatched.type && c.id !== firstUnmatched.id);
        setTimeout(() => setChoiceTwo(pair), 500);
      }
    }
  }

  // Compare Logic
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      const match = choiceOne.type === choiceTwo.type;

      const timer = setTimeout(() => {
        if (match) {
          setEnergy(prev => Math.min(maxEnergy, prev + 25));
          setCards(prev => prev.map(card =>
            card.type === choiceOne.type ? { ...card, matched: true } : card
          ));
          resetTurn();
        } else {
          triggerShake();
          resetTurn();
        }
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [choiceOne, choiceTwo]);

  // Win Check
  useEffect(() => {
    if (gameState === "playing" && cards.length > 0 && cards.every((c) => c.matched)) {
      setTimeout(() => setGameState("levelup"), 500);
    }
  }, [cards, gameState]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden transition-colors duration-500 ${isDarkMode ? "bg-[#020617]" : "bg-slate-100 text-slate-900"} ${shake ? "animate-shake" : ""}`}>

      {/* Background Effects */}
      <div className={`absolute inset-0 bg-grid-pattern pointer-events-none ${isDarkMode ? "opacity-20" : "opacity-10"}`}></div>
      {isDarkMode && (
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#020617]/0 to-[#020617] pointer-events-none"></div>
      )}

      {/* Global Controls (Top Right) */}
      <div className="absolute top-6 right-6 z-40 flex gap-3">
        {gameState === "playing" || gameState === "paused" ? (
          <button
            onClick={togglePause}
            className="p-3 rounded-full bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            {gameState === "paused" ? <PlayIcon /> : <PauseIcon />}
          </button>
        ) : null}

        <button
          onClick={() => setSettingsOpen(!settingsOpen)}
          className={`p-3 rounded-full backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95 transition-all shadow-lg ${settingsOpen ? "bg-indigo-500 text-white rotate-90" : "bg-slate-200/50 dark:bg-slate-800/50"}`}
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Settings Panel & Backdrop */}
      {settingsOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
            onClick={() => setSettingsOpen(false)}
          ></div>
          <div className="absolute top-20 right-4 left-4 md:left-auto md:right-6 z-50 w-auto md:w-64 glass-panel p-6 rounded-2xl flex flex-col gap-5 animate-in slide-in-from-top-4 fade-in duration-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Settings</h3>
              <button
                onClick={() => setSettingsOpen(false)}
                className="md:hidden p-1 opacity-60 hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-3 text-sm font-semibold tracking-wide">
                {isDarkMode ? <MoonIcon /> : <SunIcon />}
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-14 h-7 rounded-full p-1 transition-all duration-300 shadow-inner ${isDarkMode ? "bg-indigo-600" : "bg-slate-300"}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${isDarkMode ? "translate-x-7" : "translate-x-0"}`}></div>
              </button>
            </div>

            {/* Additional Setting Placeholder (e.g. Volume) */}
            <div className="flex items-center justify-between opacity-50 cursor-not-allowed">
              <span className="text-sm font-semibold tracking-wide">Sound Effects</span>
              <div className="w-14 h-7 rounded-full bg-slate-300 dark:bg-slate-800 p-1">
                <div className="w-5 h-5 rounded-full bg-white/50"></div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Start Menu */}
      {gameState === "menu" && (
        <div className="z-20 text-center animate-in zoom-in duration-500">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-6 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            ARCANE<br />MEMORY
          </h1>
          <p className={`text-lg mb-8 tracking-wide ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>Master the grid. Control time.</p>
          <button
            onClick={startGame}
            className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-bold text-xl tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.4)] text-white"
          >
            <span className="relative z-10">START QUEST</span>
            <div className="absolute inset-0 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>
          </button>
        </div>
      )}

      {/* HUD */}
      {gameState !== "menu" && (
        <div className={`glass-panel w-full max-w-5xl rounded-2xl p-4 md:p-6 mb-8 sticky top-4 z-30 flex flex-col md:flex-row items-center gap-6 animate-in slide-in-from-top duration-500 ${gameState === "paused" ? "opacity-50 blur-sm pointer-events-none" : ""}`}>
          {/* Level / Time */}
          <div className="flex gap-8 items-center border-r border-white/10 pr-8">
            <StatDisplay label="Level" value={level} color="text-cyan-400" />
            <StatDisplay
              label="Time"
              value={`${timer}s`}
              color={timer < 10 ? "text-rose-500 animate-pulse" : isDarkMode ? "text-white" : "text-slate-800"}
            />
          </div>

          {/* Energy */}
          <div className="flex-1 w-full relative group">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-indigo-400">
              <span>Arcane Energy</span>
              <span>{Math.round(energy)}%</span>
            </div>
            <div className={`h-3 w-full rounded-full overflow-hidden shadow-inner border ${isDarkMode ? "bg-slate-950 border-white/5" : "bg-slate-200 border-slate-300"}`}>
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-300 relative"
                style={{ width: `${(energy / maxEnergy) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-[pulse_2s_infinite]"></div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="flex gap-3 pl-4 md:border-l border-white/10">
            <SkillButton icon={<Eye />} cost={50} energy={energy} action={() => usePowerup('reveal')} shortcut="1" isDarkMode={isDarkMode} />
            <SkillButton icon={<Hourglass />} cost={30} energy={energy} action={() => usePowerup('time')} shortcut="2" isDarkMode={isDarkMode} />
            <SkillButton icon={<Lightning />} cost={80} energy={energy} action={() => usePowerup('auto')} shortcut="3" isDarkMode={isDarkMode} />
          </div>
        </div>
      )}

      {/* Game Grid */}
      {gameState === "playing" && (
        <div className="flex-1 flex items-center justify-center w-full max-w-6xl z-10">
          <div className={`grid gap-3 w-full transition-all duration-500
                     ${level === 1 ? "grid-cols-4 max-w-[400px]" : ""}
                     ${level === 2 ? "grid-cols-4 md:grid-cols-5 max-w-[600px]" : ""}
                     ${level >= 3 ? "grid-cols-4 md:grid-cols-6 max-w-[800px]" : ""}
                `}>
            {cards.map((card) => (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={showAll || card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled || showAll}
              />
            ))}
          </div>
        </div>
      )}

      {/* Pause Overlay */}
      {gameState === "paused" && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200">
          <div className="text-center">
            <h2 className="text-6xl font-black text-white mb-4 tracking-widest uppercase drop-shadow-lg">Paused</h2>
            <button onClick={togglePause} className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-transform">RESUME</button>
          </div>
        </div>
      )}

      {/* Modals */}
      {(gameState === "levelup" || gameState === "lost") && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md animate-in fade-in zoom-in duration-300 ${isDarkMode ? "bg-slate-950/80" : "bg-slate-200/80"}`}>
          <div className={`glass-panel p-10 rounded-3xl text-center max-w-sm mx-6 relative overflow-hidden shadow-2xl ${!isDarkMode && "bg-white/80 border-slate-300"}`}>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>

            <h2 className={`text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? "from-white to-slate-400" : "from-slate-900 to-slate-600"}`}>
              {gameState === "levelup" ? "STAGE CLEAR" : "GAME OVER"}
            </h2>

            {gameState === "levelup" ? (
              <div className="space-y-6">
                <p className="text-cyan-500 uppercase tracking-widest text-sm font-bold">Energy Full Restored</p>
                <button onClick={nextLevel} className={`w-full py-4 font-bold rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-widest ${isDarkMode ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950" : "bg-cyan-600 hover:bg-cyan-500 text-white"}`}>
                  Next Level
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-slate-500">The arcane power faded...</p>
                <button onClick={startGame} className={`w-full py-4 font-bold rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-widest ${isDarkMode ? "bg-white hover:bg-slate-200 text-slate-950 text-black" : "bg-slate-900 hover:bg-slate-800 text-white"}`}>
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
            .animate-shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
        `}</style>
    </div>
  );
}

const StatDisplay = ({ label, value, color }) => (
  <div className="text-center">
    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">{label}</p>
    <p className={`text-3xl font-black leading-none ${color}`}>{value}</p>
  </div>
)

const SkillButton = ({ icon, cost, energy, action, isDarkMode }) => {
  const active = energy >= cost;
  return (
    <button
      onClick={action}
      disabled={!active}
      className={`
                w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center border transition-all duration-300 relative group
                ${active
          ? "bg-indigo-500/10 border-indigo-400 text-cyan-400 hover:bg-indigo-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
          : `${isDarkMode ? "bg-slate-900 border-slate-700 text-slate-600" : "bg-slate-200 border-slate-300 text-slate-400"} cursor-not-allowed opacity-50 grayscale`}
            `}
    >
      <div className="w-5 h-5 md:w-6 md:h-6">{icon}</div>
      <div className={`absolute -bottom-2 px-1.5 py-0.5 border rounded text-[9px] font-bold group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-colors ${isDarkMode ? "bg-slate-900 border-slate-700 text-slate-400" : "bg-white border-slate-300 text-slate-500"}`}>
        {cost}
      </div>
    </button>
  )
}

export default App;
