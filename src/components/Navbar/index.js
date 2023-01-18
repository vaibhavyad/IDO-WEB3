import BigNumber from "bignumber.js";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import { clearCache, connect } from "../../redux/blockchain/blockchainActions";
import * as s from "../../styles/global";
import "../../styles/style.css"

const Navigation = () => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const { account, FeeToken } = useSelector((state) => state.blockchain);
  const {
    ETHamount,
    FeeTokenamount,
    FeeTokenSymbol,
  } = useSelector((state) => state.data);

  const mockCompanyLogo = "https://i.postimg.cc/M6B2Kbgy/SPARXIT-1.png";
  useEffect(() => {
    if (window.matchMedia("(min-width: 992px)").matches) {
      setMenu(true)
    }
  }, [])
  const openMenu = () => {
    setMenu(!menu);
  }
  return (
    <section className="header-section">
      <Container>
        <div className="header-holder">
          <div className="header-primary d-flex justify-content-between align-items-center">
            <Link className="brand-logo" to="/">
              <img src={mockCompanyLogo} />
            </Link>
            <div className="header-wrapper position-static">
              <Navbar className="menu-area position-static" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-hamburger" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <ul className="menu">
                      <li>
                        <LinkContainer to="/">
                          <Nav.Link className="menu-option">Home</Nav.Link>
                        </LinkContainer>
                      </li>
                      <li className="menu-item-has-children">
                        <div className={menu ? "menu-option nav-link active" : "menu-option nav-link"} onClick={openMenu} onMouseOver={() => setMenu(true)}>
                          Project
                        </div>
                        {menu ? <ul className="sub-menu" onClick={() => setMenu(!false)} >
                          <li>
                            <LinkContainer to="/project">
                              {menu ? <Nav.Link>IDOs Project</Nav.Link> : null}

                            </LinkContainer>
                          </li>
                          <li>
                            <LinkContainer to="/account">
                              <Nav.Link>Apply to launch</Nav.Link>
                            </LinkContainer>
                          </li>
                          {/* <li>
                            <LinkContainer to="/project-detail">
                              <Nav.Link>Project Details</Nav.Link>
                            </LinkContainer>
                          </li> */}
                          {/* <li>
                            <LinkContainer to="/account">
                              <Nav.Link>Apply For Project</Nav.Link>
                            </LinkContainer>
                          </li> */}
                          <li>
                            <LinkContainer to="/tokenomics">
                              <Nav.Link>Tokenomics</Nav.Link>
                            </LinkContainer>
                          </li>
                        </ul> : null}
                      </li>
                      {
                        process.env.REACT_APP_ENABLE_LOCKER === 'true' &&
                        <li>
                          <LinkContainer to="/locker">
                            <Nav.Link>Locker</Nav.Link>
                          </LinkContainer>
                        </li>
                      }
                      <li className="menu-item-has-children">
                        <div className={menu ? "menu-option nav-link active" : "menu-option nav-link"} onClick={openMenu} onMouseOver={() => setMenu(true)}>
                          stacking
                        </div>
                        {menu ? <ul className="sub-menu" onClick={() => setMenu(false)}>
                          <li>
                            <LinkContainer to="/stacking">
                              <Nav.Link>Stacking</Nav.Link>
                            </LinkContainer>
                          </li>
                        </ul> : null}
                      </li>
                      {/*  <li className="menu-item-has-children">
                        <div className={menu ? "menu-option nav-link active" : "menu-option nav-link"} onClick={openMenu} onMouseOver={() => setMenu(true)}>
                          Page
                        </div>
                        {menu ? <ul className="sub-menu" onClick={() => setMenu(false)}>
                          <li>
                            <LinkContainer to="/kyc">
                              <Nav.Link>kyc</Nav.Link>
                            </LinkContainer>
                          </li>
                          <li>
                            <LinkContainer to="/faq">
                              <Nav.Link>faq</Nav.Link>
                            </LinkContainer>
                          </li>
                          <li>
                            <LinkContainer to="/leader-board">
                              <Nav.Link>Leader board</Nav.Link>
                            </LinkContainer>
                          </li>
                          <li className="account-menu">
                            <div className={menu ? "account active" : "account"} onClick={openMenu} onMouseOver={() => setMenu(true)}>
                              <LinkContainer to="/leader-board">
                                <Nav.Link>Account</Nav.Link>
                              </LinkContainer>
                            </div>
                            {menu ? <ul className="sub-menu" onClick={() => setMenu(false)}>
                              <li>
                                <LinkContainer to="/sign-up">
                                  <Nav.Link>Sign up</Nav.Link>
                                </LinkContainer>
                              </li>
                              <li>
                                <LinkContainer to="/login">
                                  <Nav.Link>Log In</Nav.Link>
                                </LinkContainer>
                              </li>
                              <li>
                                <LinkContainer to="/reset-pass">
                                  <Nav.Link>Reset Pass</Nav.Link>
                                </LinkContainer>
                              </li>
                            </ul> : null}

                          </li>
                          <li>
                            <LinkContainer to="/">
                              <Nav.Link>404</Nav.Link>
                            </LinkContainer>
                          </li>
                        </ul> : null}
                      </li> */}
                      <li>
                        <Nav.Link className="menu-option">ChainId: {process.env.REACT_APP_networkID}</Nav.Link>
                      </li>
                      <li>
                        <Nav.Link className="menu-option">Network: {process.env.REACT_APP_modalNetwork}</Nav.Link>
                      </li>
                    </ul>

                  </Nav>
                  {ETHamount >= 0 ? (
                    <NavDropdown
                      title={
                        `${'ETH'} ` +
                        BigNumber(ETHamount)
                          .dividedBy(10 ** 18)
                          .toFormat(2)
                      }
                      id="collasible-nav-dropdown"
                    >
                      <Nav.Link
                        href={`https://ropsten.etherscan.io/address/${FeeToken._address}`}
                        target="_blank"
                      >
                        {`FEE Token : ${FeeTokenSymbol} ` +
                          BigNumber(FeeTokenamount)
                            .dividedBy(10 ** 18)
                            .toFormat(0)}
                      </Nav.Link>
                      {/* <NavDropdown.Item href="#action/3.3"></NavDropdown.Item> */}
                      <NavDropdown.Divider />
                    </NavDropdown>
                  ) : null}
                  <s.Container ai="center">
                    {account == null ? (
                      <s.button
                        className="wallet-btn d-none d-lg-block"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                        }}
                      >
                        CONNECT
                      </s.button>
                    ) : (
                      <s.button
                        className="address text-collapse address-connect"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(clearCache());
                        }}
                      >
                        {account}
                      </s.button>
                    )}
                  </s.Container>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Navigation;
