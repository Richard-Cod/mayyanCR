import React from 'react'

function RayImage({img , texte}) {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center " style={{
            backgroundImage : `url('${img}')`,
            backgroundSize : "cover",
            backgroundPosition : "center"

        }}>


            <h1 className="font-bold text-6xl text-white text-center  max-w-3xl">
           {texte}
            </h1>

            
        </div>
    )
}

export default RayImage
