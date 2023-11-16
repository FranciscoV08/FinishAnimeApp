import { useState } from 'react'
import { CardsAnime } from './components/CardsAnime.jsx'
import { Header } from './components/Header'
import { Search } from './components/Search'

function App() {

  const [anime, setanime] = useState('Mushoku tensei')
  const [animeData, setanimeData] = useState([])

  const prueba = (dato) => {
    setanimeData(dato.data)
  }
//   // 

//     // estados del componente
//     const [image, setImage] = useState()
//     const [search, setSearch] = useState('Mushoku tensei')
//     const [dataAnime, setDataAnime] = useState()

    
//   // Peticion a la api
//   const fetchApi = async () => {
//     const url = `https://api.jikan.moe/v4/anime?q=${search}&limit=20`;

//     const resp = await fetch(url);
//     const respJson = await resp.json();

//     setDataAnime(respJson)
//   }

//   const filtroObjet = ({data}) => {
//     const urlImage =data[0].images.jpg.image_url; 
//     setImage(urlImage)
//   }

//   useEffect(() => {
//     fetchApi()  
//   }, [search])

// // fafjklñfsja
//   // Funcion para cambiar la busqueda 
//   const searchAnime = (e) => {

//     console.log(e.target.value)
//     const anime = e.target.value;
//     setSearch(anime)

//   }

//   // 
  return (
    <>
      <header>
        <Header />
      </header>

      <main className='text-center md:flex'>
        <Search prueba={prueba}/>
        <CardsAnime animeData={animeData}/>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
