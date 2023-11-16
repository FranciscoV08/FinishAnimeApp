
export const Card = ({data}) => {
  const img = data.images.jpg.image_url;
  return (
    <div className="bg-white p-5 ">
        <div>
            <h1>Mushoku tensei</h1>
        </div>
        <div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}
