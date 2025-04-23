import { useParams } from "react-router";
import { UseProfile } from "../../lib/hooks/useProfile";
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PhotoUploadWidget from "../../app/shared/components/PhotoUploadWidget";

export default function ProfilePhotos() {
  const { id } = useParams();
  const { loadingPhotos, photos, isCurrentUser, uploadPhoto } = UseProfile(id);
  const [editMode, setEditMode] = useState(false);

  const handlePhotoUpload = (file: Blob) => {
    uploadPhoto.mutate(file, {
      onSuccess: () => {
        setEditMode(false);
      },
    });
  };

  if (loadingPhotos) return <Typography>Loading photos...</Typography>;

  if (!photos) return <Typography>No photos found for this user.</Typography>;

  return (
    <Box>
      {isCurrentUser && (
        <Box>
          <Button onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel" : "Add photo"}
          </Button>
        </Box>
      )}
      {editMode ? (
        <PhotoUploadWidget
          onUpload={handlePhotoUpload}
          loading={uploadPhoto.isPending}
        />
      ) : (
        <ImageList sx={{ height: 450 }} cols={6} rowHeight={164}>
          {photos.map((photo) => (
            <ImageListItem key={photo.id}>
              <img
                srcSet={`${photo.url.replace(
                  "/upload/",
                  "/upload/w_164,h_164,c_fill,f_auto,dpr_2,g_face/"
                )}`}
                src={`${photo.url.replace(
                  "/upload/",
                  "/upload/w_164,h_164,c_fill,f_auto,g_face/"
                )}`}
                alt="user profile image"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
}
