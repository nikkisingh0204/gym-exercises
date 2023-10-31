import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography} from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} />
        <Stack direction={'row'} spacing={2} p='10px'>
            <Button sx={{
                background: '#ffa9a9',
                color: '#fff',
                ml:'21px',
                borderRadius: '20px',
                fontSize:'14px',
                textTransform:'capitalize'
            }}>
            <Typography>{exercise.bodyPart}</Typography>
            </Button>
            <Button sx={{
                background: '#fcc757',
                color: '#fff',
                ml:'21px',
                borderRadius: '20px',
                fontSize:'14px',
                textTransform:'capitalize'
            }}>
                <Typography>{exercise.target}</Typography>
            </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight={'bold'} mt='11px' pb='10px' textTransform={'capitalize'} fontSize='22px'>
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard