import React, {useState} from 'react'
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)



    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold mr-4">
                        <span className='text-cyan-500'>ez</span>H
                        <span className='text-cyan-500'>.</span>E
                        <span className='text-cyan-500'>.</span>P
                        </h1>
                    <ul className="hidden md:flex pl-10">
                        <Link to={'/'}>
                            <button className="mr-4">Home</button>
                        </Link>
                        <Link to={'/exercises/print'}>
                            <button className="mr-4">Print Exercises</button>
                        </Link>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <Link to={'/exercises/add'}>
                        <button>Custom Exercise</button>
                    </Link>
                    <button>
                        Search Exercises
                    </button>
                </div>
                <div className="md:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} rounded/>
                </div>
            </div>
            <div className="md:hidden">
                <div className={!isOpen ? "hidden" : "bg-zinc-200 w-full px-8"}>
                <Link to={'/'}>
                    <button className="w-full">Home</button>
                </Link>
                <Link to={'/exercises/print'}>
                    <button className="w-full">Print Exercises</button>
                </Link>
                <Link to={'/exercises/add'}>
                    <button className="w-full">Custom Exercise</button>
                </Link>
                    <button className="w-full mb-5">Search Exercises</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar