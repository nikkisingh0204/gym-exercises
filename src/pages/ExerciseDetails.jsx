import React , { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/system';

import { exerciseOptions ,youtubeOptions, fetchData } from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises  from '../components/SimilarExercises';



const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const { id } = useParams();

  console.log(exerciseDetail.name);

  useEffect(() => {
      const fetchExerciseDetail = async() => {
        if(id){
          let exerciseData  = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,exerciseOptions);
          setExerciseDetail(exerciseData);
        }
        const exerciseVideos = await fetchData(
          `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name} exercise`,
          youtubeOptions
        );
        console.log(exerciseVideos);
        setExerciseVideo(exerciseVideos.contents);
    };
    fetchExerciseDetail();
  },[id,exerciseDetail.name]);

  return (
    <Box>
       <Detail exerciseDetail={ exerciseDetail } />
      <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name}/>
      {/* <SimilarExercises /> */}
    </Box>   
  )
}

export default ExerciseDetails