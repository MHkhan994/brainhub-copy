import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Companies from "./companies";
import Projects from "./Projects";
import MobileNav from "../Shared/MobileNav";

const Home = () => {

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-dark relative overflow-hidden">
            <div className="lg:block hidden">
                <Navbar></Navbar>
            </div>
            <div className="block lg:hidden">
                <MobileNav></MobileNav>
            </div>
            <div className={`w-full z-10 lg:fixed top-0 left-0`}>
                <Banner scrollY={scrollY} />
            </div>
            <div className="z-40 relative lg:mt-[110vh] w-full">
                <Companies></Companies>
            </div>
            <Projects></Projects>
        </div>
    );
};

export default Home;
