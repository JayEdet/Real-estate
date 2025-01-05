export default function Contact() {
  return (
    <div>
      <div
        className="hero w-full h-80 bg-cover object-cover bg-fixed relative inset-0 aspect-auto"
        style={{ backgroundImage: "url('/phone.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center">
          <div className="writeup">
            <h3 className="text-white">Contact us</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
