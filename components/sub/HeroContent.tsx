import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft,slideInFromRight,slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
const HeroContent = () => {
  return (
    <motion.div
    initial ='hidden'
    animate = 'visible'
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className='welcome-text text-[13px]'>
                    Full Stack Developer Portfolio
                </h1>
            </motion.div>
            <motion.div
            variants={slideInFromLeft(0.6)}
            className='flex flex-col gap-6 text-6xl text-bold text-white max-w-[600px] w-auto min-h-auto'>

            </motion.div>
        </div>
    </motion.div>
  )
}

export default HeroContent

