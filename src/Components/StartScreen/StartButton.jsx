
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import'./StartScreen.css';



function StartButton() {
return(
  <>
<AwesomeButton  type="secondary" href='/Main'>Start</AwesomeButton>
<span>Welcome</span>
<span>Find all 10 buttons to finnish the game</span>
  </>
);
}
export default StartButton;