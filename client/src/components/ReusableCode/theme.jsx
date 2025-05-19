import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#6b21a8' },
    secondary: { main: '#7c3aed' },
    background: { default: '#f3e8ff' },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: { borderRadius: 8 },
  components: {
    MuiTextField: {
      defaultProps: { variant: 'outlined', fullWidth: true },
      styleOverrides: { root: { marginBottom: '10px' } },
    },
    MuiButton: {
      styleOverrides: { root: { padding: '12px 24px' } },
    },
  },
});

export default theme;
