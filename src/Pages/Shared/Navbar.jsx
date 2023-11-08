import { BiRightArrowAlt } from 'react-icons/bi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import routes from '/src/routes.json'

const Navbar = () => {

    console.log(routes);

    return (
        <div className="my-container h-[80px] py-1 flex justify-between items-center uppercase font-ibm text-white">
            <div className='flex gap-16 items-center'>
                <img src="/logo.svg" className="h-[15px]" alt="" />
                <ul className='flex gap-6'>
                    {
                        routes.map((item, index) => <li key={item.id} className='nav-list relative'>
                            <span className='hover:text-[#49FFE6] cursor-pointer flex justify-center items-center text-sm font-semibold gap-1'>
                                {item.name}
                                <MdOutlineKeyboardArrowDown className='nav-arrow text-lg text-gray-500'></MdOutlineKeyboardArrowDown>


                            </span>

                            {/* ============dropdown=========== */}
                            <ul className={`capitalize grid grid-cols-2 dropdown w-[40vw] min-h-[250px] bg-white text-black absolute top-11 z-10 ${index < 3 ? '-left-48' : '-right-48'} font-mona`}>
                                <div className='bg-slate-100 p-6 flex flex-col justify-between'>
                                    <h1 className='text-2xl font-medium'>
                                        {item.dropTitle}
                                    </h1>
                                    <button className="border-b flex items-center gap-2">
                                        get a proposal
                                        <BiRightArrowAlt className='text-lg'></BiRightArrowAlt>
                                    </button>
                                </div>
                                <div className='px-6'>
                                    {
                                        item.routes.map(route => <li className='border-b py-4 text-sm' key={route}>{route}</li>)
                                    }
                                </div>
                            </ul>
                        </li>)
                    }
                </ul>
            </div>
            <button className="btn-pri">
                get a proposal
                <BiRightArrowAlt className='text-lg'></BiRightArrowAlt>
            </button>
        </div>
    );
};

export default Navbar;