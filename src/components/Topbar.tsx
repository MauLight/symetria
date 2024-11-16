import TopbarLinks from './topbar/Links'
import Logo_light from '../assets/imgs/Symetria.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/functions'

function Topbar() {
    return (
        <motion.div
            variants={fadeIn('top', 1)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true, amount: 0.1 }}
            className="w-full  z-20 fixed flex justify-center bg-transparent py-3">
            <div className="w-[1440px] flex justify-end">
                <div className="relative w-[40rem] h-[80px] p-4">
                    {/* <div className={`w-full h-full ${animatedGradient} blur opacity-90`}></div> */}
                    <div className="w-[38rem] h-[50px] absolute top-4 left-4 flex items-center px-2 rounded-[10px] bg-sym_gray-50">
                        <img src={Logo_light} alt="logo" className='w-10 h-10 animate-pulse' />
                        <TopbarLinks />
                        <img src={Logo_light} alt="logo" className='w-10 h-10 opacity-0' />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Topbar