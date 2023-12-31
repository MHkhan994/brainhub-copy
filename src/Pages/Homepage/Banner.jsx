import { BiRightArrowAlt, BiSolidQuoteSingleRight } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import { useRef, useState } from 'react'
import imgAws from '../../assets/aws.webp'
import imgBrain from '../../assets/brainhub.png'
import imgJs from '../../assets/js.webp'
import imgReact from '../../assets/react.png'
import imgRedux from '../../assets/redux.png'

import avatar1 from '../../assets/avatar1.webp';
import avatar2 from '../../assets/avatar2.webp';
import avatar3 from '../../assets/avatar3.webp';
import avatar4 from '../../assets/avatar4.webp';

const Banner = ({ scrollY }) => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);

    const avatarImgs = [avatar1, avatar2, avatar3, avatar4]
    const bannerRef = useRef()

    const handleMouseMove = (e) => {
        setTimeout(() => {
            setCursorX(e.clientX / 40);
            setCursorY(e.clientY / 40);
        }, 400);
    }


    return (
        <div className={`relative max-h-[800px] w-full ${scrollY > 700 ? 'lg:invisible lg:hidden' : ''} pb-10 pt-40 md:pt-0 md:pb-28`}>
            <div className={`w-full overflow-hidden bg-dark`} style={{ opacity: 1 - scrollY / 500 }}>
                <div ref={bannerRef} className={`transition-all flex w-full flex-col items-center my-container text-white ${scrollY > 80 ? 'lg:pt-24' : 'lg:pt-44 md:pt-32'}`} onMouseMove={handleMouseMove}>
                    <h1 className="text-[56px] lg:block hidden font-medium text-center leading-[1.3]">
                        High-performing teams of <br />  <span className="text-[#49FFE6]">vetted software engineers.</span>
                    </h1>
                    <h1 className="text-4xl md:text-6xl block lg:hidden font-medium text-center leading-[1.3]">
                        High-performing teams <br /> of <span className="text-[#49FFE6]">vetted software engineers.</span>
                    </h1>
                    <div className='lg:w-[440px] md:w-[440px] w-[270px] lg:h-[65px] md:h-[65px] h-[40px] relative lg:border-[6px] border-4 border-white mt-6'>
                        <div className='w-[95%] left-[11px] lg:h-20 md:h-20 h-12 z-30 bg-dark absolute lg:-top-4 md:-top-4 -top-3 flex px-2 justify-between'>
                            {
                                avatarImgs.map((img, i) => <span key={img} className='flex items-end'>
                                    <img src={img} className='lg:h-20 h-10 md:h-20'></img>
                                    {i < 3 && <BiSolidQuoteSingleRight className='lg:text-3xl text-xl'></BiSolidQuoteSingleRight>}
                                </span>)
                            }
                        </div>
                    </div>
                    <h2 className='text-lg font-medium text-center pt-8'>
                        Scale your team up and down with the <span className='underline'>top 1.36% talent</span> skilled in React,<br /> Node.js, .NET and AWS. Onboarding within 10 days guaranteed.
                    </h2>
                    <div>
                        <button className='btn-sec font-ibm mt-10'>
                            get a proposal
                            <BiRightArrowAlt className='text-lg'></BiRightArrowAlt>
                        </button>
                    </div>
                    <div className='flex justify-center items-center pt-8'>
                        <h4 className='font-bold text-2xl text-center capitalize'>clutch</h4>
                        <p className='px-2'>4.9</p>
                        <>
                            <AiFillStar className='text-lg'></AiFillStar>
                            <AiFillStar className='text-lg'></AiFillStar>
                            <AiFillStar className='text-lg'></AiFillStar>
                            <AiFillStar className='text-lg'></AiFillStar>
                            <AiFillStar className='text-lg'></AiFillStar>
                        </>
                    </div>
                    {/* ===============animated photos=========== */}
                    <div className='overflow-hidden h-full lg:block hidden'>
                        <img style={{
                            top: `${130 - cursorY}px`,
                            left: `${100 - cursorX}px`,
                        }} src={imgReact} className={`absolute z-20  h-28 banner-img`} alt="" />
                        <img style={{
                            top: `${220 + cursorY}px`,
                            left: `${30 + cursorX}px`,
                        }} src={imgAws} className={`absolute z-20  h-24 banner-img`} alt="" />
                        <img style={{
                            top: `${450 - cursorY}px`,
                            left: `${-50 + cursorX}px`,
                        }} src={imgBrain} className={`absolute z-20  h-24 banner-img`} alt="" />
                        <img style={{
                            top: `${520 + cursorY}px`,
                            left: `${130 + cursorX}px`,
                        }} src={imgRedux} className={`absolute z-20  h-24 banner-img`} alt="" />
                        <img style={{
                            top: `${130 - cursorY}px`,
                            right: `${-60 + cursorX}px`,
                        }} src={imgReact} className={`absolute z-20  h-28 banner-img`} alt="" />
                        <img style={{
                            top: `${260 + cursorY}px`,
                            right: `${150 - cursorX}px`,
                        }} src={imgAws} className={`absolute z-20  h-24 banner-img`} alt="" />
                        <img style={{
                            top: `${430 - cursorY}px`,
                            right: `${50 + cursorX}px`,
                        }} src={imgBrain} className={`absolute z-20  h-24 banner-img`} alt="" />
                        <img style={{
                            top: `${530 + cursorY}px`,
                            right: `${120 - cursorX}px`,
                        }} src={imgJs} className={`absolute z-20  h-14 banner-img`} alt="" />
                        <img style={{
                            top: `${610 + cursorY}px`,
                            right: `${20 - cursorX}px`,
                        }} src={imgReact} className={`absolute z-20  h-24 banner-img`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;