import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "Require"),
  image: z.union([
    z.instanceof(File),
    z.string().transform((value) => value === "" ? undefined : value)
  ])
    .optional(),
});