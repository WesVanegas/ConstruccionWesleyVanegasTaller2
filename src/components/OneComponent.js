import React, {useState} from 'react'

export const OneComponent = () => {
    
    //const name = 'Wes';
    const web = 'algo.es';

    const [name, setName] = useState('Wes')



    const cambiarNombre = (nuevoNombre)=>{
        setName(nuevoNombre)
    }

  return (
    <div>
        <h1>First component</h1>
        <p>Mi nombre es: {name}</p>

        <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='cambiar nombre'/>

        <button onClick={e => cambiarNombre("Wesley A.")}>cambiarNombre</button>
    </div>
  )
}
