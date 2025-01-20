import { z } from "zod";

export const projectValidate = z.object({
  name: z
    .string()
    .min(1, "Please provide a valid project name.")
    .max(100, "Project name cannot exceed 100 characters."),
  key: z
    .string()
    .min(2, "Project key must be at least 2 characters.")
    .max(10, "Project key cannot exceed 10 characters."),
  description: z
    .string()
    .max(500, "Project description cannot exceed 500 characters.")
    .optional(),
});

















export const sprintSchema = z.object({
  name: z.string().min(1, "Sprint name is required"),
  startDate: z.date(),
  endDate: z.date(),
});

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required"),
  assigneeId: z.string().cuid("Please select assignee"),
  description: z.string().optional(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]),
});