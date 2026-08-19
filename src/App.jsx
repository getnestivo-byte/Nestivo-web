import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedCollection from "./components/FeaturedCollection.jsx";
import OurStory from "./components/OurStory.jsx";
import CollectionTiles from "./components/CollectionTiles.jsx";
import EmailSignup from "./components/EmailSignup.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Nav />
      <Hero />
      <FeaturedCollection />
      <OurStory />
      <CollectionTiles />
      <EmailSignup />
      <Footer />
    </div>
  );
}

export default App;
