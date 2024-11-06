import { TLoginSchema } from "@/lib/types"
import {db} from "./database"
import { users as usersTable } from "./schema"
import { eq } from "drizzle-orm";

export async function getUsers(){
    return await db.query.users.findMany()
}
export async function getUser(unverifiedUser: TLoginSchema){
    const [user] = await db.select().from(usersTable).where(eq(usersTable.email, unverifiedUser.email));    
    return user;
}