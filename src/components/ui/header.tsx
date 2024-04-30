import Link from "next/link";
import { ModeToggle } from "../mode_toggle";
import UserProfile from "./user-profile";

export default function Header() {
    return (
        <header className=" bg-gray-100 dark:bg-gray-900">

        <div className="container py-4 mx-auto flex items-center justify-between ">
                <h1 className="font-bold text-3xl">
                    <Link href={"/"}>
                        Logo
                    </Link>
                </h1>
            <div className="flex items-center gap-2">
                <UserProfile />
                <ModeToggle />
            </div>
        </div>
        </header>
    )
}