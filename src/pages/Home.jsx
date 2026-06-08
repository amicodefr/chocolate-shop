import ChocoVideo from "../components/chocolate/ChocoVideo";
import HomeSlider from "../components/HomeSlider";
import CategoriesBar from "../features/categories/CategoriesBar";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
    <ChocoVideo/>
     <CategoriesBar />
      <section style={{ padding: "60px 0", background: "#faf7f38e" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Наши хиты:
        </h2>
        <div style={{maxWidth: "1200px", margin: "0 auto" }}>
          <HomeSlider />
        </div>
      </section>

  
    
  
    </div>
  );
};

export default Home;
