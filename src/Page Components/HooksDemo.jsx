import React, { useState } from 'react';

const HooksDemo = () => {

    const [ text, setText ] = useState( "World!!" );
  return (
    <>
      <h1>Hello {text}</h1>

      <button onClick={ () => setText("React (updated text)") }>Update Text</button>
      
    </>
  )
}

export default HooksDemo;
