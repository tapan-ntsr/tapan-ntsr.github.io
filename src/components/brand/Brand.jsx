import React from 'react';
import instagram from '../../files/instagram.png';
import github from '../../files/github.png';
import gmail from '../../files/gmail.png';
import './brand.css';

const Brand = () => (
  
  <div className="brand section__padding">
    {/* <hr color="#14FF00" size="10px" width="30px"></hr> */}
    <div>
    <a href="https://www.instagram.com/tapan_ntsr/"><img class="imgbtn" src={instagram} alt="instagram"/></a>
    </div>
    <div>
    <a href="https://github.com/tapan-ntsr" alt="github"><img class="imgbtn" src={github} alt="github"/></a>
    </div>
    <div>
    <a href="mailto: ntsr2003@gmail.com" target="blank"><img class="imgbtn" src={gmail} alt="mail"/></a>
    </div>
    {/* <hr color="#14FF00" size="10px" width="30px"></hr> */}
  </div>
  
  
);

export default Brand;