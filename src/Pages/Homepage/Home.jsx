import Navbar from "../Shared/Navbar";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="min-h-screen bg-dark h-[300vh]">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="h-screen z-40 w-full bg-white"></div>
        </div>
    );
};

export default Home;