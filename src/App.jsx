import { useEffect, useState } from 'react'
import { CardsAnime } from './components/CardsAnime.jsx'
import { Header } from './components/Header'
import { Pcard } from './components/Pcard.jsx'
import { Pfooter } from './components/Pfooter.jsx'
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
      <footer className='bg-gray-400'>
      <div className="text-2xl font-bold uppercase text-center">
            <h1> Tus Guardados <span className="text-blue-500">Estan aqui</span> </h1>
        </div>
         <div  className="md:w-3/5 text-center font-bold w-screen overflow-x-scroll ml-5">
          <div className=" flex">
            {
              // Si animeData es verdadero, la expresión que le sigue (animeData.map(...)) se ejecuta. Si animeData es falso, la expresión se detiene y no se ejecuta el mapeo.
             favorito.length > 0 ? favorito.map( data => 
              <Pcard
              key={data.id}
              data={data}
              />
              ) : 
              console.log('No hola')
              // favorito.map( data =>
              //     <Card 
              //       key={data.id} 
              //       data={data}
                    
              //     />
              //   )
            }
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
