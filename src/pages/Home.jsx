import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner/HeroBanner";
import SearchExercises from "../components/SearchExercises/SearchExercises";
import Exercises from "../components/Exercises/Exercises";

const Home = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExerciseList}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exerciseList}
        bodyPart={bodyPart}
        setExercises={setExerciseList}
      />
    </Box>
  );
};

export default Home;
