import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateVideo from './pages/CreateVideo';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import MyVideos from './pages/MyVideos';
import VideoDetail from './pages/VideoDetail';
import Layout from './Layout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/create-video" element={<CreateVideo />} />
          <Route path="/my-videos" element={<MyVideos />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
