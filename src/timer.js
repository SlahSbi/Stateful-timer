import React from 'react';


function Timer(props) {
     let time = props.a
     let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
     let seconds = Math.floor((time % (1000 * 60)) / 1000);

     return (<div className="timer">
          <div className="hour">
               <div className="num">{hours}</div>
               <div className="text">Hour</div>
          </div>
          <div className="double">:</div>
          <div className="minute">
               <div className="num">{minutes}</div>
               <div className="text">Minute</div>
          </div>
          <div className="double">:</div>
          <div className="second">
               <div className="num">{seconds}</div>
               <div className="text">Second</div>
          </div>
     </div>
     );
}

export default Timer;

