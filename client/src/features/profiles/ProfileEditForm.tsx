import { Box, Button } from "@mui/material";
import TextInput from "../../app/shared/components/TextInput";
import {
  editProfileSchema,
  EditProfileSchema,
} from "../../lib/schemas/editProfileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

type Props = {
  profile?: Profile;
  onSubmit: (data: EditProfileSchema) => void;
};

export default function ProfileEditForm({ profile, onSubmit }: Props) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
  } = useForm<EditProfileSchema>({
    mode: "onTouched",
    resolver: zodResolver(editProfileSchema),
  });

  useEffect(() => {
    if (profile) {
      reset({
        bio: profile.bio,
        displayName: profile.displayName,
      });
    }
  }, [reset, profile]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDirection="column"
      gap={3}
      marginTop={5}
    >
      <Box display="flex" flexDirection="column" gap={2}>
        <TextInput label="Display Name" control={control} name="displayName" />
        <TextInput
          label="Bio"
          control={control}
          name="bio"
          multiline
          rows={4}
        />
      </Box>
      <Button type="submit" variant="contained" disabled={!isValid || !isDirty}>
        Update profile
      </Button>
    </Box>
  );
}
