import React from 'react'
import { PlayIcon } from '@heroicons/react/solid'

function HeroSection() {
    return (
        <div style={{
        }} className="heroSectionContainer h-[100vh] text-center text-white font-bold pt-32 " >


            <div className="lg:max-w-[50%] mx-auto ">
                <img className="h-36 w-h-36 mx-auto" src="https://africa.cardano.org/static/9a756e76bd9246795d197e168bb5cdb0/8f416/cardano-africa-logo.webp" />

                <h1 style={{
                    lineHeight : "3.5rem"
                }} className="text-[4rem] ">Blockchain comes of age in Africa</h1>

                <h5 className="text-lg mt-10">Watch the Africa Special show about the biggest blockchain deal ever.
                        Key highlights below.</h5>


                <PlayIcon className="h-20 w-20 mx-auto mt-10"  />


                <h5 className="text-lg">#CardanoAfrica</h5>
            </div>



            
        </div>
    )
}

export default HeroSection
