import { IoIosArrowForward } from "react-icons/io";
import portfolio from '../../../public/portfolio.json'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className="">
            <div className="bg-[#262626] lg:px-40 md:px-28 sm:px-18 px-12 py-20 pb-40">
                <div>
                    <p className="text-sm font-semibold text-[#CDB30C]">RECENT PORTFOLIO</p>
                    <div className="py-4 flex items-center justify-between">
                        <h2 className="lg:text-4xl font-bold lg:w-[40%] leading-10 team_head text-[#fff]">WE HAVE DONE
                            MANY LATEST PROJECTS
                        </h2>
                        <p className="flex items-center space-x-1 bg-[#CDB30C] text-[#fff] text-sm font-medium py-3 px-6 cursor-pointer hover:bg-[#262626] duration-300"><span>VIEW ALL PROJECTS </span> <span><IoIosArrowForward /></span></p>
                    </div>
                </div>
            </div>

            <div className="lg:px-40 md:px-28 sm:px-18 px-12 mt-[-14vh]">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 gap-4">
                    {
                        portfolio.map((data, index) => <div key={index}>
                            <div className="portfolio_full_card">
                                <div className="relative portfolio_card">
                                    <img className="h-[60vh] object-cover w-full" src={data.img} alt="" />
                                    <div className="flex items-center justify-between px-4 portfolio_details cursor-pointer w-full text-[#fff] relative z-10">
                                        <div>
                                            <p className="font-medium text-[#CDB30C] text-sm">{data.title}</p>
                                            <h2 className="text-lg font-medium">{data.name}</h2>
                                        </div>
                                        <div>
                                            <p className="py-2 px-2 rounded-full bg-[#CDB30C] text-[#fff]"><IoIosArrowForward /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;