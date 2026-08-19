import Seo from "../components/Seo.jsx";
import Hero from "../components/Hero.jsx";
import FeaturedCollection from "../components/FeaturedCollection.jsx";
import OurStory from "../components/OurStory.jsx";
import CollectionTiles from "../components/CollectionTiles.jsx";

export default function Home() {
  return (
    <>
      <Seo
        raw
        title="Nestivo — City-Map & Retro-Badge Tees"
        description="Minimalist tees inspired by city grids and retro travel badges. Printed in small batches on heavyweight cotton."
      />
      <Hero />
      <FeaturedCollection />
      <OurStory />
      <CollectionTiles />
    </>
  );
}
