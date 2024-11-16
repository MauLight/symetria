import { animatedGradient, animatedGradientText } from "../../utils/styles"
import video1 from '../../assets/video/hero_video_1.webm'
import { heroText } from "../../text/Hero"


function Hero() {
    return (
        <div className="flex flex-col justify-center items-center z-20">
            <div className="relative w-[1440px] hero-parent">
                <h1 className={`font-title ${animatedGradientText} text-[5.2rem] uppercase`}>{heroText[0].text}</h1>
                <p className="text-[1rem] text-sym_gray-50 text-balance pl-2">{heroText[1].text}</p>
                <div className="hero-child w-[35rem] h-[20rem] z-20 absolute right-0 -top-20 flex items-center bg-sym_gray-800 border border-sym_gray-700 rounded-[15px] overflow-hidden">
                    <video autoPlay loop muted className="w-full object-cover">
                        <source src={video1} />
                    </video>
                </div>
                <div className={`hero-child w-[35rem] h-[20rem] z-10 absolute right-0 -top-20 flex items-center rounded-[15px] ${animatedGradient} blur-sm`}></div>
            </div>
        </div>
    )
}

export default Hero