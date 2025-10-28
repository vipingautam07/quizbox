import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-rose-400 border-b-4 border-black shadow-[0_4px_0_0_#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 sm:gap-3 group">
          <span className="px-2 sm:px-3 py-1 bg-white text-black border-3 sm:border-4 border-black font-black text-base sm:text-lg shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] transition-all group-hover:shadow-[5px_5px_0_0_#000] sm:group-hover:shadow-[6px_6px_0_0_#000] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]">
            QB
          </span>
          <span className="text-black text-lg sm:text-xl font-black tracking-tight hidden xs:inline">
            Quiz Box
          </span>
        </a>
        
        <nav className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/vipingautam07"
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-white border-3 sm:border-4 border-black shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] transition-all hover:shadow-[5px_5px_0_0_#000] sm:hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_0_#000]"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.393 7.864 10.914.575.106.786-.25.786-.556 0-.275-.01-1.005-.015-1.975-3.198.695-3.873-1.543-3.873-1.543-.523-1.33-1.278-1.685-1.278-1.685-1.044-.713.079-.699.079-.699 1.154.081 1.762 1.185 1.762 1.185 1.027 1.76 2.693 1.252 3.348.957.104-.744.402-1.252.73-1.54-2.553-.29-5.237-1.277-5.237-5.686 0-1.256.45-2.283 1.185-3.089-.119-.29-.513-1.457.113-3.04 0 0 .965-.309 3.162 1.18a10.95 10.95 0 0 1 2.878-.387c.977.005 1.962.132 2.878.387 2.196-1.489 3.16-1.18 3.16-1.18.627 1.583.233 2.75.114 3.04.738.806 1.185 1.833 1.185 3.089 0 4.42-2.69 5.392-5.253 5.675.414.354.783 1.05.783 2.116 0 1.527-.014 2.761-.014 3.137 0 .308.208.667.792.554C20.213 21.39 23.5 17.083 23.5 12 23.5 5.648 18.352.5 12 .5Z" clipRule="evenodd"/>
            </svg>
          </a>
          
          <a
            href="https://twitter.com/vipingautam07_"
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-white border-3 sm:border-4 border-black shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] transition-all hover:shadow-[5px_5px_0_0_#000] sm:hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_0_#000]"
            aria-label="Twitter"
            title="Twitter"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.49 11.24H16.59l-5.3-6.932-6.064 6.932H1.906l7.73-8.838L1.5 2.25h6.91l4.79 6.376 5.044-6.376Zm-1.158 18.497h1.833L7.01 3.622H5.06l12.026 17.125Z"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}