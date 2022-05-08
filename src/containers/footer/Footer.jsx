import React from 'react';
import instagram from '../../files/instagram.png';
import github from '../../files/github.png';
import gmail from '../../files/gmail.png';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding" id="contact">
    <div className="footer_heading">
      <h1 className="gradient__text">Contact</h1>
      <div className="brand section__padding">
        
        <div>
          <a href="https://www.instagram.com/tapan_ntsr/"><img class="imgbtn" src={instagram} alt="instagram" /></a>
        </div>
        <div>
          <a href="https://github.com/tapan-ntsr"><img class="imgbtn" src={github} alt="github" /></a>
        </div>
        <div>
          <a href="mailto: ntsr2003@gmail.com" target="blank"><img class="imgbtn" src={gmail} alt="gmail" /></a>
        </div>
      
      </div>
      <div className="copyright">
        <p>@2022 Narra Tapan Siddarth Reddy</p><br></br>
        <p> All rights reserved</p>
      </div>
    </div>
  </div>

);
export default Footer;