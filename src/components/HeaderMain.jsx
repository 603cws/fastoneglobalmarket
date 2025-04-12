// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { handleRedirect } from "../lib/redirectLocationHandler";

// const HeaderMain = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openSubmenus, setOpenSubmenus] = useState({});

//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector("#main-header");
//       if (window.pageYOffset > 150) {
//         header.classList.add(
//           "sticky",
//           "top-0",
//           "shadow-md",
//           "bg-white",
//           "z-50"
//         );
//       } else {
//         header.classList.remove(
//           "sticky",
//           "top-0",
//           "shadow-md",
//           "bg-white",
//           "z-50"
//         );
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleToggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleSubmenu = (index) => {
//     setOpenSubmenus((prev) => ({
//       ...Object.fromEntries(Object.keys(prev).map((k) => [k, false])),
//       [index]: !prev[index],
//     }));
//   };

//   const handleLinkClick = (e, isLogin) => {
//     e.preventDefault();
//     handleRedirect(isLogin);
//   };

//   const menuItems = [
//     {
//       title: "Trading",
//       submenu: [
//         { title: "Pricing Model", href: "/pricing-model" },
//         { title: "Account Comparison", href: "/account-comparison" },
//         {
//           title: "Open Live Account",
//           href: "#",
//           onClick: (e) => handleLinkClick(e, false),
//         },
//         {
//           title: "Open Demo Account",
//           href: "#",
//           onClick: (e) => handleLinkClick(e, false),
//         },
//       ],
//     },
//     {
//       title: "Markets",
//       submenu: [
//         { title: "Currencies", href: "/currencies" },
//         { title: "Metals", href: "/metals" },
//         { title: "Energy", href: "/energy" },
//         { title: "Indices", href: "/indices" },
//         { title: "CFD", href: "/cfd" },
//       ],
//     },
//     {
//       title: "Platforms",
//       submenu: [
//         {
//           title: "Desktop",
//           subsubmenu: [
//             { title: "MetaTrader 4", href: "/desktop/metatrader4" },
//             { title: "MetaTrader 5", href: "/desktop/metatrader5" },
//           ],
//         },
//         {
//           title: "Mobile",
//           subsubmenu: [
//             { title: "FastOne MetaTrader 4", href: "/mobile/metatrader4" },
//             { title: "FastOne MetaTrader 5", href: "/mobile/metatrader5" },
//           ],
//         },
//         {
//           title: "Web",
//           subsubmenu: [
//             { title: "WebTerminal - MetaTrader 4", href: "/web/metatrader4" },
//             { title: "WebTerminal - MetaTrader 5", href: "/web/metatrader5" },
//           ],
//         },
//       ],
//     },
//     {
//       title: "News",
//       submenu: [{ title: "Market Updates", href: "/market-updates" }],
//     },
//     {
//       title: "Company",
//       submenu: [
//         { title: "About FastOne", href: "/about" },
//         { title: "Why choose FastOne?", href: "/why-choose-us" },
//         { title: "Contact Us", href: "/contact" },
//         { title: "Regulation", href: "/regulation" },
//         { title: "KYC AML", href: "/kyc-aml" },
//         { title: "Legal", href: "/legal" },
//         { title: "Data Protection", href: "/data-protection" },
//         { title: "Complaints", href: "/complaints" },
//       ],
//     },
//     {
//       title: "Partners",
//       href: "/introducing-broker",
//       submenu: [],
//     },
//   ];

//   return (
//     <header
//       id="main-header"
//       className="w-full bg-white transition-all duration-300"
//     >
//       <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
//         <Link to="/" className="text-xl font-bold text-blue-600">
//           <span className="logo">FastOne</span>
//         </Link>

//         <button className="text-gray-800 md:hidden" onClick={handleToggleMenu}>
//           {isMenuOpen ? "✖" : "☰"}
//         </button>

//         <nav
//           className={`w-full md:w-auto md:flex md:items-center ${
//             isMenuOpen ? "block" : "hidden"
//           }`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-6">
//             {menuItems.map((item, index) => (
//               <li key={index} className="relative group">
//                 {item.href ? (
//                   <Link to={item.href} className="py-2 px-4 block">
//                     {item.title}
//                   </Link>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => toggleSubmenu(index)}
//                       className="py-2 px-4 flex items-center gap-1"
//                     >
//                       {item.title}{" "}
//                       <span>{openSubmenus[index] ? "▴" : "▾"}</span>
//                     </button>
//                     {item.submenu?.length > 0 && (
//                       <ul
//                         className={`absolute left-0 bg-white shadow-lg mt-2 rounded-md z-50 w-48 transition-all duration-200 ${
//                           openSubmenus[index] ? "block" : "hidden"
//                         }`}
//                       >
//                         {item.submenu.map((sub, subIdx) => (
//                           <li key={subIdx} className="relative">
//                             {sub.subsubmenu ? (
//                               <>
//                                 <span className="block px-4 py-2 font-semibold">
//                                   {sub.title}
//                                 </span>
//                                 <ul className="ml-4">
//                                   {sub.subsubmenu.map((subsub, subsubIdx) => (
//                                     <li key={subsubIdx}>
//                                       <Link
//                                         to={subsub.href}
//                                         className="block px-4 py-2 hover:bg-gray-100"
//                                       >
//                                         {subsub.title}
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </>
//                             ) : (
//                               <Link
//                                 to={sub.href}
//                                 onClick={(e) => sub.onClick && sub.onClick(e)}
//                                 className="block px-4 py-2 hover:bg-gray-100"
//                               >
//                                 {sub.title}
//                               </Link>
//                             )}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
//           <Link
//             to="#"
//             onClick={(e) => handleLinkClick(e, true)}
//             className="text-blue-600 hover:underline"
//           >
//             Log in
//           </Link>
//           <Link
//             to="#"
//             onClick={(e) => handleLinkClick(e, false)}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Create Account
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default HeaderMain;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { handleRedirect } from "../lib/redirectLocationHandler";
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
        {
          title: "Open Live Account",
          href: "#",
          onClick: (e) => handleLinkClick(e, false),
        },
        {
          title: "Open Demo Account",
          href: "#",
          onClick: (e) => handleLinkClick(e, false),
        },
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
      submenu: [{ title: "Market Updates", href: "/market-updates" }],
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
                  <li
                    key={index}
                    className={item.submenu.length ? "has-submenu" : ""}
                  >
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
                                onClick={(e) =>
                                  subItem.onClick && subItem.onClick(e)
                                }
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

          <div
            className={`auth-nav col-12 col-xl-4 col-lg-10 col-md-9 col-sm-8 ${
              isMenuOpen ? "open" : ""
            }`}
          >
            <Link
              to="#"
              onClick={(e) => handleLinkClick(e, true)}
              className="btn login-btn"
            >
              Log in
            </Link>
            <Link
              to="#"
              onClick={(e) => handleLinkClick(e, false)}
              className="btn create-account"
            >
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
