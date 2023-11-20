import { useState } from 'react';


  /* La unica funcion hasta ahora del Componente es :
    -Guardar en el propio estado el nombre
    -Mediante el uso de la properti mandar el nombre al padre, solo si se hace click en el input  
  */

export const Search = ( {nameAdd} ) => {

  // Estados del componente 
  const [anime, setAnime] = useState('Mushoku tensei');

  // Guardar el nombre al estado del componente - Mediante se escribe
  const changeName = ({ target }) => {
    setAnime(target.value);
  };
  
  // Manda el nombre al estado padre. Y resetea el input  
  const addName = () => {
    nameAdd(anime);
    setAnime('');
  };


  return (
    <>
      <div className="bg-gray-300 rounded-xl md:w-2/5 mb-5 py-5 h-1/2">
          <h1 className="text-blue-700 font-bold text-center mb5">Busca tu Anime </h1>
        <div>

          <input 
            type="text" 
            placeholder='Busca tu anime'
            value={anime} 
            onChange={changeName} 
          />

          <button 
            className="bg-slate-600 rounded-md mx-2 p-1 text-white "
            type="submit"
            onClick={() => addName()}

          >Buscar</button>

        </div>
      </div>
      
    </>
  );
};
