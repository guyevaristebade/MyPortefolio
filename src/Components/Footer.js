import React from 'react'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer-container">
            <p className="footer-text-left">Designer et Developpé Par Guy Evariste Bade</p>
            <p className="footer-text-center">Copyright &copy; 2023</p>
            <p className="footer-text-right">
                <a href="" ><AiFillGithub/> </a>            
                <a href="" > <AiOutlineTwitter/></a>            
                <a href="" ><AiFillInstagram/></a>            
                <a href="" ><FaLinkedinIn/> </a>            
                               
                
                
            </p>
        </footer>
    )
}

export default Footer