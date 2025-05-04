import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../header';

function Login() {
  return (
    <div>
      <Header />

      <div className="pt-24 text-center space-x-4">
        <Button
          variant="contained"
          component={Link}
          to="/EmployerSignup"
          sx={{
            backgroundColor: '#6b21a8', // purple
            color: 'white',
            px: 4,
            py: 1.5,
            fontWeight: '600',
            textTransform: 'none',
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#f3e8ff',
              borderColor: '#6b21a8',
              color: '#6b21a8'
            },
            mr: 2 
          }}
        >
          Employer
        </Button>

        <Button
          variant="contained"
          component={Link}
          to="/UserSignup"
          sx={{
            backgroundColor: '#6b21a8', // purple
            color: 'white',
            // borderColor: '#6b21a8',
            px: 4,
            py: 1.5,
            fontWeight: '600',
            textTransform: 'none',
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#f3e8ff',
              borderColor: '#6b21a8',
              color: '#6b21a8'
            }
          }}
        >
          JobSeeker
        </Button>
      </div>
    </div>
  );
}

export default Login;
