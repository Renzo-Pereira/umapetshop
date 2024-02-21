import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';


const ItemList = ({ productos, titulo }) => {
  return (
    <div className="carrusel">
      <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={4}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@2": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
        {productos.map((prod) => (
          <SwiperSlide key={prod.id}>
            {/* Renderiza tu componente de Item con el producto */}
            <Item producto={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pagination" />
    </div>
  );
};

export default ItemList;
