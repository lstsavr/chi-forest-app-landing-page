import React from 'react';
import { MapPin, Bot, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-brand-light to-white">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-purple/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-green/20 bg-brand-green/5 text-brand-darkGreen text-sm font-medium mb-6 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-brand-green mr-2"></span>
              Available at XJTLU Taicang
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Discover Genki, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-darkGreen">
                Energize Every Day
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Find the nearest Chi Forest vending machine, get personalized AI drink recommendations, and join the flavor community. Hydration has never been this smart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="#download" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-brand-green hover:bg-brand-darkGreen shadow-lg shadow-brand-green/30 transition-all duration-300 hover:-translate-y-1">
                Get the App
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                Learn More
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-gray-400 text-sm font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-brand-green" />
                <span>Smart Map</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot size={18} className="text-brand-purple" />
                <span>AI Powered</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Phone Mockup */}
          <div className="lg:w-1/2 relative animate-float">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                    {/* Recreating the 'Home' Screen UI broadly */}
                    <div className="p-6">
                       <h2 className="text-2xl font-bold text-brand-green mb-1">chi-forest</h2>
                       <p className="text-xs text-gray-500 mb-6">Discover Genki, Energize Every Day</p>
                       
                       <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="bg-brand-green h-32 rounded-2xl flex flex-col items-center justify-center text-white p-4 text-center shadow-lg">
                             <MapPin size={32} className="mb-2" />
                             <span className="font-bold text-sm">Nearby Machines</span>
                          </div>
                          <div className="bg-brand-purple h-32 rounded-2xl flex flex-col items-center justify-center text-white p-4 text-center shadow-lg">
                             <Bot size={32} className="mb-2" />
                             <span className="font-bold text-sm">AI Recommendations</span>
                          </div>
                       </div>

                       <h3 className="font-bold text-lg mb-4">Nearby Vending Machines</h3>
                       
                       <div className="space-y-4">
                          {[1, 2].map((i) => (
                            <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-xl p-4">
                               <div className="flex justify-between items-start">
                                  <div>
                                     <h4 className="font-semibold text-sm">XJTLU Building {i === 1 ? 'A' : 'B'}</h4>
                                     <p className="text-xs text-gray-400 mt-1">0.{i}km • {50 - i * 5} products</p>
                                  </div>
                                  <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full">Online</span>
                               </div>
                            </div>
                          ))}
                       </div>

                       <h3 className="font-bold text-lg mt-6 mb-4">Popular Products</h3>
                       <div className="flex gap-3 overflow-hidden">
                          {[1,2,3].map((i) => (
                             <div key={i} className="min-w-[80px] bg-gray-50 rounded-lg p-2 text-center">
                                <div className="h-16 bg-gray-200 rounded mb-2 w-full animate-pulse"></div>
                                <div className="h-2 bg-gray-200 rounded w-2/3 mx-auto"></div>
                             </div>
                          ))}
                       </div>
                    </div>
                    
                    {/* Bottom Nav Mock */}
                    <div className="absolute bottom-0 w-full h-16 bg-white border-t flex justify-around items-center text-gray-400">
                       <div className="text-brand-green flex flex-col items-center"><div className="w-5 h-5 bg-brand-green rounded-full mb-1"></div><span className="text-[10px]">Home</span></div>
                       <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                       <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                       <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                       <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </div>
            
            {/* Floating elements behind phone */}
            <div className="absolute top-1/3 -right-12 bg-white p-4 rounded-xl shadow-xl z-20 hidden lg:block animate-[float_5s_ease-in-out_infinite] delay-75">
                <div className="flex items-center gap-3">
                    <div className="bg-brand-light p-2 rounded-full text-brand-green">
                        <Bot size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">AI Suggestion</p>
                        <p className="font-bold text-sm text-gray-800">Try Cucumber Sparkling!</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;