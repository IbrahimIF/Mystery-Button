import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from './Components/LoadingScreen/Loading';
import Mainscreen from './Components/MainScreen/MainScreen';
import RandomScreen from './Components/RandomScreen/RandomScreen';
import StartButton from './Components/StartScreen/StartButton'; 

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Loading />} />
  <Route path="/Start" element={<StartButton />} />
  <Route path="/Main" element={<Mainscreen />} />
  <Route path="/Random" element={<RandomScreen />} />
</Routes>
    </BrowserRouter>
  )
}

export default App;
