import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z
      .string({
        required_error: "First Name is required",
      })
      .min(2)
      .max(50),
    lastName: z
      .string({
        required_error: "Last Name is required",
      })
      .min(2)
      .max(50),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    pasword: z
      .string({
        required_error: "Pasword is required",
      })
      .min(6)
      .max(50),
    confirmPassword: z
      .string({
        required_error: "confirmPassword is required",
      })
      .min(6)
      .max(50),
    age: z.number().int().positive().min(18).max(100).optional(),
  })
  .refine((data) => data.pasword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
