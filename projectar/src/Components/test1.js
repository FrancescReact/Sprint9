import React from react;
import {AFrameRenderer, Marker} from 'react-web-ar'


function Hiro(){
return (
    <AFrameRenderer arToolkit={{sourceType:'webcam'}}>
    
      <Marker preset='hiro'>

        <a-box color='red' ></a-box>

      </Marker>

    </AFrameRenderer>
  );
}

export default Hiro;