function Header() {
  return (
    <header className="header vh-100 text-center position-relative bg-dark text-white">
      <div className="text-container d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="display-1 fw-bold">I&apos;m Ghost</h1>
        <p className="roles text-uppercase fs-4">
          <span>Full Stack Web Developer | </span>
          <span>Flutter Developer</span>
        </p>
        <a href="#about" className="btn btn-outline-light btn-lg mt-3">
          <i className="fas fa-chevron-down me-2"></i> More About Me
        </a>
        <div className="social d-flex gap-3 mt-4">
          <a href="#">
            <i className="fab fa-twitter fa-2x text-white"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram fa-2x text-white"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin fa-2x text-white"></i>
          </a>
          <a href="#">
            <i className="fab fa-github fa-2x text-white"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
