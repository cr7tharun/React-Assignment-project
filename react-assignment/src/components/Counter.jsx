import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const Counter = () => {
  const [count, setCount] = useState(0);

  
  const animatedStyles = useSpring({
    background: `linear-gradient(135deg, rgba(41, 128, 185, ${Math.min(0.3 + count * 0.05, 1)}), rgba(142, 68, 173, ${Math.min(0.3 + count * 0.05, 1)}))`,
    config: { tension: 220, friction: 20 },
  });


  const buttonSpring = useSpring({
    transform: `scale(${count !== 0 ? 1.05 : 1})`,
    config: { tension: 180, friction: 12 },
  });

  const AnimatedBox = animated(Box);
  const AnimatedButton = animated(Button);

  return (
    <AnimatedBox
      style={animatedStyles}
      sx={{
        p: 5,
        textAlign: 'center',
        borderRadius: 4,
        boxShadow: 4,
        maxWidth: 350,
        mx: 'auto',
        mt: 6,
        color: 'white',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Counter
      </Typography>
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        {count}
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} mt={3}>
        <AnimatedButton
          style={buttonSpring}
          variant="contained"
          sx={{
            backgroundColor: '#27ae60',
            color: '#fff',
            fontSize: '1.2rem',
            px: 3,
            borderRadius: 3,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#2ecc71',
              transform: 'scale(1.1)',
              boxShadow: '0px 5px 15px rgba(46, 204, 113, 0.5)',
            },
          }}
          onClick={() => setCount(count + 1)}
          aria-label="Increase count"
        >
          +
        </AnimatedButton>

        <AnimatedButton
          style={buttonSpring}
          variant="contained"
          sx={{
            backgroundColor: '#e74c3c',
            color: '#fff',
            fontSize: '1.2rem',
            px: 3,
            borderRadius: 3,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#c0392b',
              transform: 'scale(1.1)',
              boxShadow: '0px 5px 15px rgba(192, 57, 43, 0.5)',
            },
          }}
          onClick={() => setCount(0)}
          aria-label="Reset count"
        >
          Reset
        </AnimatedButton>

        <AnimatedButton
          style={buttonSpring}
          variant="contained"
          sx={{
            backgroundColor: '#2980b9',
            color: '#fff',
            fontSize: '1.2rem',
            px: 3,
            borderRadius: 3,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#3498db',
              transform: 'scale(1.1)',
              boxShadow: '0px 5px 15px rgba(52, 152, 219, 0.5)',
            },
          }}
          onClick={() => setCount(count - 1)}
          aria-label="Decrease count"
        >
          -
        </AnimatedButton>
      </Box>
    </AnimatedBox>
  );
};

export default Counter;
