import React from "react";


export default function Navbar(){
    return (
        <nav className=" w-full px-12 h-12 flex justify-between items-center">
            <div className=''>
                <ul className='flex justify-between items-center gap-4'>
                <li>LOGO</li>
                </ul>
            </div>
            <div>
                <ul className='flex items-center gap-4'>
                    <li className='gap-2 flex items-center align-middle'><i class="ri-home-3-line text-3xl"></i><span>About</span></li>
                    <li className='gap-2 flex items-center align-middle'><i class="ri-store-2-line text-3xl"></i><span>Updates</span></li>
                    <li className='gap-2 flex items-center align-middle'><i class="ri-rocket-2-line text-3xl"></i>Staking</li>
                </ul>
            </div>
            <div>
                <ul className='flex items-center gap-5'>
                <li><i className='ri-hand-coin-line text-3xl'></i></li>
                <li><i className='ri-flashlight-line text-3xl'></i></li>
                </ul>
            </div>
        </nav>
    );
}