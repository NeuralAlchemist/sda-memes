import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { History, Mousewheel, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";
import "../styles/memeSlider.css";

import information from "../data/information.json";
SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel, History]);

export default function MemeSlider() {
    const slides = information.map((item) => 
    <SwiperSlide key={`slide-${item.id}`} data-history={item.imageName.split(".")[0]}>
        {console.log(item.imageName.split(".")[0])}
        <img src={require(`../images/${item.imageName}`).default} alt=""/>
    </SwiperSlide>)

    return (
        <div>
            <Swiper 
                id="slider"
                spaceBetween={50}
                navigation
                pagination={{
                    clickable:true,
                    dynamicBullets:true}}
                mousewheel={{
                    invert:true
                }}
                loop={true}
                history={{
                    replaceState:true
                }}>
                {slides}
            </Swiper>
        </div>
    );
}
