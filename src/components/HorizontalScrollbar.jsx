import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {data.map((item) => (
        <Grid item key={item.id || item}>
          <Box
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px"
            textAlign="center"
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default HorizontalScrollbar;
