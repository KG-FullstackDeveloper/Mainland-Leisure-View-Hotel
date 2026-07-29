import { cards } from "../../data/photo";
import "../../styles/photo.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Photo() {
  return (
    <>
      <section className="photo">
        <div className="photo-content">
          <h3>WHAT OUR GUESTS SAYS</h3>
          <h1>Guest Testimonials</h1>
        </div>

        <div className="photos">
          <button className="arr">
            <ChevronLeft size={35} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".arr",
              nextEl: ".ar",
            }}
            slidesPerView={3}
            spaceBetween={30}
            loop={false}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="test">
                  <h3>{card.id}</h3>
                  <p className="card-description">{card.description}</p>
                  <h4>{card.title}</h4>
                  <p>
                    <span>★★★★</span>★
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="ar">
            <ChevronRight size={35} />
          </button>
        </div>
      </section>
    </>
  );
}

export default Photo;
