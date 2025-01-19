export default function Cities({ images, state }) {
  return (
    <div className="relative flex flex-col justify-start w-full md:max-w-64 h-auto rounded-md overflow-hidden cursor-pointer ">
      <span className="absolute inline-flex items-center rounded-md bg-black bg-opacity-50 px-3 py-1 text-xs font-medium text-offwhite ring-1 ring-inset ring-blue-700/10">
        {state}
      </span>
      <img
        src={images}
        alt=""
        className="w-full object-cover  h-full hover:scale-1 ease-out"
      />
    </div>
  );
}
