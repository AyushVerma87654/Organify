import type { FC } from "react";
import NavBar from "./NavBar";
import ImageSlider from "./ImageSlider";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div>
      <NavBar />
      <ImageSlider />
    </div>
  );
};

export default App;
