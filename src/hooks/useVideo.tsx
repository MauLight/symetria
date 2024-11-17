import { useState } from "react"

interface VideoProps {
    id: string
    video: string
}

type Direction = 'back' | 'forward'

export function useVideo(direction: Direction, videos: VideoProps[]): [string, () => void] {
    const [currIndex, setCurrIndex] = useState<number>(0)

    function handleCurrVideo() {
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

    return [videos[currIndex].video, handleCurrVideo]
}