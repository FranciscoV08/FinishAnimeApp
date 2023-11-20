import { useEffect, useState } from 'react'
import { CardsAnime } from './components/CardsAnime.jsx'
import { Header } from './components/Header'
import { Search } from './components/Search'

function App() {

  const [animeName, setAnimeName] = useState()
  const [animeData, setAnimeData] = useState()
  const [favorito, setFavorito] = useState([])

// Solo cuando haga click manda el name del anime al estado padre
  const nameAdd = (name) => {
    setAnimeName(name)
  } 

  const favoritosAdd = (dato) => {

    setFavorito([...favorito, dato])
    console.log(favorito)
  }
  
  useEffect(() => {
    getGifs(animeName)
  }, [animeName])
  
  //Esto es una buena practica ya que el componente no reprosesara la funcion
  const getGifs = async(category) =>{
    const url = `https://api.jikan.moe/v4/anime?q=${category}&limit=5`;
    const resp = await fetch( url );          
    const { data } = await resp.json();

    // console.log(data)

    const animes = data.map( anime => (
        {
            id: anime.mal_id,
            title: anime.title,
            url: anime.images.jpg.image_url
        }
    ))
    setAnimeData( animes )
    // return animes;
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <main className='text-center md:flex'>
        <Search 
          nameAdd={nameAdd}
        />
        <CardsAnime 
          animeData={animeData} 
          favoritosAdd={favoritosAdd}

        />
      </main>

    </>
  )
}

export default App
