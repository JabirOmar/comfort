
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import Explore from './components/explore/Explore';
import Booking from './components/book/Booking'
import About from './components/about/About'
import './App.css';


function App() {

  window.onload = () => {
    const loadScreen = document.getElementById('preloader')
    loadScreen.style.display = "none"
};
  return (
    <>
    <div id='preloader'>
      <h3>Loading please wait...</h3>
    </div>
    <NavBar />
    <section className='contentes'>
    <div>

    </div>
      <Home/>
      <Explore/>
      <Booking/>
      <About/>
    </section>
    </>
  );
}

export default App;
