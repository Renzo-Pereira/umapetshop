import logoDogChow from "../assets/img/LogoDogChow.webp"
import LogoBalanced from "../assets/img/LogoBalanced.webp"
import LogoEquilibrio from "../assets/img/LogoEquilibrio.webp"
import LogoFrost from "../assets/img/LogoFrost.webp"
import LogoHills from "../assets/img/LogoHills.webp"
import LogoEukanuba from "../assets/img/LogoEukanuba.png"
import LogoLager from "../assets/img/LogoLager.webp"
import LogoVitalcanPremium from "../assets/img/LogoVitalcanPremium.png"
import LogoProPlan from "../assets/img/LogoProPlan.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const CarruselDeMarcas = () => {

    return (
        <div className="contenedorMarcas">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="marcas"
        >
          <SwiperSlide>
            <Link to={"/marca/frost"}><img src={LogoFrost} alt="" />Frost</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/marca/balanced"}><img src={LogoBalanced} alt="" />Balanced</Link>
          </SwiperSlide>
          <SwiperSlide>       
            <Link to={"/marca/dogchow"}><img src={logoDogChow} alt="" />Dog Chow</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/marca/eukanuba"}><img src={LogoEukanuba} alt="" />Eukanuba</Link>
          </SwiperSlide>
          <SwiperSlide>
          <Link to={"/marca/hills"}><img src={LogoHills} alt="" />Hill´s</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/marca/equilibrio"}><img src={LogoEquilibrio} alt="" />Equilibrio</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/marca/lager"}><img src={LogoLager} alt="" />Lager</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/marca/premium"}><img src={LogoVitalcanPremium} alt="" />Premium</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/marca/proplan"}><img src={LogoProPlan} alt="" />Pro Plan</Link>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    )
}  

export default CarruselDeMarcas