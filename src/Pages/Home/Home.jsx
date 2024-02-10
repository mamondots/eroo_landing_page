import Solution from "../../Solution/Solution";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Counter from "../Counter/Counter";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter/Newsletter";
import Portfolio from "../Portfolio/Portfolio";
import Team from "../Team/Team";
import Testimonal from "../Testimonal/Testimonal";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Solution></Solution>
            <About></About>
            <Counter></Counter>
            <Team></Team>
            <Portfolio></Portfolio>
            <Testimonal></Testimonal>
            <Blogs></Blogs>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;