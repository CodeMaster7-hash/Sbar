function Header1() {
  return (
      <>

      <header className="header">
    <nav className="nav">
      <div className="nav-logo">
        <a href="#home">Portfolio</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-socials">
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </nav>
  </header>



      </>
  );
}
export default Header1;