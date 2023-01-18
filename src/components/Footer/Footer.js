import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import IDOFactory from "../../contracts/IDOFactory.json";
import LockerFactory from "../../contracts/TokenLockerFactory.json";
import {
  Box,
  Column,
  Container,
  FooterLink,
  Heading,
  Row,
} from "./FooterStyle";

const Footer = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const goToBtn = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'

    });
  };
  
  window.addEventListener('scroll', toggleVisible);

 
  return (
    <>
      <section className="footer">
        <Box>
          <Container style={{ padding: 30 }}>
            <Row jc="space-evenly" className="footer-wrapper footer-dol">
              {/* <Column className="text-collapse">
                <Heading className="text">Contract Addresses</Heading>
                <p>IDO Factory: </p>
                <FooterLink
                  target="_blank"
                  href={
                    process.env.REACT_APP_Explorer +
                    "address/" +
                    IDOFactory.networks[3].address
                  }
                >
                  {IDOFactory.networks[3].address}
                </FooterLink>
                {
                  process.env.REACT_APP_ENABLE_LOCKER === 'true' && (
                    <>
                      <p>Locker Factory: </p>
                      <FooterLink
                        target="_blank"
                        className="footer-text"
                        href={
                          process.env.REACT_APP_Explorer +
                          "address/" +
                          LockerFactory.networks[process.env.REACT_APP_networkID].address
                        }
                      >
                        {LockerFactory.networks[process.env.REACT_APP_networkID].address}
                      </FooterLink>
                    </>
                  )

                }
              
              </Column> */}
              <Column fd="row" jc="space-evenly">
                <ul className="footer-menu">
                  <li className="social__item">
                    <SocialIcon
                      network="email"
                      url="mailto:support@onout.org?subject=IDOFactory&body=Hello, write you from IDOFactory demo..."
                      target="_blank"
                      bgColor="#fff"
                      fgColor="#000000"
                    />
                  </li>
                  <li className="social__item">
                    <SocialIcon
                      network="telegram"
                      url="https://t.me/swaponline"
                      target="_blank"
                      bgColor="#fff"
                      fgColor="#000000"
                    />
                  </li>
                  <li className="social__item">
                    <SocialIcon
                      network="discord"
                      url="https://discord.gg/ukkgCUsU5c"
                      target="_blank"
                      bgColor="#fff"
                      fgColor="#000000"
                    />
                  </li>
                  <li className="social__item">
                    <SocialIcon
                      url="https://tools.onout.org/"
                      target="_blank"
                      bgColor="#fff"
                      fgColor="#000000"
                    />
                  </li>
                </ul>
              </Column>
            </Row>
          </Container>
        </Box>
        <div className="footer__copyright">
          <div className="container">
            <div className="text-center py-4">
              <p className=" mb-0">TorkGo© 2022 | All Rights Reserved </p>
            </div>
          </div>
        </div>
      </section>
      {/* <a href="#" className="scrollToTop" onClick={goToBtn}><i className="arrow-up-from-bracket"></i></a> */}
      <button className="scrollToTop" onClick={goToBtn} >
        <i className="arrow-up-from-bracket" 
        // style={{display: visible ? 'inline' : 'none'}}
        ></i>

      </button>
    </>
  );
};
export default Footer;
