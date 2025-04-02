import {
  Paper,
  Typography,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
} from "@mui/material";

const ActivityDetailsSidebar = () => {
  const isHost = true;
  const following = true;

  return (
    <>
      <Paper
        sx={{
          textAlign: "center",
          border: "none",
          backgroundColor: "primary.main",
          color: "white",
          p: 2,
        }}
      >
        <Typography variant="h6">2 people going</Typography>
      </Paper>
      <Paper sx={{ padding: 2 }}>
        <Grid2 container alignItems="center">
          <Grid2 size={8}>
            <List sx={{ display: "flex", flexDirection: "column" }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt={"attendee name"} src={"/assets/user.png"} />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="h6">Bob</Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid2>
          <Grid2
            size={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 1,
            }}
          >
            {isHost && (
              <Chip
                label="Host"
                color="warning"
                variant="filled"
                sx={{ borderRadius: 2 }}
              />
            )}
            {following && (
              <Typography variant="body2" color="orange">
                Following
              </Typography>
            )}
          </Grid2>
        </Grid2>
      </Paper>
    </>
  );
};
export default ActivityDetailsSidebar;
