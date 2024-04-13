import z from "zod";
export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(5),
    name: z.string().optional()
})

//type inference in zod
export type SignupInput = z.infer<typeof signupInput>

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(5),
})

export type SigninInput = z.infer<typeof signinInput>

export const createdBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})

export type CreatedBlogInput = z.infer<typeof createdBlogInput>

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type UpdateBlogInput = z.infer<typeof updateBlogInput>