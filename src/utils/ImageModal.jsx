import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ImageModal = ({ image, isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          maxWidth: "90vw",
          maxHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          <CloseIcon />
        </IconButton>
        <img
          src={image}
          alt="Enlarged view"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>
    </Modal>
  );
};

export default ImageModal;
