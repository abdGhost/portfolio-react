function Services() {
  return (
    <section className="services text-bg-dark py-5">
      <div className="container text-center">
        <h4 className="text-uppercase fw-bold text-primary">Services</h4>
        <hr className="w-25 mx-auto" />
        <h2 className="mb-4">What Can I Do For You?</h2>
        <div className="row">
          <div className="col-md-4">
            <i className="fas fa-globe fa-3x text-primary mb-3"></i>
            <h5>Web Design</h5>
            <p>Modern and responsive web design tailored to your brand.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-code fa-3x text-primary mb-3"></i>
            <h5>Web Development</h5>
            <p>Full-stack solutions from frontend to backend.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-mobile fa-3x text-primary mb-3"></i>
            <h5>Mobile Apps</h5>
            <p>Cross-platform mobile applications with Flutter.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
