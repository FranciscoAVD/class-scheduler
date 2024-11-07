import {z} from "zod";

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string()
})
export type TSigninSchema = z.infer<typeof signinSchema>

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string()
})
export type TSignupSchema = z.infer<typeof signupSchema>

export type TUser = {
    name?: string,
    email: string,
    password: string,
}