import React from 'react'

import Link from 'next/link'

function BlockItem({isOdd = false}) {

    const flexDirection = isOdd ? "lg:flex-row" : "lg:flex-row-reverse"

    const texte =  isOdd ? `
    Input Output, the technology company that created Cardano and Atala 
    PRISM, has been working on the African continent since 2017. Charles Hoskinson, 
    CEO, reflects on the road so far and his vision for economic identity and empowerment,
     to sustainability and financial inclusion across the African continent.
     `  : `In partnership with Ethiopia's Ministry of Education, Input Output will 
     create a blockchain-based digital identity for 5 million students and teachers.
      This is the biggest blockchain deployment anywhere in the world. Using Cardano with
       Atala PRISM, this technology will create a national attainment recording system; 
       to verify grades, monitor school performance, and boost nationwide education.`
     

    const url = isOdd ?"See Charles Hoskinson's African vision " :  "See Ethiopia's Minister of Education interview"
    return (
        <div style={{
            backgroundColor : isOdd ? "white" : "#471C68",
            color : isOdd ? "black" : "#fff",
        }} className={"flex flex-col px-6 py-6 "+flexDirection}>

                <img className="lg:w-[50%]" src={isOdd ? "/fille.webp" :   "/guy.webp"  } style={{
                    objectFit : "cover"
                }} />

            <div className="lg:w-1/2 flex flex-col  justify-center lg:px-12">
                <h1 className="font-bold text-4xl mt-4 md:mt-0">Cardano's vision for a decentralized Africa</h1>

                <p style={{
                    color : isOdd ? "#222222" : "#A88BB7"
                }} className="text-md mt-8 mb-8 ">
                {texte}
                </p>

                <Link href="/" >
                     <span style={{
                         textDecoration : "underline"
                     }} className="text-left t cursor-pointer w-[200px]">
                         {url}
                     </span>
                </Link>



                
              
               
            </div>
            
        </div>
    )
}

export default BlockItem
