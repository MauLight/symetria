import { animatedGradient, animatedGradientText } from "../../utils/styles"
import { useVideo } from "../../hooks/useVideo"
import { heroText } from "../../text/Hero"
import { ReactTyped } from "react-typed"

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
    const [video, handleCurrVideo] = useVideo('forward', videos)

    return (
        <>
            <header className="hidden xl:flex flex-col justify-center items-center z-20">
                <div className="relative w-screen min-[1440px]:w-[1440px] max-[1440px]:px-10 hero-parent">
                    {/* <h1 className={`font-title ${animatedGradientText} text-[8rem]`}>{heroText[0].text}</h1> */}
                    <ReactTyped className={`font-title ${animatedGradientText} text-[8rem]`} startWhenVisible strings={[heroText[0].text]} typeSpeed={50} />
                    <p className="w-1/2 text-[1.2rem] text-sym_gray-50 text-balance pl-2">{heroText[1].text}</p>
                    <div className="hero-child w-[35rem] h-[19rem] z-20 absolute right-10 min-[1440px]:right-1 -top-[15px] flex items-center bg-sym_gray-800 border border-sym_gray-700 rounded-[15px] overflow-hidden">
                        <video
                            src={video}
                            onEnded={handleCurrVideo}
                            autoPlay
                            muted
                            className="w-full object-cover"
                        />
                    </div>
                    <div className={`hero-child w-[35rem] h-[19rem] z-10 absolute right-9 min-[1440px]:right-0 -top-[15px] flex items-center rounded-[15px] ${animatedGradient} blur-lg`}></div>
                </div>
            </header>
            <header className="h-full hidden max-xl:flex flex-col justify-start items-center pt-44 z-20">
                <div className="relative w-screen min-[1440px]:w-[1440px] flex flex-col items-center max-[1440px]:px-10">
                    {/* <h1 className={`font-title ${animatedGradientText} text-[8rem]`}>{heroText[0].text}</h1> */}
                    <ReactTyped className={`font-title ${animatedGradientText} text-[4rem] min-[400px]:text-[6rem] min-[550px]:text-[8rem] sm:text-[9rem]`} startWhenVisible strings={[heroText[0].text]} typeSpeed={50} />
                    <p className="w-full min-[500px]:w-[500px] text-[0.9rem] min-[500px]:text-[1.2rem] text-sym_gray-50 text-balance pl-2">{heroText[1].text}</p>
                    <div className="relative flex justify-center items-center pt-20">
                        <div className="w-full sm:w-[35rem] sm:h-[19rem] z-20 flex items-center bg-sym_gray-800 border border-sym_gray-700 rounded-[15px] overflow-hidden">
                            <video
                                src={video}
                                onEnded={handleCurrVideo}
                                autoPlay
                                muted
                                className="w-full object-cover"
                            />
                        </div>
                        <div className={`w-full sm:w-[35rem] sm:h-[19rem] z-10 absolute flex items-center rounded-[15px] ${animatedGradient} blur-lg`}></div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Hero