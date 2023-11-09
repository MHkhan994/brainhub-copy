
import { BiRightArrowAlt } from 'react-icons/bi';
import project1 from '../../assets/project1.webp'
import project2 from '../../assets/project2.webp'
import project3 from '../../assets/project3.webp'
import project4 from '../../assets/project4.webp'

const Projects = () => {
    return (
        <div>
            <div className="my-container text-white grid lg:grid-cols-2 md:grid-cols-2 justify-between pt-24">
                <div className='cursor-pointer lg:w-[92%] md:w-[100%]'>
                    <div className='lg:h-[90vh] md:h-[38vh] lg:me-auto overflow-hidden'>
                        <img src={project1} className='h-full w-full transition-all hover:scale-105' alt="" />
                    </div>
                    <div className='space-y-5 py-7'>
                        <h3 className='text-gray-500 uppercase text-base'>custom software development</h3>
                        <h2 className='text-[28px] font-medium'>resilient software architecture helps a Swiss fintech get funded and scale quickly</h2>
                        <p>GOKONG’s key challenge was to create an architecture that will withstand heavy data flows with no compromises on a security side.</p>
                        <button className="border-b border-gray-700 pb-2 pt-6 flex items-center gap-2 uppercase font-ibm font-semibold">
                            read more
                            <BiRightArrowAlt className='text-lg'></BiRightArrowAlt>
                        </button>
                    </div>
                </div>
                <div className='cursor-pointer md:w-[76%] md:ms-auto'>
                    <div className='lg:h-[75vh] md:h-[30vh]  overflow-hidden'>
                        <img src={project2} className='h-full w-full transition-all hover:scale-105' alt="" />
                    </div>
                    <div className='space-y-5 py-7'>
                        <h3 className='text-gray-500 uppercase text-base'>web app mordanization</h3>
                        <h2 className='text-[28px] font-medium'>Speeding up a software delivery process by... 450%</h2>
                        <p>National Geographic asked us to reinvent a subscription management system serving over 6 million users and connect it to a custom-made ERP.</p>
                        <button className="border-b border-gray-700 pb-2 pt-6 flex items-center gap-2 uppercase font-ibm font-semibold">
                            read more
                            <BiRightArrowAlt className='text-lg'></BiRightArrowAlt>
                        </button>
                    </div>
                </div>
                <div className='cursor-pointer md:w-[76%] lg:me-auto md:mt-auto'>
                    <div className='lg:h-[75vh] md:h-[30vh] overflow-hidden'>
                        <img src={project3} className='h-full w-full transition-all hover:scale-105' alt="" />
                    </div>
                    <div className='space-y-5 py-7'>
                        <h3 className='text-gray-500 uppercase text-base'>desktop app development</h3>
                        <h2 className='text-[28px] font-medium'>Team augmentation setup that lasts for 6+ years (and counting)</h2>
                        <p>Paradox Interactive needed to rebuild their desktop app launcher, serving as a digital distribution platform.</p>
                        <button className="border-b border-gray-700 pb-2 pt-6 flex items-center gap-2 uppercase font-ibm font-semibold">
                            read more
                            <BiRightArrowAlt className='text-lg'></BiRightArrowAlt>
                        </button>
                    </div>
                </div>
                <div className='cursor-pointer lg:w-[92%] md:mt-20 lg:ms-auto'>
                    <div className='lg:h-[90vh] lg:ms-auto overflow-hidden'>
                        <img src={project4} className='h-full w-full transition-all hover:scale-105' alt="" />
                    </div>
                    <div className='space-y-5 py-7'>
                        <h3 className='text-gray-500 uppercase text-base'>mobile app development</h3>
                        <h2 className='text-[28px] font-medium'>Sequoia-funded startup builds the most popular micromobility app in Asia</h2>
                        <p>After raising $6.4m, Beam’s plan was to fight Hive and Lime for market share in Asia-Pacific region. Our job was to make the app their biggest weapon.</p>
                        <button className="border-b border-gray-700 pb-2 pt-6 flex items-center gap-2 uppercase font-ibm font-semibold">
                            read more
                            <BiRightArrowAlt className='text-lg'></BiRightArrowAlt>
                        </button>
                    </div>
                </div>
            </div>
            <div className='my-container text-white flex flex-col items-center text-center lg:py-28 py-16 gap-10'>
                <h2 className='text-lg'>We wish we could show you all the work we've done. <br />
                    Unfortunately, we're often bound by the non-disclosure agreements.</h2>
                <button className="border-b border-gray-700 pb-2 flex items-center gap-2 uppercase font-ibm font-semibold">
                    see more projects we can reveal
                    <BiRightArrowAlt className='text-lg'></BiRightArrowAlt>
                </button>
            </div>
        </div>
    );
};

export default Projects;