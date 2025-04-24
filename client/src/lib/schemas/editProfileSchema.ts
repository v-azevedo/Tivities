import { z } from "zod";
import { requiredString } from "../util/util";

export const editProfileSchema = z.object({
  displayName: requiredString("Display name"),
  bio: z.string().nullish(),
});

export type EditProfileSchema = z.infer<typeof editProfileSchema>;
