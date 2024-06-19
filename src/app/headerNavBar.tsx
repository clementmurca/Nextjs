import React from 'react'
import Link from 'next/link'

export default function headerNavBar() {
  return (
    <>
        <div className="flex min-h-screen flex-col items-center justify-between p-12 bg-customBlue">
            <nav className="px-4 lg:px-6 py-2.5 bg-slate-600/20 rounded-xl border-solid border-2 border-customBorder">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-customColorP rounded bg-primary-700" aria-current="page">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-customColorP rounded bg-primary-700" aria-current="page">
                                    Se connecter
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-customColorP rounded bg-primary-700" aria-current="page">
                                    S'inscrire
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-customColorP rounded bg-primary-700" aria-current="page">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    </>
  )
}