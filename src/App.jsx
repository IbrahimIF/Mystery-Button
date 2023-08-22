import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from './Components/LoadingScreen/Loading';
import Mainscreen from './Components/MainScreen/MainScreen';
import RandomScreen from './Components/RandomScreen/RandomScreen';
import StartButton from './Components/StartScreen/StartButton'; 
import BasicScreen from './Components/basicScreen/basicScreen';
import { CounterProvider } from './Components/CounterContext/CounterContext';

function App() {
  return (
    <BrowserRouter>
    <CounterProvider>
    <Routes>
  <Route path="/" element={<Loading />} />
  <Route path="/Start" element={<StartButton />} />
  <Route path="/Main" element={<Mainscreen />} />
  <Route path="/Random" element={<RandomScreen />} />
  <Route path="/Button" element={<BasicScreen />} />
</Routes>
    </CounterProvider>
    </BrowserRouter>
  )
}

export default App;
