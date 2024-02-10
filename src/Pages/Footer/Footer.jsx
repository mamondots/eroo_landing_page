import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";


const Footer = () => {
    return (
        <div className="lg:px-40 md:px-28 sm:px-18 px-12 py-20 bg-[#262626] text-white mt-[-8vh]">
            <div className="mt-8 py-8">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4">

                    <div>
                        <h2 className="text-xl font-bold">MAMONDOTS.</h2>
                        <p className="py-4 text-[#aeadad]">
                            Far far away, behind the word mountains, far from the countries.
                        </p>

                        <div className="flex items-center space-x-4">
                            <p className="py-2 px-2 border rounded-full hover:bg-[#CDB30C] duration-300 cursor-pointer"><TiSocialFacebook /></p>
                            <p className="py-2 px-2 border rounded-full hover:bg-[#CDB30C] duration-300 cursor-pointer"><FaInstagram /></p>
                            <p className="py-2 px-2 border rounded-full hover:bg-[#CDB30C] duration-300 cursor-pointer"><FaTwitter /></p>
                            <p className="py-2 px-2 border rounded-full hover:bg-[#CDB30C] duration-300 cursor-pointer"><FaLinkedinIn /></p>
                        </div>
                    </div>


                    <div>
                        <h2>EXPLORE</h2>

                        <ul className="py-4 space-y-2 text-[#aeadad]">
                            <li><a href="">About</a></li>
                            <li><a href="">contact</a></li>
                            <li><a href="">portfolio</a></li>
                            <li><a href="">blog</a></li>
                        </ul>
                    </div>


                    <div>
                        <h2>EXPLORE</h2>

                        <ul className="py-4 space-y-2 text-[#aeadad]">
                            <li><a href="">About</a></li>
                            <li><a href="">contact</a></li>
                            <li><a href="">Privacy & Policy</a></li>
                            <li><a href="">Term & Conditions</a></li>
                        </ul>
                    </div>


                    <div>
                        <h2>EXPLORE</h2>

                        <ul className="py-4 space-y-2 text-[#aeadad]">
                            <li><a href="">About</a></li>
                            <li><a href="">contact</a></li>
                            <li><a href="">portfolio</a></li>
                            <li><a href="">blog</a></li>
                        </ul>
                    </div>


                    <div>
                        <h2>EXPLORE</h2>

                        <ul className="py-4 space-y-2 text-[#aeadad]">
                            <li><a href="">About</a></li>
                            <li><a href="">contact</a></li>
                            <li><a href="">portfolio</a></li>
                            <li><a href="">blog</a></li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Footer;