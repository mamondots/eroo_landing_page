import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import testimonal from '../../../public/testimonal.json'
import './Testimonal.css'
const Testimonal = () => {
    var settings = {
        dots:true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
          ]
    };
    return (
        <div className="lg:px-40 md:px-28 sm:px-18 px-12 py-20">
            <div>
                <p className="text-sm font-semibold text-[#CDB30C]">TESTIMONIAL</p>
                <div className="py-4 flex items-center justify-between">
                    <h2 className="lg:text-4xl font-bold lg:w-[40%] leading-10 team_head">PEOPLE SAY ABOUT OUR WORKS</h2>
                </div>
            </div>

            <div className="testimonal_arrow">
                <Slider {...settings}>
                    {
                        testimonal.map((data,index) => <div key={index} className="">
                             <div className="mx-2 px-4 py-4 bg-[#cfcece31]">
                                 <p className="text-[#2626269d]">{data.text}</p>
                                 <div className="py-4 flex items-center space-x-2">
                                    <div>
                                        <img className="w-[60px] h-[60px] rounded-full" src={data.img} alt="" />
                                    </div>

                                    <div>
                                         <h2 className="text-xl font-medium">{data.name}</h2>
                                         <p className="text-[#CDB30C]">{data.title}</p>
                                    </div>
                                 </div>
                             </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Testimonal;