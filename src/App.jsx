import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["experience", "Experience"],
    ["contact", "Contact"],
  ];

  const skills = [
    ["🐍", "Python", "Programming"],
    ["🗄️", "SQL", "Database"],
    ["⚡", "JavaScript", "Web"],
    ["🌐", "HTML5", "Web"],
    ["🎨", "CSS3", "Web"],
    ["🧩", "DSA", "Core CS"],
    ["🤖", "Machine Learning", "AI / ML"],
    ["🧠", "Deep Learning", "AI / ML"],
    ["👁️", "Computer Vision", "AI / ML"],
    ["✨", "Generative AI", "AI / ML"],
    ["🐼", "Pandas", "Data"],
    ["🔢", "NumPy", "Data"],
    ["🔀", "Git", "Tools"],
    ["◉", "GitHub", "Tools"],
  ];

  const projects = [
    {
      number: "01",
      icon: "🌊",
      title: "AI Oceanographic Data Analysis",
      description:
        "AI-powered analysis of oceanographic, fisheries and biodiversity data using machine learning, preprocessing and data visualization.",
      tags: [
        "Python",
        "Machine Learning",
        "Pandas",
        "TensorFlow",
      ],
      link:
        "https://github.com/Jyoshika777/oceanographic-ai-system",
    },
    {
      number: "02",
      icon: "👥",
      title: "Trivon HR Portal",
      description:
        "Modern HR management platform for candidates, employees, payroll, performance, certificates and offer letters.",
      tags: [
        "React",
        "JavaScript",
        "Supabase",
        "PostgreSQL",
      ],
      link:
        "https://github.com/Jyoshika777/hr-portal",
    },
    {
      number: "03",
      icon: "🚲",
      title: "RideWise",
      description:
        "Machine learning system for predicting bike-sharing demand from historical rental data using regression algorithms.",
      tags: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "ML",
      ],
      link: "https://github.com/",
    },
  ];

  const experience = [
    {
      year: "2024",
      icon: "🤖",
      role: "AI / ML Intern",
      company: "BlackBuck",
      description:
        "Worked on weather prediction using Python, Pandas and machine learning techniques with live datasets.",
    },
    {
      year: "2024",
      icon: "💻",
      role: "Frontend Developer Intern",
      company: "Code Alpha",
      description:
        "Built frontend projects including a portfolio, calculator and image gallery using modern web technologies.",
    },
    {
      year: "2023",
      icon: "🎙️",
      role: "AI Intern",
      company: "1Stop & Linguify",
      description:
        "Worked on an automatic speech recognition system using MFCC features and TensorFlow.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);

      let current = "home";

      navItems.forEach(([id]) => {
        const element = document.getElementById(id);

        if (
          element &&
          window.scrollY >= element.offsetTop - 250
        ) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <style>{`

        /* =========================================
           RESET
        ========================================= */

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;

          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Arial,
            sans-serif;
        }

        button,
        a {
          font-family: inherit;
        }

        /* =========================================
           MAIN APP
        ========================================= */

        .app {
          min-height: 100vh;

          overflow-x: hidden;

          transition:
            background 0.4s ease,
            color 0.4s ease;
        }

        .dark {
          background: #07070b;

          color: #f7f7fb;
        }

        .light {
          background: #f6f6fa;

          color: #17171d;
        }

        /* =========================================
           BACKGROUND
        ========================================= */

        .background-grid {
          position: fixed;

          inset: 0;

          pointer-events: none;

          z-index: 0;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            );

          background-size: 70px 70px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 90%
            );
        }

        .light .background-grid {
          background-image:
            linear-gradient(
              rgba(0,0,0,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0,0,0,0.035) 1px,
              transparent 1px
            );
        }

        .orb {
          position: fixed;

          width: 450px;
          height: 450px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(130,95,255,0.16),
              transparent 68%
            );

          filter: blur(20px);

          pointer-events: none;

          z-index: 0;

          animation:
            floatOrb 10s ease-in-out infinite;
        }

        .orb.one {
          top: 5%;
          left: -180px;
        }

        .orb.two {
          top: 35%;
          right: -200px;

          animation-delay: -5s;
        }

        @keyframes floatOrb {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(50px);
          }

        }

        /* =========================================
           LARGE NAVIGATION
        ========================================= */

        .navbar {
          position: fixed;

          top: 18px;
          left: 50%;

          transform: translateX(-50%);

          width: calc(100% - 50px);

          max-width: 1450px;

          min-height: 76px;

          z-index: 1000;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 0 28px;

          border-radius: 20px;

          background:
            rgba(12,12,18,0.82);

          backdrop-filter: blur(22px);

          border:
            1px solid
            rgba(255,255,255,0.09);

          box-shadow:
            0 20px 70px
            rgba(0,0,0,0.28);
        }

        .light .navbar {
          background:
            rgba(255,255,255,0.88);

          border-color:
            rgba(0,0,0,0.08);

          box-shadow:
            0 15px 50px
            rgba(0,0,0,0.08);
        }

        /* LOGO */

        .logo {
          font-size: 27px;

          font-weight: 900;

          cursor: pointer;

          letter-spacing: -1.5px;

          min-width: 80px;
        }

        .logo span {
          color: #9b7cff;
        }

        /* NAV LINKS */

        .nav-links {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 8px;
        }

        .nav-links button {
          border: none;

          background: transparent;

          color: #999aa6;

          padding: 12px 17px;

          border-radius: 11px;

          cursor: pointer;

          font-size: 15px;

          font-weight: 600;

          letter-spacing: 0.1px;

          transition:
            color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }

        .nav-links button:hover {
          color: #c0adff;

          background:
            rgba(139,112,255,0.10);

          transform: translateY(-1px);
        }

        .nav-links button.active {
          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              rgba(139,112,255,0.20),
              rgba(103,76,210,0.10)
            );

          box-shadow:
            inset 0 0 0 1px
            rgba(155,124,255,0.12);
        }

        .light .nav-links button {
          color: #666673;
        }

        .light .nav-links button:hover {
          color: #7659dc;

          background:
            rgba(139,112,255,0.08);
        }

        .light .nav-links button.active {
          color: #7659dc;

          background:
            rgba(139,112,255,0.10);
        }

        /* THEME */

        .theme {
          width: 44px;
          height: 44px;

          flex-shrink: 0;

          border-radius: 12px;

          border:
            1px solid #30313b;

          background: #17171f;

          color: white;

          cursor: pointer;

          font-size: 18px;

          display: flex;

          align-items: center;

          justify-content: center;

          transition: 0.3s;
        }

        .light .theme {
          background: #eeeeF4;

          color: #33333c;

          border-color: #d8d8e0;
        }

        .theme:hover {
          transform:
            rotate(12deg)
            scale(1.08);

          border-color: #9b7cff;

          box-shadow:
            0 0 20px
            rgba(139,112,255,0.2);
        }

        /* MOBILE MENU */

        .menu-button {
          display: none;

          width: 44px;
          height: 44px;

          border-radius: 12px;

          border:
            1px solid #30313b;

          background: transparent;

          color: white;

          cursor: pointer;

          font-size: 21px;
        }

        .light .menu-button {
          color: #333;
        }

        /* =========================================
           SECTIONS
        ========================================= */

        section {
          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 1400px;

          margin: 0 auto;

          padding:
            110px 5vw;

          scroll-margin-top: 110px;
        }

        .section-label {
          color: #9b7cff;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 3px;

          text-transform: uppercase;

          display: flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 13px;
        }

        .section-label::before {
          content: "";

          width: 26px;
          height: 2px;

          background: #9b7cff;
        }

        .section-title {
          font-size:
            clamp(42px,5vw,64px);

          letter-spacing: -3px;

          line-height: 1;

          margin-bottom: 50px;
        }

        .gradient {
          background:
            linear-gradient(
              90deg,
              #ffffff,
              #a98cff,
              #679cff
            );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;
        }

        .light .gradient {
          background:
            linear-gradient(
              90deg,
              #22222b,
              #7958e8,
              #407bd8
            );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;
        }

        /* =========================================
           HERO
        ========================================= */

        .hero {
          width: 100%;

          max-width: 1500px;

          min-height: 100vh;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            1.15fr 0.85fr;

          align-items: center;

          gap: 40px;

          padding:
            170px 5vw 80px;
        }

        .availability {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          padding: 8px 13px;

          border-radius: 30px;

          border:
            1px solid
            rgba(139,112,255,0.25);

          background:
            rgba(139,112,255,0.07);

          color: #b09bff;

          font-size: 12px;

          margin-bottom: 28px;
        }

        .availability-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #62e59b;

          box-shadow:
            0 0 12px #62e59b;
        }

        .hello {
          color: #a88fff;

          font-weight: 700;

          font-size: 17px;

          margin-bottom: 14px;
        }

        .hero h1 {
          font-size:
            clamp(65px,7vw,105px);

          letter-spacing: -7px;

          line-height: 0.9;

          margin-bottom: 28px;
        }

        .hero-role {
          font-size:
            clamp(21px,3vw,30px);

          font-weight: 600;

          color: #c8c8d0;

          margin-bottom: 23px;
        }

        .light .hero-role {
          color: #5b5b66;
        }

        .hero-role span {
          color: #987bff;
        }

        .hero-description {
          max-width: 720px;

          color: #898b98;

          font-size: 16px;

          line-height: 1.85;

          margin-bottom: 18px;
        }

        .location {
          color: #6e707c;

          font-size: 13px;
        }

        .hero-buttons {
          display: flex;

          gap: 12px;

          flex-wrap: wrap;

          margin-top: 32px;
        }

        .btn {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          padding: 13px 19px;

          border-radius: 10px;

          text-decoration: none;

          font-size: 13px;

          font-weight: 700;

          cursor: pointer;

          transition: 0.3s;
        }

        .primary {
          color: white;

          background:
            linear-gradient(
              135deg,
              #9274ff,
              #634bd1
            );

          border:
            1px solid #a48cff;

          box-shadow:
            0 10px 30px
            rgba(122,91,230,0.2);
        }

        .primary:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 15px 40px
            rgba(122,91,230,0.4);
        }

        .secondary {
          color: #c6c7d0;

          background:
            rgba(255,255,255,0.025);

          border:
            1px solid #30313a;
        }

        .light .secondary {
          color: #4d4d59;

          background: white;

          border-color: #ddddE5;
        }

        .secondary:hover {
          color: #a88fff;

          border-color: #9073ff;

          transform:
            translateY(-4px);
        }

        .social-row {
          display: flex;

          gap: 9px;

          margin-top: 27px;
        }

        .social {
          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 11px;

          border:
            1px solid #292b35;

          background:
            rgba(255,255,255,0.02);

          color: #a0a1ac;

          text-decoration: none;

          font-size: 13px;

          font-weight: 800;

          transition: 0.3s;
        }

        .light .social {
          background: white;

          border-color: #ddddE5;

          color: #666673;
        }

        .social:hover {
          transform:
            translateY(-5px);

          color: white;

          border-color: #9578ff;

          background:
            rgba(139,112,255,0.1);
        }

        /* =========================================
           HERO VISUAL
        ========================================= */

        .hero-visual {
          position: relative;

          display: flex;

          justify-content: center;

          align-items: center;

          min-height: 450px;

          transform: scale(1.08);
        }

        .visual-ring {
          width: 340px;
          height: 340px;

          border-radius: 50%;

          border:
            1px solid
            rgba(151,122,255,0.25);

          position: relative;

          display: flex;

          align-items: center;

          justify-content: center;

          animation:
            rotateRing 25s linear infinite;
        }

        @keyframes rotateRing {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }

        .visual-ring::before {
          content: "";

          position: absolute;

          inset: 25px;

          border-radius: 50%;

          border:
            1px dashed
            rgba(151,122,255,0.3);
        }

        .visual-core {
          width: 210px;
          height: 210px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 72px;

          background:
            radial-gradient(
              circle at 35% 30%,
              #ae98ff,
              #674fd4 45%,
              #171328
            );

          box-shadow:
            0 0 100px
            rgba(139,112,255,0.3),

            inset 0 0 50px
            rgba(255,255,255,0.12);

          animation:
            coreFloat 4s ease-in-out infinite;
        }

        @keyframes coreFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }

        }

        .floating-card {
          position: absolute;

          padding: 12px 15px;

          border-radius: 12px;

          background:
            rgba(18,18,27,0.8);

          backdrop-filter: blur(15px);

          border:
            1px solid
            rgba(255,255,255,0.1);

          box-shadow:
            0 15px 40px
            rgba(0,0,0,0.25);

          font-size: 12px;

          color: #c3c3cd;

          animation:
            cardFloat 5s ease-in-out infinite;
        }

        .light .floating-card {
          background:
            rgba(255,255,255,0.85);

          color: #666673;

          border-color: #ddddE5;
        }

        .floating-card strong {
          display: block;

          color: #a98cff;

          margin-bottom: 3px;
        }

        .card-one {
          top: 55px;

          right: 0;
        }

        .card-two {
          bottom: 60px;

          left: 0;

          animation-delay: -2s;
        }

        @keyframes cardFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }

        }

        /* =========================================
           ABOUT
        ========================================= */

        .about-grid {
          display: grid;

          grid-template-columns:
            1.3fr 0.7fr;

          gap: 60px;
        }

        .about-text p {
          color: #90919c;

          line-height: 1.9;

          font-size: 15px;

          margin-bottom: 18px;

          max-width: 800px;
        }

        .about-card {
          padding: 25px;

          border-radius: 18px;

          border:
            1px solid #292b35;

          background:
            linear-gradient(
              145deg,
              rgba(139,112,255,0.07),
              rgba(255,255,255,0.015)
            );

          transition: 0.3s;
        }

        .light .about-card {
          background: white;

          border-color: #e0e0e7;

          box-shadow:
            0 15px 40px
            rgba(0,0,0,0.05);
        }

        .about-card:hover {
          transform:
            translateY(-6px);

          border-color: #9276ff;

          box-shadow:
            0 25px 60px
            rgba(0,0,0,0.2);
        }

        .info-item {
          padding: 17px 0;

          border-bottom:
            1px solid #292b35;
        }

        .light .info-item {
          border-color: #e4e4eb;
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-item strong {
          display: block;

          color: #a88fff;

          font-size: 11px;

          letter-spacing: 1px;

          margin-bottom: 7px;
        }

        .info-item span {
          color: #9b9ca7;

          font-size: 13px;

          line-height: 1.5;
        }

        /* =========================================
           STATS
        ========================================= */

        .stats {
          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 14px;

          margin-top: 40px;
        }

        .stat {
          padding: 24px;

          border:
            1px solid #292b35;

          border-radius: 14px;

          background:
            rgba(255,255,255,0.018);

          transition: 0.3s;
        }

        .light .stat {
          background: white;

          border-color: #e0e0e7;
        }

        .stat:hover {
          transform:
            translateY(-5px);

          border-color: #8f73ff;
        }

        .stat-number {
          font-size: 30px;

          font-weight: 900;

          color: #a88fff;
        }

        .stat-label {
          color: #6f717d;

          font-size: 12px;

          margin-top: 4px;
        }

        /* =========================================
           SKILLS
        ========================================= */

        .skills-grid {
          display: grid;

          grid-template-columns:
            repeat(7, minmax(0,1fr));

          gap: 14px;

          width: 100%;
        }

        .skill {
          position: relative;

          padding: 20px;

          min-height: 120px;

          border:
            1px solid #292b35;

          border-radius: 14px;

          background:
            rgba(255,255,255,0.018);

          overflow: hidden;

          transition: 0.3s;
        }

        .light .skill {
          background: white;

          border-color: #e0e0e7;
        }

        .skill::after {
          content: "";

          position: absolute;

          width: 70px;
          height: 70px;

          right: -35px;
          bottom: -35px;

          border-radius: 50%;

          background: #8f73ff;

          opacity: 0.05;
        }

        .skill:hover {
          transform:
            translateY(-6px);

          border-color: #9478ff;

          background:
            rgba(139,112,255,0.06);
        }

        .skill-icon {
          font-size: 25px;

          margin-bottom: 13px;
        }

        .skill-name {
          color: #c7c8d0;

          font-size: 13px;

          font-weight: 600;
        }

        .light .skill-name {
          color: #40404a;
        }

        .skill-type {
          color: #656773;

          font-size: 10px;

          margin-top: 5px;

          text-transform: uppercase;

          letter-spacing: 1px;
        }

        /* =========================================
           PROJECTS
        ========================================= */

        .projects {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0,1fr));

          gap: 22px;

          width: 100%;
        }

        .project {
          position: relative;

          min-height: 420px;

          padding: 27px;

          display: flex;

          flex-direction: column;

          border-radius: 19px;

          border:
            1px solid #292b35;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.035),
              rgba(255,255,255,0.01)
            );

          overflow: hidden;

          transition: 0.35s;
        }

        .light .project {
          background: white;

          border-color: #e0e0e7;

          box-shadow:
            0 15px 45px
            rgba(0,0,0,0.05);
        }

        .project:hover {
          transform:
            translateY(-9px);

          border-color: #9276ff;

          box-shadow:
            0 30px 70px
            rgba(0,0,0,0.25);
        }

        .project::before {
          content: "";

          position: absolute;

          width: 170px;
          height: 170px;

          right: -80px;
          top: -80px;

          border-radius: 50%;

          background: #8f73ff;

          filter: blur(45px);

          opacity: 0;

          transition: 0.4s;
        }

        .project:hover::before {
          opacity: 0.18;
        }

        .project-header {
          display: flex;

          justify-content: space-between;

          margin-bottom: 35px;
        }

        .project-icon {
          width: 55px;
          height: 55px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 14px;

          background:
            rgba(139,112,255,0.08);

          border:
            1px solid
            rgba(139,112,255,0.2);

          font-size: 28px;
        }

        .project-number {
          color: #494b57;

          font-size: 12px;

          font-weight: 800;
        }

        .project h3 {
          font-size: 20px;

          line-height: 1.35;

          margin-bottom: 15px;
        }

        .project-description {
          color: #858691;

          font-size: 13px;

          line-height: 1.8;

          flex: 1;
        }

        .tags {
          display: flex;

          flex-wrap: wrap;

          gap: 6px;

          margin: 20px 0;
        }

        .tag {
          color: #a895ff;

          background:
            rgba(139,112,255,0.08);

          border:
            1px solid
            rgba(139,112,255,0.14);

          border-radius: 6px;

          padding: 6px 8px;

          font-size: 10px;
        }

        .project-link {
          display: flex;

          justify-content: space-between;

          align-items: center;

          color: #a992ff;

          text-decoration: none;

          font-size: 12px;

          font-weight: 700;

          padding-top: 15px;

          border-top:
            1px solid #242630;
        }

        .light .project-link {
          border-color: #e5e5eb;
        }

        .project-link span {
          transition: 0.25s;
        }

        .project-link:hover span {
          transform:
            translateX(6px);
        }

        /* =========================================
           EXPERIENCE
        ========================================= */

        .timeline {
          position: relative;

          max-width: 900px;

          margin-left: 8px;
        }

        .timeline::before {
          content: "";

          position: absolute;

          left: 7px;

          top: 0;

          bottom: 0;

          width: 1px;

          background:
            linear-gradient(
              #9578ff,
              rgba(149,120,255,0)
            );
        }

        .experience {
          position: relative;

          padding-left: 48px;

          margin-bottom: 45px;
        }

        .experience-dot {
          position: absolute;

          left: 0;

          top: 3px;

          width: 15px;
          height: 15px;

          border-radius: 50%;

          background: #9b7cff;

          border:
            3px solid #07070b;

          box-shadow:
            0 0 18px
            rgba(139,112,255,0.8);
        }

        .light .experience-dot {
          border-color: #f6f6fa;
        }

        .experience-year {
          display: inline-block;

          color: #a992ff;

          font-size: 11px;

          font-weight: 700;

          padding: 6px 9px;

          border-radius: 6px;

          background:
            rgba(139,112,255,0.08);

          margin-bottom: 11px;
        }

        .experience h3 {
          font-size: 20px;

          margin-bottom: 5px;
        }

        .company {
          color: #71737e;

          font-size: 13px;

          margin-bottom: 11px;
        }

        .experience p {
          color: #888a95;

          font-size: 13px;

          line-height: 1.8;

          max-width: 750px;
        }

        /* =========================================
           CONTACT
        ========================================= */

        .contact {
          position: relative;

          text-align: center;

          padding: 90px 30px;

          border-radius: 25px;

          border:
            1px solid #312d48;

          overflow: hidden;

          background:
            radial-gradient(
              circle at center,
              rgba(139,112,255,0.13),
              rgba(255,255,255,0.015) 60%
            );
        }

        .light .contact {
          background:
            radial-gradient(
              circle at center,
              rgba(139,112,255,0.1),
              white 65%
            );

          border-color: #ddd7f3;
        }

        .contact::before {
          content: "";

          position: absolute;

          width: 300px;
          height: 300px;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%,-50%);

          border-radius: 50%;

          border:
            1px solid
            rgba(139,112,255,0.08);

          box-shadow:
            0 0 0 50px
            rgba(139,112,255,0.015),

            0 0 0 100px
            rgba(139,112,255,0.01);
        }

        .contact > * {
          position: relative;

          z-index: 2;
        }

        .contact h2 {
          font-size:
            clamp(42px,6vw,70px);

          letter-spacing: -4px;

          margin-bottom: 20px;
        }

        .contact p {
          max-width: 600px;

          margin:
            0 auto 30px;

          color: #858691;

          line-height: 1.8;

          font-size: 14px;
        }

        /* =========================================
           FOOTER
        ========================================= */

        footer {
          position: relative;

          z-index: 2;

          padding: 35px;

          text-align: center;

          border-top:
            1px solid #20212a;

          color: #5f616d;

          font-size: 12px;
        }

        .light footer {
          border-color: #dedee5;
        }

        footer span {
          color: #9b7cff;
        }

        /* =========================================
           TOP BUTTON
        ========================================= */

        .top {
          position: fixed;

          right: 24px;

          bottom: 24px;

          width: 44px;
          height: 44px;

          border-radius: 12px;

          border:
            1px solid #383244;

          background: #15131f;

          color: #ad99ff;

          cursor: pointer;

          z-index: 900;

          transition: 0.3s;
        }

        .top:hover {
          transform:
            translateY(-5px);

          background: #8f73ff;

          color: white;
        }

        /* =========================================
           LARGE DESKTOP
        ========================================= */

        @media (min-width: 1200px) {

          .hero h1 {
            font-size:
              clamp(72px,7vw,105px);
          }

          .hero-description {
            max-width: 720px;
          }

          .hero-visual {
            transform: scale(1.08);
          }

          .section-title {
            font-size: 64px;
          }

        }

        /* =========================================
           SMALL LAPTOP
        ========================================= */

        @media (max-width: 1100px) {

          .skills-grid {
            grid-template-columns:
              repeat(5,minmax(0,1fr));
          }

          .hero {
            gap: 20px;
          }

          .hero h1 {
            font-size: 70px;
          }

          .nav-links {
            gap: 2px;
          }

          .nav-links button {
            padding:
              11px 12px;

            font-size: 14px;
          }

        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1000px) {

          .nav-links {
            display: none;
          }

          .menu-button {
            display: block;
          }

          .navbar.menu-open {
            height: auto;

            flex-wrap: wrap;

            padding: 12px 15px;
          }

          .navbar.menu-open .nav-links {
            display: flex;

            width: 100%;

            flex-direction: column;

            padding-top: 12px;

            gap: 3px;
          }

          .navbar.menu-open .nav-links button {
            width: 100%;

            text-align: left;

            padding: 13px 15px;

            font-size: 15px;
          }

          .hero {
            grid-template-columns: 1fr;

            padding-top: 150px;
          }

          .hero-visual {
            min-height: 350px;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          .projects {
            grid-template-columns:
              repeat(2,minmax(0,1fr));
          }

          .skills-grid {
            grid-template-columns:
              repeat(4,minmax(0,1fr));
          }

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .navbar {
            width:
              calc(100% - 24px);

            top: 12px;

            min-height: 62px;

            padding: 0 14px;
          }

          .logo {
            font-size: 24px;
          }

          section {
            width: 100%;

            padding:
              90px 6vw;
          }

          .hero {
            padding:
              135px 6vw 70px;
          }

          .hero h1 {
            font-size:
              clamp(52px,15vw,72px);

            letter-spacing: -4px;
          }

          .hero-role {
            font-size: 21px;
          }

          .hero-description {
            font-size: 14px;
          }

          .hero-buttons {
            flex-direction: column;

            align-items: stretch;
          }

          .btn {
            width: 100%;
          }

          .hero-visual {
            min-height: 320px;

            transform:
              scale(0.85);
          }

          .visual-ring {
            width: 280px;
            height: 280px;
          }

          .visual-core {
            width: 170px;
            height: 170px;

            font-size: 55px;
          }

          .card-one {
            right: -5px;
          }

          .card-two {
            left: -5px;
          }

          .section-title {
            font-size: 43px;

            letter-spacing: -2px;
          }

          .stats {
            grid-template-columns:
              repeat(2,1fr);
          }

          .skills-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .skill {
            padding: 16px;

            min-height: 110px;
          }

          .projects {
            grid-template-columns: 1fr;
          }

          .project {
            min-height: 390px;
          }

          .contact {
            padding:
              60px 20px;
          }

          .contact h2 {
            font-size: 43px;
          }

          .top {
            right: 16px;

            bottom: 16px;
          }

        }

      `}</style>

      {/* BACKGROUND */}

      <div className="background-grid"></div>

      <div className="orb one"></div>

      <div className="orb two"></div>

      {/* NAVIGATION */}

      <nav
        className={`navbar ${
          menuOpen ? "menu-open" : ""
        }`}
      >

        <div
          className="logo"
          onClick={() =>
            scrollTo("home")
          }
        >
          J<span>I.</span>
        </div>

        <div className="nav-links">

          {navItems.map(
            ([id, label]) => (
              <button
                key={id}
                className={
                  activeSection === id
                    ? "active"
                    : ""
                }
                onClick={() =>
                  scrollTo(id)
                }
              >
                {label}
              </button>
            )
          )}

        </div>

        <button
          className="theme"
          onClick={() =>
            setDarkMode(!darkMode)
          }
          aria-label="Toggle theme"
        >
          {darkMode ? "☀" : "☾"}
        </button>

        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </nav>

      {/* =========================================
          HERO
      ========================================= */}

      <section
        id="home"
        className="hero"
      >

        <div>

          <div className="availability">

            <span className="availability-dot"></span>

            Open to Software Opportunities

          </div>

          <div className="hello">
            Hello, I'm
          </div>

          <h1>

            Jyoshika{" "}

            <span className="gradient">
              Irlapati
            </span>

          </h1>

          <div className="hero-role">

            Software Developer{" "}

            <span>•</span>{" "}

            AI/ML Enthusiast

          </div>

          <p className="hero-description">

            I build modern software applications,
            intelligent AI systems and data-driven
            solutions with a focus on clean design,
            practical problem solving and continuous
            learning.

          </p>

          <div className="location">

            📍 Vijayawada, Andhra Pradesh, India

          </div>

          <div className="hero-buttons">

            <button
              className="btn primary"
              onClick={() =>
                scrollTo("projects")
              }
            >
              🚀 Explore My Work
            </button>

            <a
              className="btn secondary"
              href="/Jyoshika_Irlapati_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              ↓ Resume
            </a>

          </div>

          <div className="social-row">

            <a
              className="social"
              href="https://github.com/Jyoshika777"
              target="_blank"
              rel="noreferrer"
            >
              GH
            </a>

            <a
              className="social"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>

            <a
              className="social"
              href="mailto:jyoshikajyoshika3@gmail.com"
            >
              @
            </a>

          </div>

        </div>

        {/* HERO VISUAL */}

        <div className="hero-visual">

          <div className="visual-ring">

            <div className="visual-core">
              👩‍💻
            </div>

          </div>

          <div className="floating-card card-one">

            <strong>
              AI / ML
            </strong>

            Building intelligent systems

          </div>

          <div className="floating-card card-two">

            <strong>
              Developer
            </strong>

            Python • React • SQL

          </div>

        </div>

      </section>

      {/* =========================================
          ABOUT
      ========================================= */}

      <section id="about">

        <div className="section-label">
          01 — About
        </div>

        <h2 className="section-title">

          A little{" "}

          <span className="gradient">
            about me.
          </span>

        </h2>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I am a Computer Science graduate
              passionate about software development,
              Artificial Intelligence, Machine Learning
              and modern web technologies.
            </p>

            <p>
              I enjoy transforming ideas into practical
              applications and exploring how technology
              can solve real-world problems.
            </p>

            <p>
              My experience includes AI/ML projects,
              frontend development, data analysis and
              building complete software solutions.
            </p>

            <p>
              I am a quick learner who enjoys working
              with new technologies and continuously
              improving my technical skills.
            </p>

          </div>

          <div className="about-card">

            <div className="info-item">

              <strong>
                🎓 EDUCATION
              </strong>

              <span>
                B.Tech — Computer Science &
                Engineering
              </span>

            </div>

            <div className="info-item">

              <strong>
                🏫 UNIVERSITY
              </strong>

              <span>
                Vijaya Institute of Technology
                for Women
              </span>

            </div>

            <div className="info-item">

              <strong>
                💼 FOCUS
              </strong>

              <span>
                Software Development & AI/ML
              </span>

            </div>

            <div className="info-item">

              <strong>
                📍 BASED IN
              </strong>

              <span>
                Vijayawada, Andhra Pradesh
              </span>

            </div>

          </div>

        </div>

        <div className="stats">

          <div className="stat">

            <div className="stat-number">
              3+
            </div>

            <div className="stat-label">
              Internships
            </div>

          </div>

          <div className="stat">

            <div className="stat-number">
              3+
            </div>

            <div className="stat-label">
              Projects
            </div>

          </div>

          <div className="stat">

            <div className="stat-number">
              14+
            </div>

            <div className="stat-label">
              Technologies
            </div>

          </div>

          <div className="stat">

            <div className="stat-number">
              8.5+
            </div>

            <div className="stat-label">
              CGPA
            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          SKILLS
      ========================================= */}

      <section id="skills">

        <div className="section-label">
          02 — Skills
        </div>

        <h2 className="section-title">

          My{" "}

          <span className="gradient">
            toolbox.
          </span>

        </h2>

        <div className="skills-grid">

          {skills.map(
            ([icon, name, type]) => (

              <div
                className="skill"
                key={name}
              >

                <div className="skill-icon">
                  {icon}
                </div>

                <div className="skill-name">
                  {name}
                </div>

                <div className="skill-type">
                  {type}
                </div>

              </div>

            )
          )}

        </div>

      </section>

      {/* =========================================
          PROJECTS
      ========================================= */}

      <section id="projects">

        <div className="section-label">
          03 — Projects
        </div>

        <h2 className="section-title">

          Things I've{" "}

          <span className="gradient">
            built.
          </span>

        </h2>

        <div className="projects">

          {projects.map(
            (project) => (

              <article
                className="project"
                key={project.title}
              >

                <div className="project-header">

                  <div className="project-icon">
                    {project.icon}
                  </div>

                  <div className="project-number">
                    {project.number}
                  </div>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tags">

                  {project.tags.map(
                    (tag) => (

                      <span
                        className="tag"
                        key={tag}
                      >
                        {tag}
                      </span>

                    )
                  )}

                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >

                  View on GitHub

                  <span>
                    ↗
                  </span>

                </a>

              </article>

            )
          )}

        </div>

      </section>

      {/* =========================================
          EXPERIENCE
      ========================================= */}

      <section id="experience">

        <div className="section-label">
          04 — Experience
        </div>

        <h2 className="section-title">

          Where I've{" "}

          <span className="gradient">
            worked.
          </span>

        </h2>

        <div className="timeline">

          {experience.map(
            (item) => (

              <div
                className="experience"
                key={item.company}
              >

                <div className="experience-dot"></div>

                <div className="experience-year">
                  {item.year}
                </div>

                <h3>

                  {item.icon}{" "}

                  {item.role}

                </h3>

                <div className="company">
                  {item.company}
                </div>

                <p>
                  {item.description}
                </p>

              </div>

            )
          )}

        </div>

      </section>

      {/* =========================================
          CONTACT
      ========================================= */}

      <section id="contact">

        <div className="contact">

          <div className="section-label">
            05 — Contact
          </div>

          <h2>

            Let's create something{" "}

            <span className="gradient">
              great.
            </span>

          </h2>

          <p>

            I'm open to software development
            opportunities, collaborations and
            interesting technology projects.
            Let's connect and build something
            meaningful.

          </p>

          <a
            className="btn primary"
            href="mailto:jyoshikajyoshika3@gmail.com"
          >
            ✉ Let's Talk
          </a>

        </div>

      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer>

        Designed & built by{" "}

        <span>
          Jyoshika Irlapati
        </span>

        {" "}• © {new Date().getFullYear()}

      </footer>

      {/* =========================================
          TOP BUTTON
      ========================================= */}

      {showTop && (

        <button
          className="top"
          onClick={() =>
            scrollTo("home")
          }
          aria-label="Scroll to top"
        >
          ↑
        </button>

      )}

    </div>
  );
}

export default App;