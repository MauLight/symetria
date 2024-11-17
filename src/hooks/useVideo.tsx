import { useState } from "react"
import video1 from '../assets/video/hero_video_1.webm'
import video2 from '../assets/video/hero_video_2.webm'
import video3 from '../assets/video/hero_video_3.webm'

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

type Direction = 'back' | 'forward'

export function useVideo(direction: Direction): [number, () => void] {
    const [currIndex, setCurrIndex] = useState<number>(0)

    function handleCurrVideo() {
        console.log(currIndex)
        setCurrIndex((prev) => {
            if (direction === 'back') {
                if (prev === 0) return videos.length - 1
                return prev - 1
            }

            if (direction === 'forward') {
                if (prev === videos.length - 1) return 0
                return prev + 1
            }
            return prev
        })
    }

    return [currIndex, handleCurrVideo]
}