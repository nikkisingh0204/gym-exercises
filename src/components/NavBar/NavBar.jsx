import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../../assets/images/logo2.png";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: "122px", xs: "40px" } ,mt:{ sm:'32px', xs: '20px'}, justifyContent:'none' }}
      px='20px'
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "50px",
            height: "50px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            // color: "#3A1212",
            color: '#27374D',
            borderBottom: "3px solid #9DB2BF",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#27374D" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
