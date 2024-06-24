"use client"; 

import { useEffect, useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UsersTable from '@/components/userTable/usersTable';


export default function Dashboard() {
  const router = useRouter();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);



  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:max-w-sm">
        <div className="flex justify-center">
        <h1 className="mb-6">Bienvenue dans mon Dashboard</h1>
        </div>

        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <div className="col-span-2">
            <UsersTable />
          </div>
          <div className="row-span-2 col-span-2">
            
          </div>
        </div>
      
      </div>
    </div>
  );
}
