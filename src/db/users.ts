import { TSigninSchema, TUser } from "@/lib/types"
import {db} from "./database"
import { users as usersTable } from "./schema"
import { eq } from "drizzle-orm";

export async function newUser(user: TUser){
    return await db.insert(usersTable).values(user).returning({insertedId: usersTable.id})
}
export async function getUser(unverifiedUser: TSigninSchema){
    const [user] = await db.select().from(usersTable).where(eq(usersTable.email, unverifiedUser.email));    
    return user;
}