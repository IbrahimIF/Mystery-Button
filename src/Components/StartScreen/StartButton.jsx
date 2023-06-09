
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import'./StartScreen.css';



function StartButton() {
return(
<>
<div className="container">
    <AwesomeButton  type="secondary" href='/Main'>Start</AwesomeButton>
</div>

<b className="textContainer">
<span className='text1'>About:</span>
<span className='text2'>Find all 10 buttons to finnish the game</span>
</b>
</>
  
);
}
export default StartButton;