import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../../app/Types/users.interface';
import { Error } from '../../app/Types/users.interface';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

const UsersTable: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      const fetchUsers = async () => {
          try {
            const reponse = await axios.get('/api/users');
            setUsers(reponse.data);
          } catch (error) {
            setError({ message: "Erreur lors de la recherche des utilisateurs" });
            console.log('Error:', error);
          }
      }
      fetchUsers();
    }, []);

    if (error) {
        return <p>{error.message}</p>;
      }

  return (
    <div className="">
      <Table>
        <TableCaption>Liste des utilisateurs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>       
    </div>
  )
}

export default UsersTable;
