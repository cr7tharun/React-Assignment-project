import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from '../redux/userSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const storedUserData = useSelector((state) => state.user.user);

  // Initialize state with Redux user data or a new user
  const [userData, setUserData] = useState(
    storedUserData.id
      ? storedUserData
      : { id: uuidv4(), name: '', address: '', email: '', phone: '' }
  );

  const [isDirty, setIsDirty] = useState(false);
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const handleUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes!';
      }
    };
    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [isDirty]);

  const validate = () => {
    let tempErrors = {};
    if (!userData.name) tempErrors.name = 'Name is required';
    if (!userData.address) tempErrors.address = 'Address is required';
    if (!userData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      tempErrors.email = 'Email is not valid';
    }
    if (!userData.phone) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(userData.phone)) {
      tempErrors.phone = 'Phone number is not valid';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setIsDirty(true);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(saveUserData(userData));
      setIsDirty(false);
      setOpenSnackbar(true);
    }
  };

  return (
    <Paper
      sx={{
        padding: (theme) => theme.spacing(4),
        maxWidth: 600,
        margin: 'auto',
        marginTop: (theme) => theme.spacing(5),
      }}
    >
      <Typography variant="h5" gutterBottom>
        User Data Form
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              value={userData.name}
              onChange={handleChange}
              fullWidth
              margin="dense"
              required
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address"
              value={userData.address}
              onChange={handleChange}
              fullWidth
              margin="dense"
              required
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              value={userData.email}
              onChange={handleChange}
              fullWidth
              margin="dense"
              required
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              label="Phone"
              value={userData.phone}
              onChange={handleChange}
              fullWidth
              margin="dense"
              required
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: (theme) => theme.spacing(2) }}
        >
          Save
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          User data saved successfully!
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default UserForm;
