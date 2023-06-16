
import 'react-awesome-button/dist/styles.css';
import'./button.css';


function StartButton() {

return(
<>
<div className="container">
  <div className="base1"></div>
    <button className="button1"><p>press</p></button>
</div>

<div className="container">
  <div className="base2"></div>
  <div className="button-container">
    <button className="button2"><p>press</p></button>
  </div>
</div>

<div className="container">
  <div className="base3"></div>
  <div className="button-container">
    <button className="button3"><p>press</p></button>
  </div>
</div>

<div>
  <div className="base4"></div>
    <button className="button4"><p>press</p></button>
</div>

</>
  
);
}
export default StartButton;