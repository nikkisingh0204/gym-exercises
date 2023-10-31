import { Box,Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideo = ({exerciseVideo,name}) => {

  if(!exerciseVideo.length) return <Loader />
  console.log(exerciseVideo);
  // console.log(exerciseVideo[0]);
  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideo?.slice(0,3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.channelId}`}
            target="_blank"
            rel="noreferrer"
          >
          <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channel}
              </Typography>
            </Box> 
          </a>
          // <p key={index}>{item.id}</p>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
