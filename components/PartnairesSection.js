import React from 'react'

function PartnairesSection() {
    return (
        <div style={{backgroundColor : "#4BAC8F"}} className=" text-center h-56 text-white pt-4">

            <h1 className="text-2xl">Cardano partners</h1>


            <div style={{
                overflowX :"scroll"
            }} className="flex mt-12 px-40 scrollBox">

                {[1,2,3,4,5,6].map((value) => {
                    return <img src="/parto.svg" className="h-14 mr-32" />
                })}

            </div>
            
        </div>
    )
}

export default PartnairesSection
