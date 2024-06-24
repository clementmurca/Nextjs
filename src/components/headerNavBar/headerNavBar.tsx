'use client'
import React from 'react';
import Link from 'next/link';

const HeaderNavBar: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-between mb-12 mx-auto max-w-xl">
      <nav className="lg:px-6 py-2.5 bg-blue-200/40 rounded-xl border-solid border-2 border-customBorder">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link href="/Pages/Accueil" className="block py-2 pr-4 pl-3 text-customColorP rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/Pages/Login" className="block py-2 pr-4 pl-3 text-customColorP rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                Se connecter
              </Link>
            </li>
            <li>
              <Link href="/Pages/Register" className="block py-2 pr-4 pl-3 text-customColorP rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                S'inscrire
              </Link>
            </li>
            <li>
              <Link href="/Pages/Dashboard" className="block py-2 pr-4 pl-3 text-customColorP rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  </div>
  );
};

export default HeaderNavBar;

