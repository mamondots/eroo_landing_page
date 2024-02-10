import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className="lg:px-40 md:px-28 sm:px-18 px-12 relative z-10">
            <div className="newsletter_bg flex items-center justify-center flex-col py-12 text-center rounded-md z-10 relative">
                <div className='z-10 relative text-[#fff]'>
                    <h2 className='text-2xl font-semibold tracking-wider'>JOIN US NEWSLETTER</h2>
                    <p className='py-2 text-[#ebe9e9] text-lg'>Sign Up to our Newsletter and get our latest news update</p>

                    <div>
                        <form className=' bg-[#fff] flex items-center rounded'>
                             <input className='w-full px-2 outline-none text-[#9d8b19]' type="text" placeholder='Enter email address..' />
                             <button className='px-6 py-3 bg-[#9d8b19] hover:bg-[#262626] duration-300'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;