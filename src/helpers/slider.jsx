import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

<div className="carrusel">
<Swiper
  spaceBetween={50}
  slidesPerView={4}
  onSlideChange={() => console.log("slide change")}
  onSwiper={(swiper) => console.log(swiper)}
>
  {productos.map((prod) => (
    <SwiperSlide key={prod.id}>
      {/* Renderiza tu componente de Item con el producto */}
      <Item producto={prod} />
    </SwiperSlide>
  ))}
</Swiper>
</div>