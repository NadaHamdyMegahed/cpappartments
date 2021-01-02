import logo from './logo.svg';
import './App.css';

function App() {
//[x,w,y,l,app,roomtype]
  let rectangles =  [
 [0,1,0,10,1,"h"],
 [3,12,0,1,1,"k"],
 [1,2,0,2,1,"b"],


   [0,3,14,3,0,"c"],

   [0,3,10,3,0,"d"],
   [25,3,25,3,0,"e"]

   

]







  return (
    <div className="App">
      
    { 
    rectangles.map((r)=>{

      return(
<div className="rectange" style={{width:(r[1]*50)+"px",height:(r[3]*50)+"px",left:(r[0]*50)+"px",top:(r[2]*50)+"px"}}>
  {r[4]+","+r[5]}
  </div>

      )
    })}
    </div>
  );
}

export default App;
