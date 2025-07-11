import z, { email } from "zod";

// Define the Zod schema for registration form validation
export const registerschema = z.object({

    // Name field: required, must not be empty
    name: z.string().min(1, { message: "Name is required" }),

    // Email field: must be a valid email format
    email: z.string().email({ message: "Enter valid email" }),

    // Country code field: must be one of the specified values
    country_code: z.enum(['+91', '+92', '+93'], {
        errorMap: () => ({ message: "Please select country" }),
    }),

    // Phone field: must be between 1 and 10 characters (basic length check)
    phone: z.string().min(1).max(10),

    // Password field: must be at least 6 characters
    password: z.string().min(6, {
        message: "Password must be at least 6 characters"
    }),

    // Checkbox agreement: must be checked (true)
    agree: z.literal(true, {
        errorMap: () => ({
            message: "You must accept the terms and conditions"
        }),
    })
});
