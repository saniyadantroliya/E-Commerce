import z from "zod";

export const loginschema =z.object({
    email:z.string().min(1, {message: "Enter valid email"}),
    password:z.string().min(6, {message: "Password must be at least 6 characters"}),
})