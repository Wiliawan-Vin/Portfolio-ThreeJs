import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft,slideInFromRight,slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
    initial ='hidden'
    animate = 'visible'
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] '>
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
            className='flex flex-col gap-6 text-6xl font-bold text-white max-w-[600px] w-auto min-h-auto'>
              <span>
                Providing<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>project experience
              </span>
            </motion.div>
            <motion.p
            className='text-lg text-gray-500 my-5 max-w-[600px]'
            variants={slideInFromLeft(0.8)}>
              Im a Website and Mobile App Front End developer with mostly experience in build websites and Mobile Front End. Check out my projects.
            </motion.p>
              <motion.button
              variants={slideInFromLeft(1)}
              className='py-2 max-w-[200px] bg-[#370db48b] items-center text-center text-white cursor-pointer rounded-lg '>
                Learn More!
              </motion.button>
        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'>
          <Image
          src="/mainIconsdark.svg"
          alt='work icons'
          height={650}
          width={650}
          />

        </motion.div>
    </motion.div>
  )
}

export default HeroContent

