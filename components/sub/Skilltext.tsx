'use client'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'


const Skilltext = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
         <motion.div
            variants={slideInFromTop}
            className='welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className='welcome-text text-[13px]'>
                    Think better with NextJs 13
                </h1>
            </motion.div>
            <motion.div 
            variants={slideInFromLeft(0.5)}
            className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Making apps with modern technologies
            </motion.div>
    </div>
  )
}

export default Skilltext