import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  History,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { useState } from "react";
import "swiper/swiper-bundle.css";
import "../styles/memeSlider.css";

import information from "../data/information.json";
SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel, History]);

export default function MemeSlider() {
 const [isClose, setIsClose] = useState(true);
  function toggle_visibility() {
    setIsClose(!isClose);
  }
  const slides = information.map((item) => (
    <SwiperSlide
      key={`slide-${item.id}`}
      data-history={item.imageName.split(".")[0]}
    >
      <div className="image-text-container">
        <img src={require(`../images/${item.imageName}`).default} alt="" />
        <p className="meme-tips-header">
          Tips from SDA9!
          <br />
        </p>
        <p className="meme-tips">{item.tips}</p>
        <div className="container">
          <button id="toggle-description" onClick={toggle_visibility}>
            Explain this meme!{" "}
          </button>
        </div>
        <p
          id="explained"
          className={`meme-description ${isClose ? "close" : "open"}`}
        >
          {item.description}
        </p>
      </div>
    </SwiperSlide>
  ));

  return (
    <div>
      <Swiper
        id="slider"
        spaceBetween={50}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        history={{
          replaceState: true,
        }}
      >
        {slides}
      </Swiper>
    </div>
  );
}
