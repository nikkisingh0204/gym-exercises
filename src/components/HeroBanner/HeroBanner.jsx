import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import HeroBannerImage from "../../assets/images/banner.png";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#526D82" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat,Smile
        <br />
        and
      </Typography>
      <Typography fontSize="22px" lineHeight={"35px"} mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        startIcon={<FitnessCenterOutlinedIcon />}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color={"#27374D"}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize={"200px"}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
      <Stack sx={{ width: "100%", paddingTop: "5rem" }} spacing={2}></Stack>
    </Box>
  );
};

export default HeroBanner;
