
export const Card = ({data}) => {
  const {id, url, title} = data;

  return (
    <div className="bg-white p-5 ">
        <div>
            <img src={url} alt="" />
        </div>
        <div>
            <h1>{title}</h1>
        </div>
    </div>
  )
}
