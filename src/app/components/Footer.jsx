import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-12">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-gray-800">
            <a href="#" className="hover:text-gray-600">
              Sana :3
            </a>
          </div>
          <ul className="flex justify-end">
            <li className="mr-4">
              <a href="/about" className="text-gray-600 hover:text-gray-900">
                About me again
              </a>
            </li>
            
          </ul>
        </div>
        <div className="text-sm text-gray-600 mt-4">
          &copy; {new Date().getFullYear()} 
        </div>
      </div>
    </footer>
  );
};

export default Footer;