import React from 'react'

function cards() {
return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-14 py-14'>
        <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative w-full h-full rounded-xl flex items-center justify-center bg-[#004D43]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute border-2 border-[#CDEA68] text-[#CDEA68] p-1 px-4  rounded-full left-5 bottom-5'>&copy;2019-2022</button>
        </div>
        </div>
        <div className='cardcontainer h-[50vh] w-1/2 flex gap-5'>
        <div className='card relative w-1/2 h-full rounded-xl flex items-center justify-center bg-[#212121]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute border-2 border-zinc-100 text-zinc-100 py-1 px-4  rounded-full left-5 bottom-5 hover:bg-zinc-100 hover:text-zinc-900 '>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative w-1/2 h-full rounded-xl flex items-center justify-center bg-[#212121]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute border-2 border-zinc-100 text-zinc-100 py-1 px-4  rounded-full left-5 bottom-5 hover:bg-zinc-100 hover:text-zinc-900'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
        </div>
    </div>
)
}

export default cards