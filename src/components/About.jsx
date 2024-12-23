function About() {
  return (
    <section id="about" className="about py-5 bg-light">
      <div className="container">
        <div className="text-center">
          <h4 className="text-uppercase fw-bold text-primary">About Me</h4>
          <hr className="w-25 mx-auto" />
          <h4 className="mb-4">Let me introduce myself</h4>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src="/assets/brad.jpg"
              alt="My Image"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8">
            <p className="lead">
              I am a full stack web developer with over 16 years of experience
              in web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
