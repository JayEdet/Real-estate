/* images */
import newHome from "/new house.jpg";
import businessImage from "/Click for $10 worth of Bitcoin.jpeg";
import skyScrapper from "/skyscrapper.jpg";
export default function About() {
  return (
    <div className="main w-full">
      <div
        className="relative hero w-full h-80 p-8 bg-cover object-contain bg-fixed bg-center"
        style={{ backgroundImage: "url('/new house.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <h3 className="text-white">About us</h3>
        </div>
      </div>
      {/* our clients */}
      <div className="p-4 flex flex-col gap-4 md:flex-row justify-center py-16">
        <div className="rounded-lg p-4 md:max-w-lg bg-fadedBlue">
          <h3 className="text-center text-heroText font-bold text-xl bg-myGradient bg-clip-text text-transparent">
            Our clients
          </h3>
          <p className="text-heroText md:max-w-lg ">
            We take pride in serving a diverse clientele at Elitedreams Realty
            from corporate organization, private individuals/firms,government
            agencies, international bodies etc. <br />
            <br /> Elitedreams Realty connects buyers and sellers. We also
            advertise properties through a lens of authenticity.
          </p>
          <h3 className="mt-4">
            We connect{" "}
            <span className="font-heroText font-bold text-lg italic bg-myGradient bg-clip-text text-transparent">
              Buyers
            </span>{" "}
            and
            <span className="font-heroText font-bold text-lg italic bg-myGradient bg-clip-text text-transparent">
              {" "}
              Sellers
            </span>
          </h3>
        </div>
        {/*Business div/coperation */}
        <div className="rounded-md md:max-w-sm max-h-80 overflow-hidden">
          <img
            src={businessImage}
            alt="business image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Mission */}
      <div className="p-4 flex flex-col gap-4 justify-center md:flex-row">
        <div className="rounded-md p-4 bg-fadedBlue md:max-w-lg">
          <h3 className="text-heroText text-center font-bold text-xl bg-myGradient bg-clip-text text-transparent">
            Our mission
          </h3>
          <p>
            Our mission is to provide exceptional service through integrity,
            professionalism and client focused solution. <br />
            <br />
            Our mission is to empower individuals and businesses to achieve
            their real estate goals by offering a comprehensive range of
            services, including property sales, leasing, management, and
            consultancy. We aim to exceed expectations by prioritizing
            integrity, professionalism, and customer satisfaction in all our
            endeavors.
          </p>
        </div>
        <div className="overflow-hidden md:max-w-sm max-h-80 md:order-first md:">
          <img
            src={skyScrapper}
            className="w-full h-full object-cover"
            alt="skyscrapper"
          />
        </div>
      </div>
    </div>
  );
}
