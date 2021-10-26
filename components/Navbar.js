import React from 'react'

function Navbar() {
    return (
        <div style={{
            // backgroundColor : "black",
        }} className="absolute w-full px-4 text-white navbarContainer ">

            <div className="flex items-center">

                <img className="h-12" src="/logo.png" />

                <div className="ml-auto">

                    <ul className="flex">
                        <li className="text-md mr-8 cursor-pointer ">Selected Coverage</li>
                        <li className="text-md mr-8 cursor-pointer ">Contact</li>
                    </ul>

                </div>

            </div>


            
        </div>
    )
}

export default Navbar
