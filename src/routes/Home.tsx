import Symetria from '../assets/imgs/Symetria.svg'
import Hero from '../components/hero/Hero'


function Home() {
    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            <img className="w-screen h-screen absolute top-0 z-10" src={Symetria} />
            <Hero />
        </div>
    )
}

export default Home