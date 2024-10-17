import Banner from "./Banner.jsx";
import Cards from "./Cards.jsx";

const Home = () => {
  return (
   <>
       <Banner />
      <div className='grid grid-cols-3 m-4'>
          <Cards />
          <Cards />
          <Cards />
      </div>
   </>
  );
};

export default Home;
