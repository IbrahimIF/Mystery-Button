import { BrowserRouter, router } from 'react-router-dom';
import Loading from './Components/Loading';
import Mainscreen from './Components/MainScreen';

function App() {
  return (
   <BrowserRouter>
   <router path="/">
    <Loading />
   </router>

   <Mainscreen />
   </BrowserRouter>
  )
}

export default App
