import { Stack, Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";

const Footer = () => {
  return (
    <Box mt={"80px"} bgcolor="#FFF3F4">
      <Typography
        variant="h6"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Made with effort 💪🏻 by Cynical !!
      </Typography>
      <Stack
        gap="40px"
        sx={{ alignItems: "center" , flexDirection:'row', justifyContent:'center'}}
        flexWrap="wrap"
        px="40px"
        pt="20px"
      >
       <a style={{color:'black'}}href='https://github.com/nikkisingh0204'><GitHubIcon /></a> 
       <a style={{color:'black'}}href='https://github.com/nikkisingh0204'><LinkedInIcon /></a> 
      </Stack>
    </Box>
  );
};

export default Footer;
