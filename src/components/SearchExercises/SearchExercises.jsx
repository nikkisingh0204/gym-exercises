import React, { useEffect, useState } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';

import { exerciseOptions, fetchData } from "../../utils/fetchData";

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ bodyParts,setBodyParts] = useState([]);

  useEffect(()=>{
    const fetchExercisesData = async() =>{
        const response =  await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
        const bodyPartsData = await response.json();
        setBodyParts(['all',...bodyPartsData]);
    }
    fetchExercisesData();
  },[])
  //for the body part cards to be rendered in the first call 

  const handleClick = async () => {
    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1000';
    if (searchTerm) {
      const exerciseData = await fetchData(url, exerciseOptions);
      console.log("APi-data",exerciseData);

      const searchedExercises  = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(searchTerm)
        || exercise.target.toLowerCase().includes(searchTerm)
        || exercise.bodyPart.toLowerCase().includes(searchTerm)
        || exercise.equipment.toLowerCase().includes(searchTerm)
      );
      setSearchTerm('');
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems={"center"} mt="37px" justifyContent={"center"} p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exercises <br /> You Should Know{" "}
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
          height="76px"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          type="text"
          label="Search Exercises"
        />
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
          }}
          className="search-btn"
          onClick={handleClick}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
        <HorizontalScrollbar data={ bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
