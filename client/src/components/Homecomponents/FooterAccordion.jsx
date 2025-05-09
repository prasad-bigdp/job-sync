import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterAccordion = ({ title, links }) => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="w-full">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left text-white font-medium py-2 flex justify-between items-center border-b border-gray-600"
        >
          {title}
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {open && (
          <ul className="text-gray-400 text-sm py-2 space-y-1">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link href="#" className="hover:text-white   text-decoration-none  transition-colors duration-200">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  export default FooterAccordion