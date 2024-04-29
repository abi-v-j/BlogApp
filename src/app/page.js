import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div>
      <video
        src="/trailer.mp4"
        width="100%"
        height="400"
        autoplay
        controls
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
