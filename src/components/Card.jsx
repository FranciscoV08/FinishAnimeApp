
export const Card = ({data}) => {
  const {url, title} = data;

  return (
    <div className="bg-white p-5 cursor-pointer shadow-xl ">
        <div>
            <img src={url} alt="" />
        </div>
        <div>
            <h1>{title}</h1>
        </div>
    </div>
  )
}
