'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        router.push('/Pages/Dashboard');
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError('Une erreur est survenue lors de la tentative de connexion.');
      console.error('Erreur de connexion:', error);
    }
  };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://hawaiiwebmarket.fr/wp-content/uploads/2023/05/hwm_logo_couleurs@2x.webp"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Connectez-vous
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" role="form">
                <form onSubmit={handleSubmit}>
                    <fieldset className="">
                        <label className="py-2" 
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
                            autoComplete="current-email"
                            tabIndex={1}
                            name="email"
                            id="email"
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <small id="emailHelp">Exemple : JohnDoe@example.fr</small>
                    </fieldset>

                    <fieldset className="mt-4">
                        <label className="py-2"
                               id="passwordLabel"
                               htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            name="password"
                            id="password"
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            required
                            aria-required="true"
                            aria-describedby="passwordHelp"
                            aria-labelledby="passwordLabel"
                            autoComplete="current-password"
                            tabIndex={2}
                        />
                        <small id="passwordHelp">Votre mot de passe</small>
                    </fieldset>
                    {error && <p>{error}</p>}
                    <button 
                        type="submit"
                        className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
}
