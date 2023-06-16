import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from './Components/LoadingScreen/Loading';
import Mainscreen from './Components/MainScreen/MainScreen';
import RandomScreen from './Components/RandomScreen/RandomScreen';
import StartButton from './Components/StartScreen/StartButton'; 
import Button from './Components/ButtonTest/button'

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Loading />} />
  <Route path="/Start" element={<StartButton />} />
  <Route path="/Main" element={<Mainscreen />} />
  <Route path="/Random" element={<RandomScreen />} />
  <Route path="/button" element={<Button />} />
</Routes>
    </BrowserRouter>
  )
}

export default App;
