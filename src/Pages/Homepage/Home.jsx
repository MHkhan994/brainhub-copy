import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Companies from "./companies";

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
            <Navbar />
            <div className="fixed w-full top-0 z-10">
                <Banner scrollY={scrollY} />
            </div>
            <div className="z-40 relative mt-[110vh] w-full">
                <Companies></Companies>
            </div>
        </div>
    );
};

export default Home;
