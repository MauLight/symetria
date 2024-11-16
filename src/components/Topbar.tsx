import TopbarLinks from './topbar/Links'
import Logo_light from '../assets/imgs/Symetria.png'
import { animatedGradient } from '../utils/styles'

function Topbar() {
    return (
        <div className="w-full  z-20 fixed flex justify-center bg-transparent">
            <div className="w-[1440px] flex justify-end">
                <div className="relative w-[40rem] h-[80px] p-4">
                    <div className={`w-full h-full ${animatedGradient} blur-md opacity-65`}></div>
                    <div className="w-[37.5rem] h-[50px] absolute top-4 left-5 flex items-center px-2 rounded-[10px] bg-sym_gray-50">
                        <img src={Logo_light} alt="logo" className='w-10 h-10 animate-pulse' />
                        <TopbarLinks />
                        <img src={Logo_light} alt="logo" className='w-10 h-10 opacity-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar