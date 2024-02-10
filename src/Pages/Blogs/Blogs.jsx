import blogs from '../../../public/blogs.json'
import { CgCalendarDates } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa";

const Blogs = () => {
    return (
        <div className="lg:px-40 md:px-28 sm:px-18 px-12 py-12">
            <div>
                <p className="text-sm font-semibold text-[#CDB30C]">OUR BLOG</p>
                <div className="py-4 flex items-center justify-between">
                    <h2 className="lg:text-4xl font-bold lg:w-[40%] leading-10 team_head">RECENT POST</h2>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-4'>
                {
                    blogs.map((data, index) => <div key={index}>
                        <div className='cursor-pointer'>
                            <div><img src={data.img} alt="" /></div>
                            <div className='px-8'>
                                <div className='flex items-center justify-center space-x-3 text-sm font-medium rounded mt-[-5vh] bg-[#fff] py-2 z-10 relative text-center'>
                                    <p className='flex items-center space-x-1'><span className='text-[#CDB30C]'><CgCalendarDates /></span> <span>{data.date}</span></p> 

                                    <p className='flex items-center space-x-1 uppercase'><span className='text-[#CDB30C]'><FaRegUser /></span> <span>{data.post}</span></p>

                                    <p className='flex items-center space-x-1'><span className='text-[#CDB30C]'><FaRegCommentDots /></span> <span>{data.comment}</span></p>
                                </div>

                                <div className='py-4 text-center group'>
                                     <h2 className='text-lg font-bold group-hover:text-[#CDB30C] duration-300'>{data.title}</h2>
                                     <p className='py-1 text-[#4f4f4f]'>{data.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;