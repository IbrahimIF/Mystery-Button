
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import'./StartScreen.css';



function StartButton() {
return(
  <>
  <div className='place-content-center'>
<AwesomeButton  type="secondary" href='/Main'>Start</AwesomeButton>
<span>Welcome</span>
<span className=''>Find all 10 buttons to finnish the game</span>
  </div>
  </>
);
}
export default StartButton;