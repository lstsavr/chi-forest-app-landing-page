import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tight text-brand-green">
              chi<span className="text-black">forest</span>
            </span>
            <p className="mt-4 text-gray-500 text-sm">
              Digital Startup Lab Project<br/>
              ENT207TC Group Project
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-green">Features</a></li>
              <li><a href="#" className="hover:text-brand-green">Locations</a></li>
              <li><a href="#" className="hover:text-brand-green">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-green">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-green">Report Issue</a></li>
              <li><a href="#" className="hover:text-brand-green">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <p className="text-sm text-gray-600">
              XJTLU Entrepreneur College (Taicang)<br/>
              Suzhou, China
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Chi Forest App Project. All rights reserved. Created for ENT207TC.
        </div>
      </div>
    </footer>
  );
};

export default Footer;