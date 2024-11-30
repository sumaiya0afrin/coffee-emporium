import img1 from "../assets/images/cups/Rectangle 9.png";
import img2 from "../assets/images/cups/Rectangle 10.png";
import img3 from "../assets/images/cups/Rectangle 11.png";
import img4 from "../assets/images/cups/Rectangle 12.png";
import img5 from "../assets/images/cups/Rectangle 13.png";
import img6 from "../assets/images/cups/Rectangle 14.png";
import img7 from "../assets/images/cups/Rectangle 15.png";
import img8 from "../assets/images/cups/Rectangle 16.png";

const Follow = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <div className="md:my-28">
      <div className="flex flex-col justify-center items-center mb-12 space-y-2">
        <p>Follow Us Now</p>
        <h2 className="text-3xl lg:text-5xl text-[#331A15]">
          Follow on Instagram
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4">
        {images.map((image, index) => (
          <div key={index} className="text-center">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Follow;
