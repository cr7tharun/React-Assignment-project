import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const Counter = () => {
  const [count, setCount] = useState(0);

  const animatedStyles = useSpring({
    backgroundColor: `rgba(25, 118, 210, ${Math.min(0.1 + count * 0.05, 1)})`,
    config: { tension: 250, friction: 20 },
  });

  const AnimatedBox = animated(Box);

  return (
    <AnimatedBox
      style={animatedStyles}
      sx={{
        p: 4,
        textAlign: 'center',
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 300,
        mx: 'auto',
        mt: 5,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Counter
      </Typography>
      <Typography variant="h3" gutterBottom>
        {count}
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount(count + 1)}
          aria-label="Increase count"
        >
          +
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCount(0)}
          aria-label="Reset count"
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount(count - 1)}
          aria-label="Decrease count"
        >
          -
        </Button>
      </Box>
    </AnimatedBox>
  );
};

export default Counter;
