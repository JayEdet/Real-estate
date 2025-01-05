export default function Card({ image, description, price, state }) {
  return (
    <div className="card max-w-full rounded-md overflow-hidden hover:shadow-xl cursor-pointer md:max-w-80 ">
      <div className="imageDiv bg-cover bg-center">
        <img
          src={image}
          alt="carcass building for sale"
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="flex flex-col justify-evenly p-4 bg-white text-blue-950 ">
        <h3 className="hero">{description}</h3>
        <p>Behind police barracks Apo, {state}</p>
        <h5 className="price">{price}</h5>
      </div>
    </div>
  );
}
