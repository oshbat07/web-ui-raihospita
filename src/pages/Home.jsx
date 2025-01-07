import Hero from "../components/Hero";
import '../styles/Home.css'

function Home({isModalOpen, setModalOpen}) {
    return (
      <div className="home">
        <Hero isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        {/* <div className="text">SOME TEXT</div> */}
      </div>
    );
  }
  
  export default Home;