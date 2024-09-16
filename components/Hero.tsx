import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                    Conception d&apos;Expériences Digitales avec des Solutions Code et No-Code
                </h2>

                <TextGenerateEffect 
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    words="Transformer des concepts en expériences utilisateur fluides"
                />

                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl">
                    Bonjour, je suis Hugo, un développeur web polyvalent basé en France.
                </p>

                <a href="#about">
                    <MagicButton
                        title='Découvrir mon travail'
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>

                <div className="flex items-center md:gap-3 gap-6 mt-5">
                    {socialMedia.map((profile) => (
                        <Link key={profile.id} href={profile.link} target="_blank">
                          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300">
                            <img src={profile.img} alt="icons" width={20} height={20} />
                          </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero
