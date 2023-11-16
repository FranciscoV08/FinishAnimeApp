import { useEffect, useState } from 'react'



export const Search = ( {prueba} ) => {

  // Estados del componente 
  const [anime, setAnime] = useState('Mushoku tensei')
  /* 
    Tareas:
      -Guardar el input al estado del componente
      -al apretar buscar. Realizar la peticion 
  */




  // Guardar el nombre al estado del compoente
  const addName = ( {target} ) => {
    const input = target.value;
    setAnime(input)
  }

  //llamando a la funcion fetch
  const dataFetch = () => {
    
    // validacion
    if(anime.length >= 1){
      console.log('Tiene algo llamando al api')
      fetchApi()
    }else{
      console.log('No tiene nada no llamo a nadie')
      return
    }

  }



  // Peticion a la api
    const fetchApi = async () => {
    const url = `https://api.jikan.moe/v4/anime?q=${anime}&limit=15`;

    const resp = await fetch(url);
    const respJson = await resp.json();

    prueba(respJson)
    
  }


  return (
    <div className="bg-gray-300 rounded-xl md:w-2/5 mb-5 py-5 h-1/2">

        <h1 className="text-blue-700 font-bold text-center mb5">Busca tu Anime </h1>

      <div>

        <input 
          type="text" 
          value={anime} 
          onChange={addName} 
        />

        <button 
          className="bg-slate-600 rounded-md mx-2 p-1 text-white "
          type="submit"
          onClick={() => dataFetch()}

        >Buscar</button>

      </div>

    </div>
  );
};
