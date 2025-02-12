import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { handleRedirect } from '../lib/redirectLocationHandler'; 
const HeaderMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  useEffect(() => {
    const header = document.querySelector("#main-header");
    const toggleClass = "sticky-header";

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 150) {
        header.classList.add(toggleClass);
      } else {
        header.classList.remove(toggleClass);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prevOpenSubmenus) => ({
      ...prevOpenSubmenus,
      [index]: !prevOpenSubmenus[index], // Toggle the current submenu
      // Close other submenus
      ...Object.keys(prevOpenSubmenus).reduce((acc, key) => {
        if (key !== index.toString()) {
          acc[key] = false;
        }
        return acc;
      }, {}),
    }));
  };

  const menuItems = [
    {
      title: "Trading",
      href: null,
      submenu: [
        { title: "Pricing Model", href: "/pricing-model" },
        { title: "Account Comparison", href: "/account-comparison" },
        { title: "Open Live Account", href: "#", onClick: (e) => handleLinkClick(e, false) },
        { title: "Open Demo Account", href: "#", onClick: (e) => handleLinkClick(e, false) },
      ],
    },
    {
      title: "Markets",
      href: null,
      submenu: [
        { title: "Currencies", href: "/currencies" },
        { title: "Metals", href: "/metals" },
        { title: "Energy", href: "/energy" },
        { title: "Indices", href: "/indices" },
        { title: "CFD", href: "/cfd" },
      ],
    },
    {
      title: "Platforms",
      href: null,
      submenu: [
        {
          title: "Desktop",
          href: null,
          subsubmenu: [
            { title: "MetaTrader 4", href: "/desktop/metatrader4" },
            { title: "MetaTrader 5", href: "/desktop/metatrader5" },
          ],
        },
        {
          title: "Mobile",
          href: null,
          subsubmenu: [
            { title: "FastOne MetaTrader 4", href: "/mobile/metatrader4" },
            { title: "FastOne MetaTrader 5", href: "/mobile/metatrader5" },
          ],
        },
        {
          title: "Web",
          href: null,
          subsubmenu: [
            { title: "WebTerminal - MetaTrader 4", href: "/web/metatrader4" },
            { title: "WebTerminal - MetaTrader 5", href: "/web/metatrader5" },
          ],
        },
      ],
      orientation: "fo-horizontal",
    },
    {
      title: "News",
      href: null,
      submenu: [
        { title: "Market Updates", href: "/market-updates" },
      ],
    },
    {
      title: "Company",
      href: null,
      submenu: [
        { title: "About FastOne", href: "/about" },
        { title: "Why choose FastOne?", href: "/why-choose-us" },
        { title: "Contact Us", href: "/contact" },
        { title: "Regulation", href: "/regulation" },
        { title: "KYC AML", href: "/kyc-aml" },
        { title: "Legal", href: "/legal" },
        { title: "Data Protection", href: "/data-protection" },
        { title: "Complaints", href: "/complaints" },
      ],
    },
    {
      title: "Partners",
      href: "/introducing-broker", // Direct link
      submenu: [], // No submenu
    },
  ];

  const handleLinkClick = (event, isLogin) => {
    event.preventDefault(); 
    handleRedirect(isLogin);
  };

  return (
    <div
      id="main-header"
      className={`main-header ${isMenuOpen ? "menu-open" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-8 col-xl-2 col-lg-2">
            <Link to="/">
              <span className="logo"></span>
            </Link>
          </div>
          <div className="menu-toggle col-4" onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </div>
          <div
            className={`menu-and-search col-md-6 ${isMenuOpen ? "open" : ""}`}
          >
            <nav className="main-menu">
              <ul className="l1-ul">
                {menuItems.map((item, index) => (
                  <li key={index} className={item.submenu.length ? "has-submenu" : ""}>
                    {item.href ? (
                      <Link to={item.href} className="menu-link menu-title">
                        {item.title}
                      </Link>
                    ) : (
                      <span className="menu-title">
                        {item.title}
                        {item.submenu.length > 0 && (
                          <button
                            className="submenu-toggle"
                            onClick={() => toggleSubmenu(index)}
                          >
                            {openSubmenus[index] ? "-" : "+"}
                          </button>
                        )}
                      </span>
                    )}
                    {item.submenu.length > 0 && (
                      <ul
                        className={`submenu ${
                          openSubmenus[index] ? "open" : ""
                        } ${item.orientation || "fo-vertical"}`}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className={
                              subItem.subsubmenu ? "has-subsubmenu" : ""
                            }
                          >
                            {subItem.href ? (
                              <Link
                                to={subItem.href}
                                onClick={(e) => subItem.onClick && subItem.onClick(e)}
                                className="submenu-link"
                              >
                                {subItem.title}
                              </Link>
                            ) : (
                              <span className="menu-subtitle">
                                {subItem.title}
                              </span>
                            )}
                            {subItem.subsubmenu && (
                              <ul
                                className={`subsubmenu ${
                                  openSubmenus[`${index}-${subIndex}`]
                                    ? "open"
                                    : ""
                                } ${subItem.orientation || "fo-vertical"}`}
                              >
                                {subItem.subsubmenu.map(
                                  (subSubItem, subSubIndex) => (
                                    <li key={subSubIndex}>
                                      <Link
                                        to={subSubItem.href}
                                        className="subsubmenu-link"
                                      >
                                        {subSubItem.title}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={`auth-nav col-12 col-xl-4 col-lg-10 col-md-9 col-sm-8 ${isMenuOpen ? "open" : ""}`}>
            <Link to="#" onClick={(e) => handleLinkClick(e, true)} className="btn login-btn">
              Log in
            </Link>
            <Link to="#" onClick={(e) => handleLinkClick(e, false)} className="btn create-account">
              Create Account
            </Link>
            {/* <span className="lang-switch">
              <GlobeIcon />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
