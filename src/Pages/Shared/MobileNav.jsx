import { useRef, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import routes from '/src/routes.json'

const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [accordionId, setAccordionId] = useState('helo')
    const drawerRef = useRef()

    const handleToggle = () => {
        setIsOpen(!isOpen)
        const el = document.getElementById('my-drawer-4')
        el.checked = !isOpen
    };

    console.log(accordionId);

    return (
        <div className="bg-dark fixed -top-1 w-full left-0 z-50">
            <div className="my-container flex justify-between py-3 items-center relative">
                <img src="/logo.svg" className="h-4" alt="" />
                <div className="text-white flex items-center gap-10">
                    <div className="md:block hidden">
                        <button className="btn-pri">
                            get a proposal
                            <BiRightArrowAlt className='text-lg'></BiRightArrowAlt>
                        </button>
                    </div>
                    <button
                        onClick={handleToggle}
                        className="bg-[#171A21] p-[18px]">
                        {isOpen ? <AiOutlineClose /> : <FaBars />}
                    </button>

                </div>



                {/* ============side drawred======== */}
                <div className="drawer drawer-end absolute">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay z-50"></label>
                        <ul ref={drawerRef} className="menu overflow-hidden p-7 z-50 w-screen bg-white min-h-[92vh] absolute top-[74px] text-base-content">
                            {
                                isOpen && <button
                                    onClick={handleToggle}
                                    className="bg-[#171A21] p-[18px] absolute -top-[62px] right-8 text-white">
                                    <AiOutlineClose />
                                </button>
                            }

                            {routes.map((route) => (
                                <div
                                    onClick={() => setAccordionId(route.id)}
                                    key={route.id} className="collapse collapse-arrow"
                                >
                                    <input type="radio" name="my-accordion-2" id={`accordion-${route.id}`} />
                                    <label
                                        htmlFor={`accordion-${route.id}`}
                                        className={`font-semibold font-ibm uppercase collapse-title text-base ${accordionId === route.id ? 'border-none' : 'border-b'}`}
                                    >
                                        {route.name}
                                    </label>
                                    <div className="collapse-content space-y-4 text-base capitalize">
                                        {route.routes.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;