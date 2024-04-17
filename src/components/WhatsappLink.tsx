import React from 'react';
import Link from 'next/link';
import WhatsappSVG from './ui/WhatsappSVG';

const WhatsappLink = () => {
    return (
        <Link href="https://api.whatsapp.com/send?phone=3023666885&text=Hola%20DCT!%20deseo%20saber%20mas%20acerca%20mas%20de%20tus%20productos%20de%20IOT!" className="fixed bottom-10 right-10 rounded-full text-center text-2xl shadow-md z-10 hover:text-green-500 hover:bg-white transition-colors duration-200 ease-in-out my-float">
            <WhatsappSVG />
        </Link>
    );
};

export default WhatsappLink;
