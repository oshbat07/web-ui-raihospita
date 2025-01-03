import Hero from "../components/Hero";
import '../styles/Home.css'

function Home({isModalOpen, setModalOpen}) {
    return (
      <div className="home">
        <Hero isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
      </div>
    );
  }
  
  export default Home;