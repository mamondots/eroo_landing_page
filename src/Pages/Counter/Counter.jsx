import './Counter.css'
import { GrNotes } from "react-icons/gr";
import { GiHumanTarget } from "react-icons/gi";
import { MdOutlineRoomService } from "react-icons/md";
import { LuSmartphoneNfc } from "react-icons/lu";
import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [countStart, setCountStart] = useState(false)
    return (
        <div className="lg:px-40 md:px-28 sm:px-18 px-12 py-20 counter_bg bg-fixed">
            <div className='z-10 relative'>
                <ScrollTrigger 
                 onEnter={() => setCountStart(true)}
                 onExit={() => setCountStart(false)}
                className='grid lg:grid-cols-4 gap-6'>
                        <div className='flex items-center space-x-3'>
                            <div className='px-4 py-4 bg-[#CDB30C] rounded text-[#fff] text-4xl'>
                                <p><GrNotes /></p>
                            </div>

                            <div>
                                <p className='text-4xl text-[#fff] font-bold py-1'>
                                    {
                                      countStart  &&<CountUp
                                        start={0}
                                        end={4800}
                                        duration={2.75}
                                    >

                                    </CountUp>
                                    }
                                </p>
                                <h2 className='font-bold py-1 text-[#fff]'>PROJECT COMPLETED</h2>
                            </div>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <div className='px-4 py-4 bg-[#CDB30C] rounded text-[#fff] text-4xl'>
                                <p><GiHumanTarget /></p>
                            </div>

                            <div>
                                <p className='text-4xl text-[#fff] font-bold py-1'>
                                {
                                      countStart  &&<CountUp
                                        start={0}
                                        end={1000}
                                        duration={2.75}
                                    >

                                    </CountUp>
                                    }
                                </p>
                                <h2 className='font-bold py-1 text-[#fff]'>OUR STAFF</h2>
                            </div>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <div className='px-4 py-4 bg-[#CDB30C] rounded text-[#fff] text-4xl'>
                                <p><MdOutlineRoomService /></p>
                            </div>

                            <div>
                                <p className='text-4xl text-[#fff] font-bold py-1'>
                                {
                                      countStart  &&<CountUp
                                        start={0}
                                        end={350}
                                        duration={2.75}
                                    >

                                    </CountUp>
                                    }
                                </p>
                                <h2 className='font-bold py-1 text-[#fff]'>SERVICES PROVIDE</h2>
                            </div>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <div className='px-4 py-4 bg-[#CDB30C] rounded text-[#fff] text-4xl'>
                                <p><LuSmartphoneNfc /></p>
                            </div>

                            <div>
                                <p className='text-4xl text-[#fff] font-bold py-1'>
                                {
                                      countStart  &&<CountUp
                                        start={0}
                                        end={7600}
                                        duration={2.75}
                                    >

                                    </CountUp>
                                    }
                                </p>
                                <h2 className='font-bold py-1 text-[#fff]'>HAPPY CUSTOMERS</h2>
                            </div>
                        </div>
                </ScrollTrigger>

            </div>
        </div>
    );
};

export default Counter;