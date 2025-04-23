import { useParams } from "react-router";
import { UseProfile } from "../../lib/hooks/useProfile";
import { ImageList, ImageListItem, Typography } from "@mui/material";

export default function ProfilePhotos() {
  const { id } = useParams();
  const { loadingPhotos, photos } = UseProfile(id);

  if (loadingPhotos) return <Typography>Loading photos...</Typography>;

  if (!photos || photos.length === 0)
    return <Typography>No photos found for this user.</Typography>;

  return (
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
  );
}
