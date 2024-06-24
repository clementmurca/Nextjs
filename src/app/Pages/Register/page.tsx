'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', { email, password, name });
      router.push('/Pages/Dashboard');
    } catch (error) {
      console.error('L\'inscription a échoué:', error);
    }
  };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 customBg">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://hawaiiwebmarket.fr/wp-content/uploads/2023/05/hwm_logo_couleurs@2x.webp"
                    alt="Votre Entreprise"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Créez votre compte
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit}>
                <fieldset>
                        <label
                            className="py-2"
                            id="emailLabel"
                            htmlFor="name">
                            Nom et prénom
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nom et prénom"
                            required
                            aria-required="true"
                            aria-describedby="emailHelp"
                            aria-labelledby="emailLabel"
                            tabIndex={1}
                            autoComplete="name"
                            name="name"
                            id="name"
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <small id="emailHelp">Exemple : JohnDoe@example.fr</small>
                    </fieldset>
                    <fieldset>
                        <label
                            className="py-2"
                            id="emailLabel"
                            htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                            required
                            aria-required="true"
                            aria-describedby="emailHelp"
                            aria-labelledby="emailLabel"
                            tabIndex={2}
                            autoComplete="username"
                            name="email"
                            id="email"
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <small id="emailHelp">Exemple : JohnDoe@example.fr</small>
                    </fieldset>

                    <fieldset className="mt-4">
                        <label
                            className="py-2"
                            id="passwordLabel"
                            htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            required
                            aria-required="true"
                            aria-describedby="passwordHelp"
                            aria-labelledby="passwordLabel"
                            tabIndex={3}
                            autoComplete="current-password"
                            name="password"
                            id="password"
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <small id="passwordHelp">Votre mot de passe doit contenir au moins 8 caractères.</small>
                    </fieldset>
                    <button 
                        type="submit"
                        className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        S'inscrire
                    </button>
                </form>
            </div>
        </div>
    );
}
