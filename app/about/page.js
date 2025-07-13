import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs ,FaGitAlt, FaGithub  } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

const page = () => {
  return (
   <>
  <h1 className="font-azonix items-center text-center text-[#fda228] p-5"
  style={{
    letterSpacing:"8px"
  }}
  >Let's get to know each other</h1>

  <h1 className='text-3xl font-bold font-azonix text-center'>About</h1>

  <p className='p-5'>Hi , My name is Pradeep Borude . I am 20 years old and currently persuing Bca degree from Deogiri college Chhtrapati Sambhajinagar .</p>
   <h1 className='text-3xl font-bold font-azonix text-center p-6'>I make Websites and i do it well</h1>
  <p className='p-5'>By keeping your identity at the heart of my approach, my goal is to find the simplest solution to meet your needs. </p>
    <div className='flex flex-col p-6'>
    <h1 className='font-bold font-azonix py-5 text-xl italic'>What i use for development</h1>
  <ul className="flex flex-wrap gap-6 justify-center items-center py-8">
    <li>

      <FaHtml5 className="text-orange-600 w-16 h-16" />
      <p className='font-thin text-center font-azonix'>HTML</p>
    </li>
    <li>

      <FaCss3Alt className="text-blue-600 w-16 h-16" />
      <p className='font-thin text-center font-azonix'>CSS</p>

    </li>
      <li>
        
      <FaJs className="text-yellow-400 w-16 h-16" />
      <p className='font-thin text-center font-azonix'>JS</p>

      </li>
      <li>

      <SiTailwindcss className="text-teal-400 w-16 h-16" />
      <p className='font-thin text-center font-azonix'>Tailwind</p>

      </li>
      <li>

      <FaReact className="text-cyan-400 w-16 h-16" />
      <p className='font-thin text-center font-azonix'>React</p>

      </li>
      <li>

      <SiNextdotjs className="text-black w-16 h-16" />
      <p className='font-thin text-center font-azonix'>NextJS</p>

      </li>
       <li>

      <FaNodeJs className="text-green-500 w-16 h-16" />
      <p className='font-thin text-center font-azonix'>NodeJS</p>

      </li>
      <li>

      <SiMongodb className="text-green-600 w-16 h-16" />
      <p className='font-thin text-center font-azonix'>Mongodb</p>

      </li>
     
      <li>

       <FaGitAlt className="text-orange-500 w-16 h-16" />
      <p className='font-thin text-center font-azonix'>git</p>

      </li>
      <li>

      <FaGithub className="text-white w-16 h-16 bg-black rounded-full p-2" />
      <p className='font-thin text-center font-azonix'>Github</p>

      </li>
    </ul>
</div>
   </>
  )
}

export default page
