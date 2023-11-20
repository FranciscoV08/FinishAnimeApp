
export const Card = ({data, favoritosAdd}) => {
  const {url, title} = data;
  
  return (
    <div className="bg-white p-5 cursor-pointer shadow-xl">
        <div>
            <img src={url} alt="imagen.jpg" className="mx-auto"/>
        </div>
        <div>
            <h1>{title}</h1>
        </div>
        <button 
          className="bg-blue-400 p-2 my-2 rounded-lg text-white shadow-lg hover:text-gray-800"
          onClick={ ( ) => favoritosAdd(data)}
          >Guardar</button>
    </div>
  )
}
