import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end m-7 px-5 gap-2">
     
      <button
        onClick={() => navigate('/login/employer')}
        className="bg-blue-500 text-white px-4 py-4 mt-7 rounded "
      >
        Employer Login
      </button>
      <button
        onClick={() => navigate('/login/user')}
        className="bg-green-500 text-white px-4 py-4 mt-7  rounded"
      >
        User Login
      </button>
      
    </div>
  );
}
