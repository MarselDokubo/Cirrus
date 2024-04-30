'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
export default function UserProfile() {
    const session = useSession();

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="link">
                        <Avatar className="mr-2">
                            <AvatarImage src={ session.data?.user?.image?? ""} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {session && <span>{session.data?.user.name}</span>}
                    </Button>
                    
                </DropdownMenuTrigger>
                 <DropdownMenuContent>           
                    { session.data? (<DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>) :
                        (<DropdownMenuItem onClick={() => signIn('google')}>Sign in</DropdownMenuItem>)
                    }
                 </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}