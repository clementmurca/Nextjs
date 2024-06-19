'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'


export default function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        const response = await axios.post('/api/login', { email, password });
        localStorage.setItem('token', response.data.token);
        router.push('/dashboard');
    } catch (error) {
        console.error('La connexion a échoué', error);
    }
};

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-customBg">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Page de connexion
      </h2>
    <div className="mt-10 flex justify-center" role="form">
      <Card className="w-[350px] bg-white/50">
        <CardHeader>
          <img
            className="mx-auto h-10 w-auto"
            src="https://hawaiiwebmarket.fr/wp-content/uploads/2023/05/hwm_logo_couleurs@2x.webp"
            alt="Hawaii Communication"
          />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <fieldset className="">
              <Label className="" 
                id="emailLabel"
                htmlFor="email">
                  Email
              </Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                required
                aria-required="true"
                aria-describedby="emailHelp"
                aria-labelledby="emailLabel"
                tabIndex={1}
                name="email"
                id="email"
                className="mt-1"
              />
            </fieldset>

            <fieldset className="mt-4">
              <Label className=""
                id="passwordLabel"
                htmlFor="password">
                  Mot de passe
              </Label>
            <Input
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              required
              aria-required="true"
              aria-describedby="passwordHelp"
              aria-labelledby="passwordLabel"
              tabIndex={2}
              className="mt-1"
            />
          </fieldset>
            <CardFooter className="flex justify-center mt-4">
              <Button type="submit" className="">Se connecter</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
  )
}
