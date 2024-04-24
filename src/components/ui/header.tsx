import { ModeToggle } from "../mode_toggle";
import UserProfile from "./user-profile";

export default function Header() {
    return (
        <div className="flex justify-around items-center">
            <ModeToggle />
            <UserProfile />
        </div>
    )
}