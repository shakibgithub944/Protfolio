import React from 'react';
import { FaLinkedin, FaGithubSquare, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className='bg-gray-800'>
            <footer className="footer items-center p-4  text-neutral-content">
                <div className="items-center grid-flow-col">
                    <span className="normal-case text-2xl md:ml-8">
                        <span className='font-bold text-sky-500'>S</span>
                        <span className='font-bold text-primary'>H</span>
                        <span className='font-bold text-green-500'>A</span>
                        <span className='font-bold text-secondary'>K</span>
                        <span className='font-bold text-accent'>I</span>
                        <span className='font-bold text-yellow-500'>B</span>
                    </span>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center">
                    <a target={0} href='https://www.linkedin.com/in/md-shakib-miah-523025230/' className='text-blue-600'><FaLinkedin></FaLinkedin></a>
                    <a target={0} href='https://github.com/shakibgithub944' className='text-gray-600'><FaGithubSquare></FaGithubSquare></a>
                    <a target={0} href='https://www.facebook.com/nazmush.shakib.737' className='text-blue-600'><FaFacebook></FaFacebook></a>
                </div>
                <p className='mx-auto'>Copyright © 2022 - All right reserved</p>
            </footer>
        </section>
    );
};

export default Footer;