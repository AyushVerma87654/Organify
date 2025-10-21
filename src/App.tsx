import type { FC } from "react";
import NavBar from "./NavBar";
import ImageSlider from "./ImageSlider";
import FeatureSlider from "./FeatureSlider";
import ProductSpotlightSection from "./ProductSpotlightSection";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="bg-gray-200">
      <NavBar />
      <ImageSlider />
      <FeatureSlider />
      <ProductSpotlightSection />
    </div>
  );
};

export default App;
