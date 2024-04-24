import { db } from "@/db/data";
import Image from "next/image";

export default async function Home() {
  const users = await db.query.users.findMany()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}


    </main>
  );
}
