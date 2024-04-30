"use server";

import { db } from "@/db/data";
// import { createRoom } from "@/data-access/rooms";
import { Room, room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createRoomAction(roomData: Omit<Room, "id" | "userId">) {
  const session = await getSession();
  
  if (!session) {
    throw new Error("you must be logged in to create this room");
  }

  await db.insert(room).values({...roomData, userId: session.user.id})
  // const room = await createRoom(roomData, session.user.id);

  // revalidatePath("/browse");

  // return room;
}