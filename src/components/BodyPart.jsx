import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { WindowSharp } from "@mui/icons-material";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const handleItemClick = () => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        width: "120px",
        height: "120px",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: "#fff",
        border: bodyPart === item ? "2px solid #FF2625" : "none",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        transition: "border-color 0.3s ease-in-out",
        "&:hover": {
          borderColor: bodyPart === item ? "#FF2625" : "transparent",
        },
      }}
      onClick={handleItemClick}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "24px", height: "24px" }}
      />
      <Typography
        variant="subtitle2"
        sx={{ marginTop: "8px", textTransform: "uppercase" }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
