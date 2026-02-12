// SingleCard.jsx
import { CardBack, Sword, Shield, Potion, Scroll, Ring, Gem, Axe, Bow, Staff, Chest, Coin } from "./Icons";

const IconMap = {
  "sword": Sword,
  "shield": Shield,
  "potion": Potion,
  "scroll": Scroll,
  "ring": Ring,
  "gem": Gem,
  "axe": Axe,
  "bow": Bow,
  "staff": Staff,
  "chest": Chest,
  "coin": Coin
};

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled && !flipped) {
      handleChoice(card);
    }
  };

  const CardIcon = IconMap[card.type];

  // We rely on the global body class or context, but since this is a simple component, 
  // we'll use CSS 'dark:' or simply rely on the fact that card styles are mostly theme-agnostic 
  // EXCEPT for the card back. Let's make the card back adaptive via the wrapper.

  // Actually, let's keep the card back mysterious (dark) even in light mode for contrast,
  // OR adapt it. Let's adapt it slightly.

  return (
    <div className={`relative group perspective-1000 w-full aspect-square select-none -webkit-tap-highlight-transparent transition-opacity duration-1000 ${card.matched ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <div
        className={`relative w-full h-full duration-500 transform-style-3d shadow-xl rounded-xl transition-all 
        ${flipped || disabled ? "cursor-default" : "cursor-pointer group-hover:scale-[1.03] active:scale-95"} 
        ${flipped ? "rotate-y-180" : ""}`}
        onClick={handleClick}
      >
        {/* Back of Card (Cover) */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg bg-slate-900 border border-white/10 dark:border-white/10">
          <CardBack />
        </div>

        {/* Front of Card (Icon) */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden border-2 
          ${card.matched
            ? "border-cyan-400 bg-cyan-900/30 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            : "border-indigo-500/50 bg-slate-800 dark:bg-slate-800 bg-white dark:border-indigo-500/50 border-slate-200 shadow-inner"} 
          flex flex-col items-center justify-center p-4 transition-all duration-500`}>

          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none"></div>

          <div className="w-full h-2/3 flex items-center justify-center drop-shadow-lg">
            {CardIcon ? <CardIcon /> : null}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SingleCard;
