import { CreateRoomForm } from "./create-room-form";

export default function Page() {
    return (
        <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-bold mt-20 mb-10">Create Room</h2>
            <CreateRoomForm />
        </div>
        
    )
}