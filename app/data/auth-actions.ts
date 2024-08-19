"use server";
import React from 'react';
import { z } from "zod";

const schemaRegister = z.object({
    username: z.string().min(3).max(20, {
        message: "Username must be between 3 and 20 characters",
    }),
    password: z.string().min(6).max(100, {
        message: "Password must be between 6 and 100 characters",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    confirmPassword: z.string().min(6).max(100, {
        message: "Password must be between 6 and 100 characters",
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export const registerUserAction = (
    prevState: any, 
    formData: FormData
) => {
    const validatedFields = schemaRegister.safeParse({
        username: formData.get("username"),    
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get('confirm-password')
    });

    if (!validatedFields.success) {
        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            strapiErrors: null,
            message: "Missing Fields. Failed to Register.",
        };
    }

    return {
        ...prevState,
        data: "ok",
    };
}
