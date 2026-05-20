import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import v1 from "../../assets/images/download (1).jpeg";
import v2 from "../../assets/images/download (2).jpeg";
import v3 from "../../assets/images/download.jpeg";
import v4 from "../../assets/images/vendor-6-CmmiMxIm.jpg";
import v5 from "../../assets/images/vendor-7-BBAmhwW7 (1).jpg";

function Slider() {
  return (
    <div className="Slider">
      <div className="container">
        <div className="slide-bar shadow-sm">
          <Swiper
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            speed={1000}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="my-row"
          >
            <SwiperSlide>
              <img src={v1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={v2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={v3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={v4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={v5} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Slider;
