import { z } from "zod";
import { publicProcedure } from "../lib/orpc";
import { db } from "../db";
import { users } from "../db/schema/users";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

const signUpSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

const signInSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(1, "Password is required"),
});

export const authRouter = {
	signUp: publicProcedure
		.input(signUpSchema)
		.handler(async ({ input }) => {
			try {
				// Check if user already exists
				const existingUser = await db
					.select()
					.from(users)
					.where(eq(users.email, input.email))
					.limit(1);

				if (existingUser.length > 0) {
					throw new Error("Email already exists");
				}

				// Hash password
				const hashedPassword = await bcrypt.hash(input.password, 12);

				// Create user
				const newUser = await db
					.insert(users)
					.values({
						fullName: input.name,
						email: input.email,
						password: hashedPassword,
						role: "guest",
					})
					.returning({
						id: users.id,
						fullName: users.fullName,
						email: users.email,
						role: users.role,
						createdAt: users.createdAt,
					});

				return {
					success: true,
					message: "Account created successfully",
					user: newUser[0],
				};
			} catch (error) {
				throw new Error(error instanceof Error ? error.message : "Sign up failed");
			}
		}),

	signIn: publicProcedure
		.input(signInSchema)
		.handler(async ({ input }) => {
			try {
				// Find user
				const user = await db
					.select()
					.from(users)
					.where(eq(users.email, input.email))
					.limit(1);

				if (user.length === 0) {
					throw new Error("Invalid credentials");
				}

				// Check password
				const isValid = await bcrypt.compare(input.password, user[0].password);
				if (!isValid) {
					throw new Error("Invalid credentials");
				}

				return {
					success: true,
					message: "Login successful",
					user: {
						id: user[0].id,
						fullName: user[0].fullName,
						email: user[0].email,
						role: user[0].role,
						createdAt: user[0].createdAt,
					},
				};
			} catch (error) {
				throw new Error(error instanceof Error ? error.message : "Sign in failed");
			}
		}),

	getCurrentUser: publicProcedure
		.input(z.object({ userId: z.number() }))
		.handler(async ({ input }) => {
			try {
				// Get fresh user data from database
				const user = await db
					.select()
					.from(users)
					.where(eq(users.id, input.userId))
					.limit(1);

				if (user.length === 0) {
					throw new Error("User not found");
				}

				return {
					success: true,
					user: {
						id: user[0].id,
						fullName: user[0].fullName,
						email: user[0].email,
						role: user[0].role,
						createdAt: user[0].createdAt,
					},
				};
			} catch (error) {
				throw new Error(error instanceof Error ? error.message : "Failed to get user");
			}
		}),

	signOut: publicProcedure.handler(async () => {
		return {
			success: true,
			message: "Logout successful",
		};
	}),
};