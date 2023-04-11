import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none'}}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let {slider, slider1, slider2} = props
  const [nav, setNav] = useState({nav1: null, nav2: null})

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2
    })
  }, [])

  const settings = {
    loop:true,
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 
  const next = () =>  {
    slider1.slickNext();
  }
  const previous = () => {
    slider2.slickPrev();
  }

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider asNavFor={nav.nav2}
                    ref={slider => (slider1 = slider)} 
                    {...settings} >
              {/* <div key={1}>
                <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/loa-691-301-max.png"></img>
              </div> */}
              <div key={1}>
                <img src="https://images.hdqwalls.com/download/pizza-baked-chesse-spicy-7t-1280x720.jpg"></img>
              </div>
              <div key={2} className="k2">
                <img src="https://c4.wallpaperflare.com/wallpaper/419/342/435/fire-meat-vegetables-steak-grill-hd-wallpaper-preview.jpg"></img>
              </div>
              <div key={3}>
                <img src="https://images.hdqwalls.com/download/hot-spicy-burger-ys-1360x768.jpg"></img>
              </div>
              <div key={4}>
                <img src="https://c0.wallpaperflare.com/preview/797/39/616/beverage-citrus-close-up-cocktail.jpg"></img>
              </div>
              <div key={4}>
                <img src="https://c4.wallpaperflare.com/wallpaper/666/302/422/food-potato-french-fries-hd-wallpaper-preview.jpg"></img>
              </div>
            </Slider>
            <div className='carousel-left-move' onClick={() => previous()}>
                <div className="prev">
                    <LeftOutlined></LeftOutlined>
                </div>
                <div className="next" onClick={() => next()}>
                    <RightOutlined></RightOutlined>
                </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider asNavFor={nav.nav1}
                    ref={slider => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                     >
              
              <div className="mono">
                Ăn một lần <br></br> nhớ cả đời
              </div>
              <div className="mono">
                Mỹ vị xiêu lòng  <br></br>  thực khách
              </div>
              <div className="mono">
              Đội ngũ nhân viên <br></br> tận tâm
              </div>
              <div className="mono">
              Gửi yêu thương <br></br> trong từng món ăn
              </div>
              <div className="mono">
              Thưởng thức trọn vẹn    <br></br> tinh hoa ẩm thực
              </div>

            </Slider>
          </div>
        </div>
       
          <div className="carousel-right">
          <div className="carousel-right-item">
            <img src="https://cdn.tgdd.vn/Files/2018/12/16/1138609/cach-lam-bo-bit-tet-don-gian-nhung-ngon-tuyet-cu-meo-202201041019494331.jpg"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://c1.wallpaperflare.com/preview/180/267/642/fillet-food-foodie-grilled.jpg"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://images.hdqwalls.com/wallpapers/smoothie-berry-fruit-smoothie-strawberry-af.jpg"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
