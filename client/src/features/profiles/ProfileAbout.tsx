import { useParams } from "react-router";
import { UseProfile } from "../../lib/hooks/useProfile";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import ProfileEditForm from "./ProfileEditForm";
import { EditProfileSchema } from "../../lib/schemas/editProfileSchema";

export default function ProfileAbout() {
  const { id } = useParams();
  const { profile, isCurrentUser, updateProfile } = UseProfile(id);

  const [editMode, setEditMode] = useState(false);

  const onSubmit = (data: EditProfileSchema) => {
    updateProfile.mutate(data, {
      onSuccess: () => setEditMode(false),
    });
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">About {profile?.displayName}</Typography>
        {isCurrentUser && (
          <Button onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel" : "Edit profile"}
          </Button>
        )}
      </Box>
      <Divider sx={{ my: 2 }} />
      {editMode ? (
        <ProfileEditForm profile={profile} onSubmit={onSubmit} />
      ) : (
        <Box sx={{ overflow: "auto", maxHeight: 350 }}>
          <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
            {profile?.bio || "No description added yet."}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
