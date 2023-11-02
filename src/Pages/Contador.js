import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <br></br>
      <p>Contador: {contador}</p>
      <br></br>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}
export default Contador;