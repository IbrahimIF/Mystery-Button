import { BrowserRouter } from 'react-router-dom';
import {LoadingScreen} from './Components/Loading';
import {StartButton} from './Components/StartButton';
import {MainScreen} from './Components/MainScreen';

function App() {
  return (
    <BrowserRouter>
<LoadingScreen />
<StartButton />
<MainScreen />
    </BrowserRouter>
  )
}

export default App
