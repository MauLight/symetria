import TopbarLinks from './topbar/Links'
import Logo_light from '../assets/imgs/Symetria.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/functions'
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'

function Topbar() {
    const [toggle, setToggle] = useState<boolean>(false)

    function handleToggle() {
        setToggle(!toggle)
    }

    return (
        <>
            <motion.div
                variants={fadeIn('top', 1)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="hidden sm:flex w-full z-20 fixed justify-center bg-transparent py-3">
                <div className="w-[1440px] flex justify-end">
                    <div className="relative w-[40rem] h-[80px] p-4">
                        <div className="w-[38rem] h-[50px] absolute top-4 left-4 flex items-center px-2 rounded-[10px] bg-sym_gray-50">
                            <img src={Logo_light} alt="logo" className='w-10 h-10 animate-pulse' />
                            <TopbarLinks className='items-center pl-12' />
                            <img src={Logo_light} alt="logo" className='w-10 h-10 opacity-0' />
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={fadeIn('top', 1)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="hidden max-sm:flex w-screen z-50 fixed justify-center bg-transparent py-3 px-5">
                <div className="relative w-full flex justify-end">
                    <Hamburger color='#e4e4e4' size={30} toggled={toggle} toggle={handleToggle} />
                    {
                        toggle && (
                            <div className="absolute top-12 right-0 w-[10rem]">
                                <div className="w-full flex flex-col items-center gap-y-8 rounded-[10px] bg-sym_gray-50 pt-5 pb-10">
                                    <img src={Logo_light} alt="logo" className='w-20 h-20 animate-pulse' />
                                    <TopbarLinks className='flex-col items-start gap-y-4' />
                                </div>
                            </div>
                        )
                    }
                </div>
            </motion.div>
            {
                toggle && (
                    <div onClick={handleToggle} className="fixed top-0 left-0 w-screen h-screen bg-transparent z-30">
                    </div>
                )
            }
        </>
    )
}

export default Topbar