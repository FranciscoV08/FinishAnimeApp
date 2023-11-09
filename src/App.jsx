import { useEffect, useState } from 'react'


function App() {

  // estados del componente
  const [image, setImage] = useState()
  const [search, setSearch] = useState('Mushoku tensei')
  const [dataAnime, setDataAnime] = useState()


  // Peticion a la api
  const fetchApi = async () => {
    const url = `https://api.jikan.moe/v4/anime?q=${search}&limit=20`;

    const resp = await fetch(url);
    const respJson = await resp.json();

    setDataAnime(respJson)
  }

  const filtroObjet = ({data}) => {
    const urlImage =data[0].images.jpg.image_url; 
    setImage(urlImage)
  }

  useEffect(() => {
    fetchApi()  
  }, [search])

// fafjklñfsja
  // Funcion para cambiar la busqueda 
  const searchAnime = (e) => {

    console.log(e.target.value)
    const anime = e.target.value;
    setSearch(anime)

  }

  return (
    <>
     <h1>Imagenes del api</h1>

    <input 
      type="text" 
      value={search}
      onChange={searchAnime}
    />
    <button 
      type="submit"
      onClick={() => filtroObjet(dataAnime)}
    >Buscar</button>

    <div>
       <img src={image} alt="imageAnime" />
    </div>
    </>
  )
}

export default App
