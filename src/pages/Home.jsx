import Hero from "../components/Hero.jsx";
import FeaturedCollection from "../components/FeaturedCollection.jsx";
import OurStory from "../components/OurStory.jsx";
import CollectionTiles from "../components/CollectionTiles.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <OurStory />
      <CollectionTiles />
    </>
  );
}
