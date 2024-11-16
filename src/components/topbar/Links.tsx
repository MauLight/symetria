import { Link } from "react-router-dom"

const linkStyle = 'text-sym-700 text-[0.9rem] uppercase hover:animate-pulse'


function TopbarLinks() {
    return (
        <div className='grow flex justify-between items-center pl-12'>
            <Link className={linkStyle} to={'/'}>About</Link>
            <Link className={linkStyle} to={'/'}>Services</Link>
            <Link className={linkStyle} to={'/'}>Technologies</Link>
            <Link className='flex items-center px-4 py-2 bg-sym_gray-700 rounded-[8px]' to={'/'}>
                <p className={`${linkStyle} text-sym_gray-50`}>Contact</p>
            </Link>
        </div>
    )
}

export default TopbarLinks