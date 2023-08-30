import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from './Components/LoadingScreen/Loading';
import Start from './Components/StartScreen/StartButton'; 
import Firstbtn from './Components/FirstButton/MainScreen';
import Secondbtn from'./Components/SecondButton/SecondBtn';
import Thirdbtn from'./Components/ThirdButton/ThirdBtn';
import Fourthbtn from'./Components/FourthButton/FourthBtn';
import RandomScreen from './Components/RandomScreen/RandomScreen';
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
  <Route path="/Random" element={<RandomScreen />} />
</Routes>
    </CounterProvider>
    </BrowserRouter>
  )
}

export default App;
