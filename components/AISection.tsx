import React from 'react';
import { Bot, Send } from 'lucide-react';

const AISection: React.FC = () => {
  return (
    <section id="ai" className="py-24 bg-brand-purple/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
         <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-purple/10 blur-[100px]"></div>
         <div className="absolute top-[40%] right-[0%] w-[40%] h-[40%] rounded-full bg-brand-green/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-purple/20 bg-white text-brand-purple text-sm font-medium mb-6">
              <Bot size={16} className="mr-2" />
              Genki AI Assistant
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Personal <br/>
              <span className="text-brand-purple">Hydration Consultant</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              "I want something refreshing." "Do you have any low-sugar drinks?" 
              Just ask. Our AI analyzes the inventory and your preferences to suggest the perfect drink or snack.
            </p>
            
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
                    <div className="bg-gray-100 p-2 rounded-full">
                        <span className="text-xl">🤔</span>
                    </div>
                    <div>
                        <p className="font-medium text-gray-900 text-sm">User Question</p>
                        <p className="text-gray-600 text-sm">"I want milk tea but I'm worried about gaining weight."</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-brand-purple flex gap-4 items-start">
                    <div className="bg-brand-purple/10 p-2 rounded-full">
                         <Bot size={20} className="text-brand-purple" />
                    </div>
                    <div>
                        <p className="font-medium text-gray-900 text-sm">Genki AI</p>
                        <p className="text-gray-600 text-sm">Try Genki Forest's milk tea! It's low calorie, so no guilt when drinking, and the taste is silky and rich.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* AI Chat Interface Mockup */}
          <div className="lg:w-1/2 w-full max-w-md mx-auto">
             <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Chat Header */}
                <div className="bg-white p-4 border-b flex items-center gap-3">
                    <div className="bg-brand-purple p-2 rounded-lg">
                        <Bot className="text-white" size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">Genki AI Assistant</h3>
                        <p className="text-xs text-gray-400">Personalized drink & snack recommendations</p>
                    </div>
                </div>
                
                {/* Chat Body */}
                <div className="p-4 bg-gray-50 h-80 overflow-y-auto space-y-3">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-sm text-gray-600">
                        Hello! I'm Genki Forest's AI assistant, happy to help you.
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                        {['I want something refreshing', 'Low-sugar drinks?', 'Nearby stores?'].map((q, i) => (
                            <span key={i} className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-2 rounded-full cursor-pointer hover:border-brand-purple hover:text-brand-purple transition-colors">
                                {q}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Chat Input */}
                <div className="p-3 border-t bg-white">
                    <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Ask me anything...</span>
                        <div className="bg-gray-300 p-1.5 rounded-full">
                             <Send size={14} className="text-white" />
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AISection;