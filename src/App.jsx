import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from './Components/LoadingScreen/Loading';
import Start from './Components/StartScreen/StartButton'; 
import Firstbtn from './Components/FirstButton/MainScreen';
import Secondbtn from'./Components/SecondButton/SecondBtn';
import Thirdbtn from'./Components/ThirdButton/ThirdBtn';
import Fourthbtn from'./Components/FourthButton/FourthBtn';
import RandomScreen from './Components/RandomScreen/RandomScreen';
import Hiddenbtn from './Components/HiddenButton/HiddenScreen';
import Monday from './Components/MondayScreen/MondayScreen';
import Fifthbtn from'./Components/FifthButton/FifthScreen';
import Sixthbtn from'./Components/SixthButton/SixthScreen';
import Endbtn from'./Components/EndScreen/EndButton';
import { CounterProvider } from './Components/CounterContext/CounterContext';

function App() {
  return (
    <BrowserRouter>
    <CounterProvider>
    <Routes>
  <Route path="/" element={<Loading />} />
  <Route path="/Start" element={<Start />} />
  <Route path="/First" element={<Firstbtn />} />
  <Route path="/Second" element={<Secondbtn />} />
  <Route path="/Third" element={<Thirdbtn />} />
  <Route path="/Fourth" element={<Fourthbtn />} />
  <Route path="/Hidden" element={<Hiddenbtn />} />
  <Route path="/Random" element={<RandomScreen />} />
  <Route path="/Monday" element={<Monday />} />
  <Route path="/Fifth" element={<Fifthbtn />} />
  <Route path="/Sixth" element={<Sixthbtn />} />
  <Route path="/End" element={<Endbtn />} />
</Routes>
    </CounterProvider>
    </BrowserRouter>
  )
}

export default App;
