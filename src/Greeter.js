import React from 'react';

function Greeter(props) {
  
  const [fruit, setFruit] = React.useState(props.fruit);  

  function eatFruit() {
      setFruit(props.eaten)
  }

  return (
    <div style={{"color" : props.color}}>
        {fruit}
      <button onClick={eatFruit}>eat</button>
    </div>
  );
}

export default Greeter;
