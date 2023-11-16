
export const Header = () => {
  return (
    <div className="flex-col text-center justify-between items-center bg-gray-300 mb-5">
        <div className="text-2xl font-bold uppercase">
            <h1> Finish my <span className="text-blue-500">anime</span> app</h1>
        </div>
        <div className=" ">
            <a className="mx-2 hover:text-blue-500" href="#">Completados</a>
            <a className="mx-2 hover:text-blue-500" href="#">En proceso</a>
            <a className="mx-2 hover:text-blue-500" href="#">Favoritos</a>
        </div>

    </div>
  )
}
