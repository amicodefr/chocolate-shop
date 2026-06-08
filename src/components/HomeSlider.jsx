import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    name: "Молочный шоколад",
    image:
      "https://images.unsplash.com/photo-1678879425633-c74836db52ab?q=80&w=722&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Белый шоколад",
    image:
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=736&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Печенье северное",
    image:
      "https://images.unsplash.com/photo-1581841203673-40dd2990ed9c?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Лимонный чизкейк",
    image:
      "https://images.unsplash.com/photo-1702925614886-50ad13c88d3f?q=80&w=789&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Эклер с карамельным вкусом",
    image:
      "https://images.unsplash.com/photo-1600617953189-c481da8fff8a?q=80&w=686&auto=format&fit=crop",
  },
   {
    id: 6,
    name: "Шоколадный мусс с ягодами",
    image:
      "https://images.unsplash.com/photo-1661667592582-feb71ae595e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <div className="home-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.name} />
            <h2>{slide.name}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
