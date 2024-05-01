import { Routes, Route, useNavigate} from 'react-router-dom';
import { MainPage } from './pages/MainPage';

export const AppRoutes = ({ setUser }) => {
  const navigate = useNavigate();
  navigate("/", {replace: true}); 
 
  return (
    <Routes>
      <Route index path="/" element= {<MainPage />}/>
    </Routes>
  );
};