function Contact() {
  return (
    <section className="contact py-5 bg-dark text-white">
      <div className="container text-center">
        <h4 className="text-uppercase fw-bold text-primary">Contact</h4>
        <hr className="w-25 mx-auto" />
        <p>
          If you have questions or want to collaborate, feel free to reach out!
        </p>
        <form className="mt-4">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Your Email"
          />
          <textarea
            className="form-control mb-3"
            placeholder="Your Message"
          ></textarea>
          <button className="btn btn-primary btn-lg">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
