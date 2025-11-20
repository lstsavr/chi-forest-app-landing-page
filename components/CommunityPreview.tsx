import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const CommunityPreview: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="inline-block py-1.5 px-4 rounded-full bg-green-100 text-brand-green text-sm font-bold mb-6">
              Community Driven
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Connect with <span className="text-brand-green">Genki Lovers</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Don't drink alone! Share your thoughts on new flavors on the Genki Community. 
              See what other students at Xi'an Jiaotong-Liverpool University are drinking and recommend.
            </p>
            <a href="#" className="inline-flex items-center text-brand-green font-bold text-lg hover:text-brand-darkGreen transition-colors group">
              Explore Community <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>

          {/* Right Side: Floating Cards */}
          <div className="lg:w-1/2 w-full flex flex-col gap-6 relative mt-10 lg:mt-0">
             {/* Decorative background blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-green-50 to-purple-50 rounded-full blur-3xl -z-10 opacity-60"></div>

             {/* Card 1 - Emily */}
             <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transform lg:translate-x-12 hover:-translate-y-1 transition-transform duration-300 relative z-10">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-4">
                      <img 
                        src="https://api.dicebear.com/9.x/avataaars/svg?seed=Emily&backgroundColor=ffdfbf" 
                        alt="Emily Davis" 
                        className="w-12 h-12 rounded-full bg-gray-50"
                      />
                      <div>
                         <h4 className="font-bold text-gray-900 text-lg">Emily Davis</h4>
                      </div>
                   </div>
                   <div className="flex gap-1 text-yellow-400">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="stroke-none" />)}
                   </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed text-base">
                  "I tried Genki Forest's new Cucumber Sparkling Water today, and it's so refreshing! Zero sugar, zero fat, zero calories."
                </p>
             </div>

             {/* Card 2 - Jason */}
             <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transform lg:-translate-x-4 hover:-translate-y-1 transition-transform duration-300 relative z-10">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-4">
                      <img 
                        src="https://api.dicebear.com/9.x/avataaars/svg?seed=Jason&backgroundColor=b6e3f4" 
                        alt="Jason Smith" 
                        className="w-12 h-12 rounded-full bg-gray-50"
                      />
                      <div>
                         <h4 className="font-bold text-gray-900 text-lg">Jason Smith</h4>
                      </div>
                   </div>
                   <div className="flex gap-1 text-yellow-400">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="stroke-none" />)}
                   </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed text-base">
                  "Genki Forest's milk tea is a blessing for milk tea lovers! Low calories, no guilt when drinking."
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPreview;