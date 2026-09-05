import React from 'react'
import Image from "next/image"   // already imported
import Reveals from '../Reveals'

const Hero = () => {
  return (
    <section className="relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10">
      <div className="flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start">
        <Reveals initialX={-25}>
          <h1 className="text-2xl text-center font-semibold block md:text-[40px] md:text-start md:inline">
            <span className="-ml-5">
              Hello I&apos;m Fezeu Axel, I&apos;m a{" "}
            </span>
            <span className="block text-[27px] highlight mt-2 md:text-[45px] md:inline md:mt-0">
              Web Developer
            </span>
          </h1>
        </Reveals>
        <Reveals initialX={-30} delay={0.2}>
          <p className="text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0">
            I&apos;m very passionate about coding and helping startups create unique and helpful products.
          </p>
        </Reveals>
        <Reveals initialX={-40} delay={0.4}>
          <a
            href="mailto:edgarfezeu@gmail.com"
            className="self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6"
          >
            Let&apos;s Connect{" "}
            {/* === REPLACE <img> WITH <Image> === */}
            <Image
              src="/arrow_right_icon.svg"
              alt="arrow_right_icon"
              width={20}      // adjust as needed
              height={20}     // adjust as needed
              className="inline-block"
            />
          </a>
        </Reveals>
      </div>

      <div className="relative group">
        <Reveals>
          <Image
            src="/profile_light_purple.png"
            alt="Light purple rectangle"
            width={375}
            height={430}
            className="hidden top-0 md:block w-[372px] h-[430px] absolute right-0 -z-10 group-hover:scale-[102%] group-hover:-rotate-2 ease-in-out duration-300"
          />
          <Image
            src="/profile_dark_purple.png"
            alt="dark purple rectangle"
            width={375}
            height={430}
            className="hidden top-0 md:block w-[372px] h-[430px] absolute right-0 -z-10 group-hover:scale-[102%] group-hover:rotate-2 ease-in-out duration-300"
          />
          <Image
            src="/Axel.png"
            alt="Axel profile picture"
            width={357}
            height={417}
            className="hidden md:block md:dark:hidden rounded-3xl min-w-[357px] h-[417px] z-10 mr-[7.7px] my-[6.5px] group-hover:scale-[102%] ease-in-out duration-300"
          />
          <Image
            src="/Axel_dark.png"
            alt="Axel profile picture"
            width={357}
            height={417}
            className="hidden md:md:dark:block rounded-3xl min-w-[357px] h-[417px] z-10 mr-[7.7px] my-[6.5px] group-hover:scale-[102%] ease-in-out duration-300"
          />
        </Reveals>
      </div>
    </section>
  )
}

export default Hero