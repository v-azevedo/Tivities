import { useParams } from "react-router";
import { UseProfile } from "../../lib/hooks/useProfile";
import {
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PhotoUploadWidget from "../../app/shared/components/PhotoUploadWidget";
import StarButton from "../../app/shared/components/StarButton";
import DeleteButton from "../../app/shared/components/DeleteButton";

export default function ProfilePhotos() {
  const { id } = useParams();
  const {
    loadingPhotos,
    photos,
    isCurrentUser,
    uploadPhoto,
    profile,
    setMainPhoto,
    deletePhoto,
  } = UseProfile(id);
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
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Photos</Typography>
        {isCurrentUser && (
          <Button onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel" : "Add photo"}
          </Button>
        )}
      </Box>
      <Divider sx={{ my: 2 }} />
      {editMode ? (
        <PhotoUploadWidget
          onUpload={handlePhotoUpload}
          loading={uploadPhoto.isPending}
        />
      ) : (
        <>
          {photos.length === 0 ? (
            <Typography>No photos added yet.</Typography>
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
                  {isCurrentUser && (
                    <div>
                      <Box
                        sx={{ position: "absolute", top: 0, left: 0 }}
                        onClick={() => setMainPhoto.mutate(photo)}
                      >
                        <StarButton
                          selected={photo.url === profile?.imageUrl}
                        />
                      </Box>
                      {profile?.imageUrl !== photo.url && (
                        <Box
                          sx={{ position: "absolute", top: 0, right: 0 }}
                          onClick={() => deletePhoto.mutate(photo.id)}
                        >
                          <DeleteButton />
                        </Box>
                      )}
                    </div>
                  )}
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </>
      )}
    </Box>
  );
}
