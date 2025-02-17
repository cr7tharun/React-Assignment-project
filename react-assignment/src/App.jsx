import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, CssBaseline, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: 'none',
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
  },
}));

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Application
          </Typography>
          <NavButton component={Link} to="/counter" variant="contained" color="secondary">
            Counter
          </NavButton>
          <NavButton component={Link} to="/form" variant="contained" color="secondary">
            User Form
          </NavButton>
          <NavButton component={Link} to="/editor" variant="contained" color="secondary">
            Rich Text Editor
          </NavButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
          <Route path="*" element={<Navigate to="/counter" />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
