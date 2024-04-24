'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./button";

export default function UserProfile() {
    const session = useSession();
    const button = session.data ?
        <Button onClick={() => signOut()}>Sign out</Button> :
        <Button onClick={() => signIn('google')}>Sign in</Button>
    return (
        <div>
            {button}
        </div>
    )
}