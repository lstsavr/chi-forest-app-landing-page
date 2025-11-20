import React from 'react';
import { Download, Apple, Smartphone, Bot } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-green rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-64 h-64 rounded-full bg-brand-darkGreen/30 blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-10 md:p-16 relative z-10">
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Refresh?</h2>
              <p className="text-green-50 mb-8 text-lg">
                Download the Chi Forest app today. Find machines, get AI tips, and join the community at XJTLU.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors shadow-lg">
                  <Apple size={24} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none">Download on the</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </button>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-lg">
                  <Smartphone size={24} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none">Get it on</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="relative h-64 md:h-auto flex justify-center items-center">
               {/* Abstract App Icon Presentation */}
               <div className="w-40 h-40 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-500">
                  <span className="text-4xl font-bold text-brand-green">chi</span>
               </div>
               <div className="absolute -right-4 top-10 w-20 h-20 bg-brand-purple rounded-2xl shadow-xl flex items-center justify-center transform -rotate-12 animate-float">
                   <Bot className="text-white w-10 h-10" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;