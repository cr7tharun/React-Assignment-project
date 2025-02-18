import React from 'react';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, CssBaseline, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';

const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
});

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#34495e',
  textTransform: 'none',
  marginLeft: theme.spacing(2),
  borderRadius: '8px',
  padding: '8px 16px',
  fontWeight: 500,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#1abc9c',
    transform: 'translateY(-2px)',
    boxShadow: '0px 4px 10px rgba(26, 188, 156, 0.5)',
  },
  '&.active': {
    backgroundColor: '#1abc9c',
    boxShadow: '0px 4px 10px rgba(26, 188, 156, 0.5)',
  },
}));

const App = () => {
  return (
    <>
      <CssBaseline />
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}>
            My Application
          </Typography>
          <NavButton component={NavLink} to="/counter" activeClassName="active">
            Counter
          </NavButton>
          <NavButton component={NavLink} to="/form" activeClassName="active">
            User Form
          </NavButton>
          <NavButton component={NavLink} to="/editor" activeClassName="active">
            Rich Text Editor
          </NavButton>
        </Toolbar>
      </StyledAppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/counter" replace />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
          <Route path="*" element={<Navigate to="/counter" replace />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
