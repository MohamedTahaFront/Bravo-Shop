import "./Header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              effect="fade"
              pagination={{ clickable: true }}
              speed={1500}
              className="mySlider"
            >
              <SwiperSlide>
                <div className="cover men h-100">
                  <b>Men Fashon</b>
                  <p className="lh-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Magni quaerat, tempora, omnis assumenda temporibus
                    repudiandae repellat nam iure consectetur quas iusto
                    cupiditate expedita esse inventore eum ea reprehenderit!
                    Tempore, cum.
                  </p>
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cover women h-100">
                  <b>Women Fashon</b>
                  <p className="lh-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Magni quaerat, tempora, omnis assumenda temporibus
                    repudiandae repellat nam iure consectetur quas iusto
                    cupiditate expedita esse inventore eum ea reprehenderit!
                    Tempore, cum.
                  </p>
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cover kids h-100">
                  <b>Kids Fashon</b>
                  <p className="lh-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Magni quaerat, tempora, omnis assumenda temporibus
                    repudiandae repellat nam iure consectetur quas iusto
                    cupiditate expedita esse inventore eum ea reprehenderit!
                    Tempore, cum.
                  </p>
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="info h-100">
              <div className="box">
                <p>Save 20%</p>
                <b>Special Offer</b>
                <button className="btn btn-primary">Shop Now</button>
              </div>
              <div className="box">
                <p>Save 20%</p>
                <b>Special Offer</b>
                <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
