import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  InsertEmoticon,
  Photo,
  VideoCameraBack,
  PersonAdd,
  DateRange,
} from "@mui/icons-material";

const UserModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        sx={{
          position: "fixed",
          bottom: 25,
          left: { xs: "calc(50% - 25px)", sm: 30 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <UserModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            bgcolor: "#ffffff",
            width: { xs: "80%", sm: "450px" },
            height: "auto",
            paddingBottom: "25px",
          }}
          borderRadius={5}
          px={6}
        >
          <Typography textAlign="center" variant="h6" color="gray" my={2}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format" />
            <Typography
              sx={{ marginLeft: 1 }}
              variant="h6"
              fontSize={16}
              fontWeight={300}
            >
              Amin Mardani
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", marginTop: "5px" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Whats on your mind ?"
            variant="standard"
          />
          <Stack direction="row" gap={1} my={2}>
            <InsertEmoticon color="primary" />
            <Photo color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup disableElevation variant="contained" fullWidth>
            <Button>Post</Button>
            <Button sx={{ width: "80px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </UserModal>
    </>
  );
};

export default Add;
