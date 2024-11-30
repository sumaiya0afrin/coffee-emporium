import banner from "../assets/images/more/3.png";
import aromaImage from "../assets/images/icons/1.png";
import qualityImage from "../assets/images/icons/2.png";
import gradesImage from "../assets/images/icons/3.png";
import roastingImage from "../assets/images/icons/4.png";
const Banner = () => {
  const features = [
    {
      image: aromaImage,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      image: qualityImage,
      title: "High Quality",
      description: "We served the coffee to you maintaining the best quality",
    },
    {
      image: gradesImage,
      title: "Pure Grades",
      description:
        "The coffee is made of the green coffee beans which you will love",
    },
    {
      image: roastingImage,
      title: "Proper Roasting",
      description:
        "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];
  return (
    <div>
      <div
        className="hero h-[530px] md:h-[650px] justify-end relative"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-content text-neutral-content lg:py-4 lg:pl-0 lg:pr-24">
          <div>
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5">
              It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
              the nostalgia back!! Your companion of{" "}
              <br className="hidden md:block" /> every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn bg-[#E3B577] border-[#E3B577] text-xl md:text-2xl hover:border hover:border-white hover:bg-transparent hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#ECEAE3]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center w-4/5 mx-auto">
          {/* card-1 */}
          {features.map((feature, idx) => (
            <div key={idx} className="card ">
              <div className="card-body">
                <div className="w-fit h-fit">
                  <img src={feature.image} alt="" className="w-full h-full" />
                </div>
                <h2 className="card-title font-normal text-2xl md:text-3xl">
                  {feature.title}
                </h2>
                <p className="text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
