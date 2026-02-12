import React from 'react';

const IconWrapper = ({ children, color = "text-white", glowColor = "shadow-indigo-500/50" }) => (
    <div className={`w-3/4 h-3/4 flex items-center justify-center drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] ${color}`}>
        <svg
            viewBox="0 0 512 512"
            className="w-full h-full fill-current filter drop-shadow-lg"
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </svg>
    </div>
);

export const Sword = () => (
    <IconWrapper color="text-cyan-400">
        <path d="M256 32C256 32 256 64 256 96V384H224V416H208V448H224V480H288V448H304V416H288V384H256C256 384 256 32 256 32ZM256 32L288 96V384H224V96L256 32Z" />
        <path d="M240 112L256 48L272 112V368H240V112Z" fillOpacity="0.5" />
        <path d="M192 384H320V400H272V416H240V400H192V384Z" />
    </IconWrapper>
);

export const Eye = () => (
    <IconWrapper color="text-violet-400">
        <path d="M256 128c-80 0-152 40-192 104 40 64 112 104 192 104s152-40 192-104c-40-64-112-104-192-104zm0 168c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" fill="currentColor" />
        <circle cx="256" cy="232" r="24" fill="#fff" />
    </IconWrapper>
);

export const Lightning = () => (
    <IconWrapper color="text-yellow-400">
        <path d="M256 32L128 256h96l-32 224L400 224H288z" fill="currentColor" />
    </IconWrapper>
);

export const Hourglass = () => (
    <IconWrapper color="text-teal-400">
        <path d="M160 32v64l64 64-64 64v64h192v-64l-64-64 64-64V32H160zm32 32h128v24l-64 64-64-64V64zm0 192v-24l64-64 64 64v24H192z" fill="currentColor" />
    </IconWrapper>
);

export const Axe = () => (
    <IconWrapper color="text-red-600">
        <path d="M100 20 L200 120 L160 160 L240 240 L280 200 L320 240 L400 320 L350 370 L270 290 L230 330 L150 250 L190 210 L90 110 Z" fill="currentColor" />
        <rect x="230" y="230" width="40" height="200" transform="rotate(45 250 250)" className="fill-amber-700" />
    </IconWrapper>
);

export const Bow = () => (
    <IconWrapper color="text-lime-400">
        <path d="M100 50 C 400 50, 400 450, 100 450" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
        <path d="M100 50 L100 450" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
    </IconWrapper>
);

export const Staff = () => (
    <IconWrapper color="text-fuchsia-400">
        <rect x="240" y="100" width="32" height="350" rx="5" className="fill-amber-200" />
        <circle cx="256" cy="80" r="40" className="fill-fuchsia-500 animate-pulse" />
        <path d="M256 80 L200 30 L312 30 Z" fill="currentColor" opacity="0.8" />
    </IconWrapper>
);

export const Coin = () => (
    <IconWrapper color="text-yellow-300">
        <circle cx="256" cy="256" r="120" fill="currentColor" />
        <circle cx="256" cy="256" r="90" fill="none" stroke="#B45309" strokeWidth="10" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="100" fill="#B45309" fontWeight="bold">$</text>
    </IconWrapper>
);

export const Chest = () => (
    <IconWrapper color="text-amber-500">
        <rect x="64" y="160" width="384" height="256" rx="20" fill="currentColor" />
        <path d="M64 220 H448" stroke="#78350F" strokeWidth="20" />
        <rect x="226" y="200" width="60" height="80" rx="5" fill="#FCD34D" />
        <path d="M64 160 Q 256 80, 448 160" fill="currentColor" opacity="0.8" />
    </IconWrapper>
);

export const Shield = () => (
    <IconWrapper color="text-emerald-400">
        <path d="M256 32L64 80V224C64 336.8 146.4 440.6 256 480C365.6 440.6 448 336.8 448 224V80L256 32ZM256 65.5L416 105.5V224C416 317.9 348.6 405.3 256 443.2C163.4 405.3 96 317.9 96 224V105.5L256 65.5Z" />
        <path d="M256 96V416C176 384 128 312 128 224V128L256 96Z" fillOpacity="0.3" />
    </IconWrapper>
);

export const Potion = () => (
    <IconWrapper color="text-purple-400">
        <path d="M224 32H288V80H352C369.7 80 384 94.3 384 112V144C384 161.7 369.7 176 352 176H336V448C336 465.7 321.7 480 304 480H208C190.3 480 176 465.7 176 448V176H160C142.3 176 128 161.7 128 144V112C128 94.3 142.3 80 160 80H224V32ZM160 112V144H208V448H304V144H352V112H160Z" />
        <path d="M256 208C220.6 208 192 236.6 192 272S220.6 336 256 336 320 307.4 320 272 291.4 208 256 208ZM256 256C264.8 256 272 263.2 272 272 272 280.8 264.8 288 256 288 247.2 288 240 280.8 240 272 240 263.2 247.2 256 256 256Z" fillOpacity="0.5" />
    </IconWrapper>
);

export const Scroll = () => (
    <IconWrapper color="text-amber-200">
        <path d="M96 64C78.3 64 64 78.3 64 96V416C64 433.7 78.3 448 96 448H416C433.7 448 448 433.7 448 416V96C448 78.3 433.7 64 416 64H96ZM96 96H416V416H96V96Z" />
        <path d="M128 128H384V160H128V128ZM128 192H384V224H128V192ZM128 256H384V288H128V256ZM128 320H320V352H128V320Z" fillOpacity="0.5" />
    </IconWrapper>
);

export const Ring = () => (
    <IconWrapper color="text-yellow-400">
        <path d="M256 48C185.3 48 128 105.3 128 176C128 179.6 128.1 183.1 128.4 186.6C82.5 204.9 48 248.8 48 304C48 374.7 105.3 432 176 432C231.2 432 275.1 397.5 293.4 351.6C296.9 351.9 300.4 352 304 352C374.7 352 432 294.7 432 224S374.7 96 304 96H256V48ZM256 80V128C256 128 256 128 256 128C291.3 128 320 156.7 320 192C320 227.3 291.3 256 256 256C220.7 256 192 227.3 192 192C192 156.7 220.7 128 256 128V80H280C341.9 80 392 130.1 392 192C392 253.9 341.9 304 280 304C270.8 304 261.9 302.5 253.4 299.8C255.1 292 256 284.1 256 276C256 276 256 276 256 276C256 276 256 276 256 276C256 214.1 205.9 164 144 164C135.9 164 128 164.9 120.2 166.6C117.5 158.1 116 149.2 116 140C116 78.1 166.1 28 228 28H256V48V80Z" fillRule="evenodd" />
        <circle cx="256" cy="192" r="32" className="text-blue-400 fill-current" />
    </IconWrapper>
);

export const Gem = () => (
    <IconWrapper color="text-red-500">
        <path d="M256 48L112 192H400L256 48Z" />
        <path d="M112 224L256 464L400 224H112Z" fillOpacity="0.7" />
        <path d="M256 48L224 192L256 224L288 192L256 48Z" fill="white" fillOpacity="0.3" />
    </IconWrapper>
);

export const Dragon = () => (
    <IconWrapper color="text-orange-500">
        <path d="M106.6 25.5C86 44.9 88.6 86.8 88.6 86.8c13.7-5.9 30.6-2.5 35.5 1.1 0 0-4.6-25-2.2-31.9 2.5-6.9 8.2-11.4 8.2-11.4s11.4 33.3 12.8 45.9c-2.3 8.3-9.5 17.5-17.5 17.5H124c-12 0-20.9 9.3-24.8 14.5-8.2 10.8-4.5 25.9 4.9 36.8 10.9 12.8 30.2 14.7 44.8 19.9 20.3 7.2 26.5 18 20 40.8-6.6 22.8-22.9 32-41.5 50.8-17.7 17.9-20.3 39.5-20.3 54 0 16.6 6.9 29.5 6.9 29.5 29.8-19.1 57.5-34.5 86.2-46 39.7-16 80.5-27.8 119.5-27.8 86 0 148.5 64.6 148.5 64.6s-16.5-68.5-47.5-98.5c-37-35.8-90.8-51.5-144-46-9.8 1-19.3 2.8-28.5 5-21-9.5-40-27.8-40-52 0-17.8 8.8-31 22.2-41.5 1.5-1.2 3.2-2.2 4.8-3.2 26.2-15 57.2-19.5 69.8-20.8 10.5-1 14.2 8.2 14.2 8.2s3.8-11.8-6.2-20.8c-10.2-9.2-30.8-13.8-52.8-13.8-17.5 0-35.2 2.8-52.2 7.8-1.5-5.5-2.5-12.8-1.8-18.8 1.2-11.8 10.8-23.2 13.5-38.2 2.8-15.5-2.5-27.2-2.5-27.2s-24 2-46.8 16.2c0 0 11.8-22.2 3.8-35.5-5.2-8.8-16.2-12.8-24.8-12.8-12.9 0-21.6 8.9-21.6 8.9s8.1-23.9-9.9-40.4c-11.3-10.3-33-8.7-33-8.7z" transform="scale(0.8) translate(50,50)" />
    </IconWrapper>
);

export const Heart = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-rose-500 animate-pulse-slow">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

export const Skull = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-300">
        <path d="M12 2C7 2 3 6 3 11c0 2.2 1.3 4.2 3.2 5.3.4.2.8.5.8 1v2.5c0 .8.7 1.5 1.5 1.5h7c.8 0 1.5-.7 1.5-1.5v-2.5c0-.4.4-.7.8-1C19.7 15.2 21 13.2 21 11c0-5-4-9-9-9zm-3 8c-.8 0-1.5-.7-1.5-1.5S8.2 7 9 7s1.5.7 1.5 1.5S9.8 10 9 10zm6 0c-.8 0-1.5-.7-1.5-1.5S14.2 7 15 7s1.5.7 1.5 1.5S15.8 10 15 10zm-1 8h-4v-1h4v1zm2-2.5c-.7.4-1.2 1-1.4 1.8H6.4c-.2-.8-.7-1.4-1.4-1.8-1.5-.9-2.5-2.5-2.5-4.2C2.5 7.4 6.8 3.5 12 3.5s9.5 3.9 9.5 8.8c0 1.7-1 3.3-2.5 4.2z" />
    </svg>
);

export const CardBack = () => (
    <div className="w-full h-full bg-[#020617] flex items-center justify-center border-2 border-indigo-500/30 relative overflow-hidden group-hover:border-indigo-400 transition-colors">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-[#020617] to-black"></div>

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBMODAgMCIgc3Ryb2tlPSJyZ2JhKDk5LCAxMDIsIDI0MSwgMC4xKSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-30"></div>

        {/* Central Sigil */}
        <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 text-indigo-500 fill-none stroke-current stroke-[1.5] animate-[spin_10s_linear_infinite] opacity-60">
                <circle cx="50" cy="50" r="30" />
                <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" />
                <path d="M50 10 L50 90 M10 50 L90 50" opacity="0.5" />
            </svg>
            <div className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse"></div>
        </div>
    </div>
);
