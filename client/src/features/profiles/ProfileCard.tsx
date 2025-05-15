import { Person } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

type Props = {
  profile: Profile;
};

const ProfileCard = ({ profile }: Props) => {
  return (
    <Link to={`/profiles/${profile.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          borderRadius: 3,
          p: 3,
          maxWidth: 300,
          textDecoration: "none",
        }}
        elevation={4}
      >
        <CardMedia
          component="img"
          src={profile.imageUrl || "/images/user.png"}
          sx={{ width: "100%", zIndex: 50 }}
          alt={profile.displayName + "image"}
        />
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1}
          >
            <Typography variant="h5">{profile.displayName}</Typography>
            {profile.bio && (
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {profile.bio}
              </Typography>
            )}
            {profile.following && (
              <Chip
                size="small"
                label="Following"
                color="secondary"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            )}
          </Box>
        </CardContent>
        <Divider sx={{ mb: 2 }} />
        <Box display="flex" alignItems="center" justifyContent="start">
          <Person />
          <Typography sx={{ ml: 1 }}>
            {profile.followersCount} Followers
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default ProfileCard;
