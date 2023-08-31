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
</Routes>
    </CounterProvider>
    </BrowserRouter>
  )
}

export default App;
