import { Card } from "./Card"

 /* La funcion de este componente es :
    -Recibir un obj mediante properti para realizar un mapeo 
    -
  */

export const CardsAnime = ({animeData=[], favoritosAdd}) => {

  return (
    <div className="md:w-3/5 text-center font-bold h-screen overflow-y-scroll ml-5">
        <h1>CardAnime</h1>

        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2 ">
          {
            // Si animeData es verdadero, la expresión que le sigue (animeData.map(...)) se ejecuta. Si animeData es falso, la expresión se detiene y no se ejecuta el mapeo.
            animeData  && animeData.map( data =>
                <Card 
                  key={data.id} 
                  data={data}
                  favoritosAdd={favoritosAdd}
                />
              )
          }
        </div>
    </div>
  )
}
