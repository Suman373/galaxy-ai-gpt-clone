import { IoIosArrowDown } from 'react-icons/io';
import { BsChat } from "react-icons/bs";

const Header = () => {
    return (
        <div className='h-12 absolute mx-2.5  py-3 w-full flex items-center justify-between  pr-6 top-0 left-0 z-10 bg-neutral-800'>
            <button className='flex items-center gap-1 px-2 py-1 text-base md:text-lg cursor-pointer hover:bg-neutral-700 rounded-lg'>
                ChatGPT
                <IoIosArrowDown className='font-regular' />
            </button>
            <button className='px-2 py-1 hover:bg-neutral-700 rounded-md'><BsChat /></button>
        </div>
    )
}

export default Header;