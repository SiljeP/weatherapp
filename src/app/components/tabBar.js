"use client"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function TabBar() {

    return (
        <>
            <div className='fixed flex justify-center bottom-0' >
                <FontAwesomeIcon className='absolute z-30 text-3xl left-7 bottom-10' icon={faMapPin} style={{ color: "#ffffff", }} />
                <Image className='absolute z-10 bottom-2' src="/images/firkanttabbar.svg" width={450} height={88} alt="SVG with soft lines a part of the tab bar at the bottom of the screen" />
                <FontAwesomeIcon className='absolute z-30 text-3xl right-10 bottom-10' icon={faBars} style={{color: "#ffffff",}} />
                <Image className='absolute z-30 bottom-4' src="/images/Button.png" width={170} height={170} alt="A button with a plus sign in it"/>
                <Image className='relative z-20 ' src="/images/Subtract.svg" width={450} height={65} alt="SVG with soft lines a part of the tab bar at the bottom of the screen" />

            </div>

        </>
    )

}