import { animatedGradient, animatedGradientText } from "../../utils/styles"
import { heroText } from "../../text/Hero"
import { useVideo } from "../../hooks/useVideo"

import video1 from '../../assets/video/hero_video_1.webm'
import video2 from '../../assets/video/hero_video_2.webm'
import video3 from '../../assets/video/hero_video_3.webm'

const videos = [
    {
        id: 'a1',
        video: video1
    },
    {
        id: 'b2',
        video: video2
    },
    {
        id: 'c3',
        video: video3
    }
]


function Hero() {
    const [video, handleCurrVideo] = useVideo('forward')

    return (
        <header className="flex flex-col justify-center items-center z-20">
            <div className="relative w-[1440px] hero-parent">
                <h1 className={`font-title ${animatedGradientText} text-[5.2rem] uppercase`}>{heroText[0].text}</h1>
                <p className="text-[1rem] text-sym_gray-50 text-balance pl-2">{heroText[1].text}</p>
                <div className="hero-child w-[35rem] h-[19rem] z-20 absolute right-0 -top-20 flex items-center bg-sym_gray-800 border border-sym_gray-700 rounded-[15px] overflow-hidden">
                    <video src={videos[video].video} onEnded={handleCurrVideo} autoPlay muted className="w-full object-cover">
                    </video>
                </div>
                <div className={`hero-child w-[35rem] h-[19rem] z-10 absolute right-0 -top-20 flex items-center rounded-[15px] ${animatedGradient} blur-sm`}></div>
            </div>
        </header>
    )
}

export default Hero