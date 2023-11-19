import { Card } from "./Card"

export const CardsAnime = ({animeData=[]}) => {

  console.log(animeData)
  return (
    <div className="md:w-3/5 text-center font-bold h-screen overflow-y-scroll ml-5">
        <h1>CardAnime</h1>

        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2 ">
          {
            animeData ? (
              
              animeData.map( data =>
                <Card 
                  key={data.id} 
                  data={data}
                />
              )

            ):(
              
              console.log('No tiene nada ')
            )
          }
        </div>
    </div>
  )
}
