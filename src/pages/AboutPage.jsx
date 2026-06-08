// AboutPage.jsx
import  './AboutPage.css';
import imageOne from './image.jpg';           // локальная картинка
// или import family1976 from './family-1976.jpg';

const AboutPage = () => {
  return (
    <div className="container">
      <h1 className="title">Наша история</h1>

      <img
        src="https://images.unsplash.com/photo-1764816655596-199bba11e539?..."
        alt="Семья Гризель основывает кондитерскую в 1976 году"
        className="image"
      />

      <p className="text">
        Наша история началась в далёком <strong>1976 году</strong>, когда семья
        <strong> Гризель</strong> открыла небольшую кондитерскую, вдохновлённую
        любовью к настоящему шоколаду и семейным традициям.
      </p>

      <img
        src={imageOne}
        alt="Ручное изготовление шоколада мастерами Grisel Family"
        className="image"
      />

      <p className="text">
        С самого начала мы сделали выбор в пользу качества: используем только
        отборные какао-бобы, свежие орехи и натуральные ингредиенты...
      </p>

      <p className="text">
        За десятилетия работы наш магазин стал семейным делом...
      </p>

      <img
        src="https://images.unsplash.com/photo-1745879985235-d3f2ad8b58c3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Процесс создания шоколадных конфет на производстве Grisel"
        className="image"
      />

      <p className="text">
        Вся наша продукция сертифицирована и соответствует строгим стандартам...
      </p>

      <p className="conclusion">
        <strong>Grisel Family Chocolates</strong> — это история, вкус и любовь,
        которые мы создаём для вас уже почти 50 лет 🤎
      </p>
    </div>
  );
};

export default AboutPage;