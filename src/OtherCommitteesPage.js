import React, { useState, useEffect } from "react";

// The Header component, self-contained within this file.
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownItems = [
    { label: "Thrust Area", key: "thrust-area", href: "#" },
    {
      label: "On Going Research Projects",
      key: "ongoing-research-projects",
      href: "#",
    },
    {
      label: "Completed Research Projects",
      key: "completed-research-projects",
      href: "#",
    },
    { label: "Joint Project", key: "joint-project", href: "#" },
    {
      label: "Important Laboratories",
      key: "important-laboratories",
      href: "/laboratories",
    },
    {
      label: "Departmental Committees",
      key: "departmental-committees",
      href: "#",
    },
    {
      label: "Alumni Relations",
      key: "alumni-relations",
      href: "/alumni-relations",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".dropdown-toggle") &&
        !e.target.closest(".dropdown-menu")
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        /* --- HEADER STYLES --- */
        .amu-header-horizontal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          border-radius: 20px;
          padding: 12px 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          flex-wrap: wrap; /* Allows items to wrap to a new line on small screens */
        }

        .amu-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .amu-left img {
          height: 45px;
        }

        .amu-title {
          font-weight: bold;
          font-size: 1.2em;
          color: #004d40;
        }

        .amu-nav {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .amu-nav-link, .dropdown-toggle {
          text-decoration: none;
          color: #004d40;
          font-weight: 600;
          font-size: 0.95em;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
        }

        .amu-nav-link:hover, .dropdown-toggle:hover {
          color: #00796b;
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          padding: 10px;
          top: 100%;
          right: 0;
          z-index: 999;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .dropdown-menu-item {
          display: block;
          padding: 8px;
          color: #004d40;
          text-decoration: none;
          font-size: 14px;
          transition: background-color 0.2s ease-in-out;
        }

        .dropdown-menu-item:hover {
          background: #e0f2f1;
          border-radius: 4px;
        }

        /* Responsive adjustments for the header on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-header-horizontal {
            flex-direction: column;
            align-items: flex-start;
            padding: 15px;
          }
          .amu-left {
            margin-bottom: 15px;
          }
          .amu-nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
          }
          .amu-nav-link, .dropdown-toggle {
            width: 100%;
            text-align: left;
            padding: 8px 0;
          }
          .dropdown-wrapper {
            width: 100%;
          }
          .dropdown-menu {
            position: static;
            width: 100%;
            box-shadow: none;
            border: none;
            padding: 0;
            margin-top: 5px;
            background: #f8f8f8;
          }
          .dropdown-menu-item {
            padding-left: 15px;
          }
        }

        /* Further adjustments for very small mobile devices */
        @media (max-width: 480px) {
          .amu-title {
            font-size: 1em;
            text-align: center;
            width: 100%;
          }
          .amu-left {
            flex-direction: column;
          }
          .amu-left img {
            height: 35px;
          }
        }
      `}</style>
      <header className="amu-header-horizontal">
        <div className="amu-left">
          <img
            src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
            alt="AMU Logo"
            className="amu-logo"
          />
          <span className="amu-title">Aligarh Muslim University</span>
        </div>
        <nav className="amu-nav">
          <a href="/" className="amu-nav-link">
            Home
          </a>
          <a href="/about" className="amu-nav-link">
            About
          </a>
          <a href="/programs" className="amu-nav-link">
            Programs
          </a>
          <a href="/faculty" className="amu-nav-link">
            Faculty
          </a>
          <a href="/contact" className="amu-nav-link">
            Contact
          </a>
          <div className="dropdown-wrapper">
            <span
              className="dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Links ▼
            </span>
            {showDropdown && (
              <div className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.key}
                    className="dropdown-menu-item"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="amu-underline"></div>
    </>
  );
};

// The Footer component, self-contained within this file.
const Footer = () => {
  return (
    <>
      <style>{`
        /* --- FOOTER STYLES --- */
        .amu-footer {
          background-color: #ffffff;
          color: #004d40;
          padding: 20px 0;
          margin-top: auto;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-logo {
          height: 50px;
        }

        .footer-text {
          font-size: 0.9em;
          line-height: 1.6;
          color: #004d40;
        }

        .footer-right {
          text-align: right;
          font-size: 0.85em;
          color: #004d40;
        }

        /* Responsive adjustments for the footer on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-footer {
            padding: 15px 0;
          }
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 0 15px;
          }
          .footer-left {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
          }
          .footer-logo {
            margin-bottom: 5px;
          }
        }
      `}</style>
      <footer className="amu-footer">
        <div className="footer-container">
          <div className="footer-left">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Aligarh Muslim University. All
              Rights Reserved.
            </p>
          </div>
          <div className="footer-right">
            <p>Designed and Developed by Department of Computer Science</p>
            <p>Contact: info@amu.ac.in</p>
          </div>
        </div>
      </footer>
    </>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <style>{`
        /* Global Styles (apply to the entire page body) */
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #f7f8f6;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Main content area styling */
        .main-content-wrapper {
          flex-grow: 1;
          max-width: 1100px;
          margin: 20px auto;
          padding: 0 20px;
          width: 100%;
        }

        .amu-underline {
          height: 4px;
          background: #004d40;
          width: 100%;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          margin-bottom: 20px;
        }
      `}</style>
      <Header />
      <main className="main-content-wrapper">{children}</main>
      <Footer />
    </>
  );
};

const OtherCommitteesPage = () => {
  return (
    <Layout>
      <style>{`
        /* --- COMMITTEE BODY STYLES --- */
        .committees-container {
          padding: 20px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .page-title {
          font-size: 2.2rem;
          font-weight: bold;
          color: #004d40;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .committee-section {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 20px;
          transition: transform 0.2s ease-in-out;
        }

        .committee-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }

        .committee-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #b71c1c;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .committee-member-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .committee-member {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .committee-member:last-child {
          border-bottom: none;
        }
        .member-name {
          font-size: 1.1rem;
          color: #004d40;
        }
        .member-role {
          font-size: 1.1rem;
          font-weight: bold;
          color: #004d40;
        }
        /* Responsive adjustments for the committee members */
        @media (max-width: 600px) {
          .committee-member {
            flex-direction: column;
            align-items: flex-start;
          }
          .member-role {
            margin-top: 5px;
          }
        }
      `}</style>
      <div className="committees-container">
        <h1 className="page-title">Departmental Committees</h1>

        <div className="committee-section">
          <h2 className="committee-title">
            FEEDBACK ANALYSIS AND ACTION COMMITTEE
          </h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
              <span className="member-role">Advisor</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Swaleha Zubair</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Ms. Sehba Masood</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Nadeem</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faraz Masood</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Sajid</span>
              <span className="member-role">Convener</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">
            INTERNATIONAL CONFERENCE COMMITTEE
          </h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
              <span className="member-role">Advisor</span>
            </li>
            <li className="committee-member">
              <span className="member-name">
                Prof. Mohammad Ubaidullah Bokhari
              </span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Sajid</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Nadeem</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Shafiqul Abidin</span>
              <span className="member-role">Convener</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">
            BRIDGE COURSE IMPLEMENTATION COMMITTEE
          </h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">
                Prof. Mohammad Ubaidullah Bokhari
              </span>
              <span className="member-role">M.C.A. Programme Coordinator</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Suhel Mustajab</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Sajid</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Swaleha Zubair</span>
              <span className="member-role">Convener</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">INDUSTRY ADVISORY BOARD</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Industry Advisory Board</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">ANTI-SEXUAL HARASSMENT COMMITTEE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Swaleha Zubair</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Ms. Priti Bala</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Mr. Shahid Masood</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Ms. Sehba Masood</span>
              <span className="member-role">Convener</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">ANTI RAGGING CELL</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Sehba Masood</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Swaleha Zubair</span>
              <span className="member-role">Convener</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Saim Shakeel</span>
              <span className="member-role">MCA-II Year</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Adeeba Zakir</span>
              <span className="member-role">MCA-I Year</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Manya Chaudhary</span>
              <span className="member-role">M.Sc. (CA & DF)-II Year</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Laeeba Javed</span>
              <span className="member-role">M.Sc. (CA & DF)-I year</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Tuba Rehman</span>
              <span className="member-role">B.Sc. (CA)-III Year</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Ahmad Mustafa Khowaja</span>
              <span className="member-role">B.Sc. (CA)-I Year</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">COURSE SYLLABI REVISION COMMITTEE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">
                MCA/B.Sc. (Hons.) Computer Applications Course Syllabi Revision
                Committee reconstituted on 25.05.2021
              </span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">DEPARTMENTAL PURCHASE COMMITTEE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">
                Prof. Mohammad Ubaidullah Bokhari
              </span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">
            R.T.I. (RIGHT TO INFORMATION) COMMITTEE
          </h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Suhel Mustajab</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Mr. Shahid Masood</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">
            LAB MANUALS UP-GRADATION COMMITTEE
          </h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">
                Prof. Mohammad Ubaidullah Bokhari
              </span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Suhel Mustajab</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Sajid</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Nadeem</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faraz Masood</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">YOUTUBE CHANNEL COMMITTEE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Nadeem</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
              <span className="member-role">Convener</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">CURRICULUM REVIEW COMMITTEE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">
                Prof. Mohammad Ubaidullah Bokhari
              </span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Suhel Mustajab</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Swaleha Zubair</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Shafiqul Abidin</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Sajid</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Nadeem</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
              <span className="member-role">Convener</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">CAREER COUNSELING COMMITTEE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">
                Prof. Mohammad Ubaidullah Bokhari
              </span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Suhel Mustajab</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Swaleha Zubair</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Shafiqul Abidin</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Sajid</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Nadeem</span>
              <span className="member-role">Convener</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">GRIEVANCE REDRESSAL COMMITTEE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Suhel Mustajab</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Mr. Shahid Masood</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Sehba Masood</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
              <span className="member-role">Convener</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Tabassum Yunus</span>
              <span className="member-role">MCA-II Year</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Chirag Maheshwari</span>
              <span className="member-role">M.Sc. (CA & DF)-II Year</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Syed Umar Ali</span>
              <span className="member-role">B.Sc. (CA)-III Year</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">DEPARTMENT INNOVATION COMMITTEE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">
                Prof. Mohammad Ubaidullah Bokhari
              </span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Suhel Mustajab</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Swaleha Zubair</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Shafiqul Abidin</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Sajid</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Nadeem</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Shabbir Hassan</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
              <span className="member-role">Convener</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">DISCIPLINE COMMITTEE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Arman Rasool Faridi</span>
              <span className="member-role">Chairperson</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Suhel Mustajab</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Ms. Sehba Masood</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Nadeem</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Swaleha Zubair</span>
              <span className="member-role">Convener</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">ACCREDITATION & RANKING COMMITTEE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
              <span className="member-role">Advisor</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Swaleha Zubair</span>
              <span className="member-role">Nodal Officer</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Shafiqul Abidin</span>
              <span className="member-role">Facilitator</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Asif Irshad Khan</span>
              <span className="member-role">Facilitator</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
              <span className="member-role">Facilitator</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Nadeem</span>
              <span className="member-role">Facilitator</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Sajid</span>
              <span className="member-role">Convener</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">SWAYAM COURSE COMMITTEE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Dr. Asif Irshad Khan</span>
              <span className="member-role">Course Coordinator</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Nadeem</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faraz Masood</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Prof. Swaleha Zubair</span>
              <span className="member-role">Convener</span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">TRAINING & PLACEMENT CELL (TPC)</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Nadeem</span>
              <span className="member-role">Training & Placement Officer</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
              <span className="member-role">
                Deputy Training & Placement Officer
              </span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Sajid</span>
              <span className="member-role">
                Deputy Training & Placement Officer
              </span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">PROGRAMME COORDINATOR</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
              <span className="member-role">Ph.D. (Computer Science)</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Asif Irshad Khan</span>
              <span className="member-role">
                Master of Computer Applications (MCA)
              </span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Shafiqul Abidin</span>
              <span className="member-role">
                M.Sc. in Cyber Security & Digital Forensics
              </span>
            </li>
            <li className="committee-member">
              <span className="member-name">Ms. Sehba Masood</span>
              <span className="member-role">
                B.Sc. (Hons.) Computer Applications
              </span>
            </li>
          </ul>
        </div>

        <div className="committee-section">
          <h2 className="committee-title">LAB INCHARGE</h2>
          <ul className="committee-member-list">
            <li className="committee-member">
              <span className="member-name">Prof. Aasim Zafar</span>
              <span className="member-role">Research Labs</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Asif Irshad Khan</span>
              <span className="member-role">UG Lab and Servers</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Faisal Anwer</span>
              <span className="member-role">PG Lab</span>
            </li>
            <li className="committee-member">
              <span className="member-name">Dr. Mohammad Sajid</span>
              <span className="member-role">
                M.Sc. (Cyber Security & Digital Forensics) Lab
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

const App = () => {
  return <OtherCommitteesPage />;
};

export default App;
