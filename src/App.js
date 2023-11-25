import Footer from './components/Footer';
import Header from "./components/Header";
import Searchbox from './components/Searchbox';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import MainHighlight from './components/MainHighlight';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Searchbox/>
     <MainHighlight/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
