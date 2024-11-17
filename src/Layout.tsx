import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Topbar = lazy(async () => await import('./components/Topbar'))
const Home = lazy(async () => await import('./routes/Home'))

function Layout() {
    return (
        <div>
            <Suspense fallback={<h1 className='text-sym_gray-50'>Loading...</h1>}>
                <Topbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default Layout