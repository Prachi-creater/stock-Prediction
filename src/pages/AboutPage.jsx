import React from 'react'
import Appbar from '../reuseableComponent/Appbar'
import '../pages/style.css'
import Image from '../Images/about_2.jpg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function AboutPage() {
    return (
        <div>
            <Appbar></Appbar>
            <div className='home-outer-div'>
                <div className='text-div'>
                    <h1><span style={{ color: "#1d3557", fontFamily: 'dancing-script', marginRight: '110px', fontSize: 70, fontWeight: 'bold' }}> About Us</span> </h1>
                    <p style={{ fontSize: 20 }}>We’re NerdWallet. And we’re not your typical finance company. We believe that everyone should be able to make financial decisions with confidence. We’re building a team of Nerds with the knowledge, passion, and skills to make that happen</p>
                    <p style={{ fontSize: 20 }}> Confident financial decisions stem from clarity. Our mission is to provide the tools, information, and insight people need to navigate all of life's financial decisions. So they can easily find what they need and get back to life.</p>
                    <p style={{ fontSize: 20 }}>Our values shape everything we do. They're not just words written on a wall, but lived and breathed every day by every Nerd. </p>
                    <br></br><br></br>
                    <div className="contact">
                        <MailOutlineIcon id='mailIcon' />
                        <FacebookIcon id='facebookIcon'/>
                        < InstagramIcon id='instaIcon'/>
                    </div>
                </div>
                <div className="image">
                    <img src={Image} width='800px' height='700px' />
                </div>
            </div>


        </div>

    )
}