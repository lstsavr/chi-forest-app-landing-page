import React from 'react';
import { MapPin, Navigation, ShoppingBag, ChevronRight, ChevronUp, Home, MessageSquare, Bot, User } from 'lucide-react';

const Showcase: React.FC = () => {
  return (
    <section id="map" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Feature 1: Map & Navigation */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="lg:w-1/2 order-2 lg:order-1 relative">
                {/* Phone Mockup Container */}
                 <div className="relative mx-auto border-gray-900 bg-gray-900 border-[12px] rounded-[2.5rem] h-[640px] w-[320px] shadow-2xl flex flex-col overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    {/* Screen Content */}
                    <div className="bg-gray-50 h-full w-full flex flex-col font-sans relative">
                        
                        {/* Status Bar Placeholder */}
                        <div className="h-8 w-full bg-white shrink-0"></div>

                        {/* App Header */}
                        <div className="px-5 pt-2 pb-4 bg-white sticky top-0 z-10 shrink-0">
                            <h2 className="text-xl font-bold text-gray-900 leading-tight">Nearby Genki Forest Vending Machines</h2>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20 no-scrollbar">
                            
                            {/* Expanded Main Card */}
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-gray-900 text-sm leading-tight w-3/4">Xi'an Jiaotong-Liverpool University Building A</h3>
                                    <span className="bg-green-100 text-green-600 text-[10px] font-medium px-2 py-1 rounded-md whitespace-nowrap">Online</span>
                                </div>
                                <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">Lobby, Building A, Taicang Campus, Xi'an Jiaotong-Liverpool University</p>
                                
                                <div className="flex justify-between text-xs text-gray-400 mb-4">
                                    <span>Distance: 0.1km</span>
                                    <span>Products: 10</span>
                                </div>
                                
                                <div className="flex gap-2 mb-3">
                                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm">
                                        <Navigation size={12} className="fill-white stroke-white" /> Navigate Here
                                    </button>
                                    <button className="flex-1 bg-brand-green hover:bg-brand-darkGreen text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm">
                                        <ShoppingBag size={12} /> View Products
                                    </button>
                                </div>
                                
                                <div className="flex justify-center pt-1 border-t border-gray-50">
                                    <span className="text-[10px] text-gray-400 flex items-center gap-1 cursor-pointer hover:text-gray-600">
                                        <ChevronUp size={12} /> Collapse Details
                                    </span>
                                </div>
                            </div>

                            {/* List Items */}
                            {[
                              { name: "Xi'an Jiaotong-Liverpool University Building A", dist: "0.1km", prods: 10 },
                              { name: "Xi'an Jiaotong-Liverpool University Building B", dist: "0.2km", prods: 10 },
                              { name: "Xi'an Jiaotong-Liverpool University Building C", dist: "Online", prods: null },
                            ].map((item, i) => (
                              <div key={i} className="bg-brand-light/30 p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:bg-white transition-colors">
                                  <div className="w-3/4">
                                      <h3 className="font-bold text-gray-900 text-sm mb-1 truncate">{item.name}</h3>
                                       <div className="flex items-center text-[11px] text-gray-400 gap-2">
                                          <span>{item.dist}</span>
                                          {item.prods && (
                                            <>
                                              <span>•</span>
                                              <span>{item.prods} products</span>
                                            </>
                                          )}
                                       </div>
                                  </div>
                                  <div className="flex items-center gap-2 shrink-0">
                                      <span className="bg-green-100 text-green-600 text-[10px] font-medium px-2 py-1 rounded-md">Online</span>
                                      <ChevronRight size={16} className="text-gray-300" />
                                  </div>
                              </div>
                            ))}
                        </div>

                        {/* Bottom Navigation Bar */}
                        <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 h-16 flex justify-around items-center px-2 pb-1 z-20">
                            <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-brand-green">
                                <Home size={20} />
                                <span className="text-[10px] font-medium">Home</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 text-brand-green cursor-pointer">
                                <div className="bg-green-50 p-1.5 rounded-full -mt-1">
                                   <MapPin size={20} className="fill-brand-green text-brand-green" />
                                </div>
                                <span className="text-[10px] font-bold">Map</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-brand-green">
                                <MessageSquare size={20} />
                                <span className="text-[10px] font-medium">Community</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-brand-green">
                                <Bot size={20} />
                                <span className="text-[10px] font-medium">AI Assistant</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-brand-green">
                                <User size={20} />
                                <span className="text-[10px] font-medium">Profile</span>
                            </div>
                        </div>
                        
                    </div>
                 </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Genki Anywhere</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Running between classes? Our real-time map locates the nearest machine in Building A, B, or C. 
                    Check stock levels before you walk, so you never leave empty-handed.
                </p>
                <ul className="space-y-4">
                    {[
                        'Real-time "Online" status for every machine',
                        'One-tap navigation to the exact location',
                        'View product availability remotely'
                    ].map((item, i) => (
                        <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                <MapPin size={14} className="text-brand-green" />
                            </div>
                            <p className="ml-4 text-gray-600">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Showcase;