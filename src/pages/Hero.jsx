import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#03fa6e]'>Hillary Oyaro</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Software Engineer at Elloe.AI. <br className='sm:block hidden' />
            I develop Modern Data Driven Applications. <br className='sm:block hidden' />
            Distributive Multi Cloud Architecture.  <br className='sm:block hidden' />
            and Conversation AI Solution.
          </p>
          <br/>
          <p className={`${styles.heroSubText} mt-1 text-yellow-75`}>
            "Adopting 4D Model Work frame is my value to customer.<br className='sm:block hidden' />
             Lets Discover ,Design ,Develop and Deploy together.....creating the <br className='sm:block hidden' />
             Land of intuitive and serverless product solutions."
          </p>
        </div>
      </div>

      
    
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;