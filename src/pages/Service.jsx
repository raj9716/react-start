function Service() {
    return (
        <section className="services py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Services</h2>
          <p className="text-muted">What I can do as a Frontend Developer</p>
        </div>

        <div className="row g-4">
          {/* Web Development */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <i className="bi bi-code-slash fs-1 text-primary mb-3"></i>
              <h5 className="fw-bold">Responsive Web Design</h5>
              <p className="text-muted">Building mobile-first, cross-browser websites using HTML, CSS, and JavaScript.</p>
            </div>
          </div>

          {/* Bootstrap */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <i className="bi bi-bootstrap-fill fs-1 text-purple mb-3"></i>
              <h5 className="fw-bold">Bootstrap UI</h5>
              <p className="text-muted">Designing quick, responsive interfaces using Bootstrap 5 grid and components.</p>
            </div>
          </div>

          {/* React */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <i className="bi bi-lightning-fill fs-1 text-warning mb-3"></i>
              <h5 className="fw-bold">React Development</h5>
              <p className="text-muted">Creating scalable web apps using modern React.js with reusable components.</p>
            </div>
          </div>

          {/* Figma */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <i className="bi bi-pencil-fill fs-1 text-danger mb-3"></i>
              <h5 className="fw-bold">Figma to HTML</h5>
              <p className="text-muted">Converting Figma designs into clean, pixel-perfect frontend code.</p>
            </div>
          </div>

          {/* Photoshop */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <i className="bi bi-brush-fill fs-1 text-info mb-3"></i>
              <h5 className="fw-bold">Photoshop Edits</h5>
              <p className="text-muted">Image editing, banners, and web assets optimized for fast loading.</p>
            </div>
          </div>

          {/* WordPress */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <i className="bi bi-wordpress fs-1 text-dark mb-3"></i>
              <h5 className="fw-bold">WordPress Setup</h5>
              <p className="text-muted">Setting up WordPress themes and basic customizations for fast deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      );
    }
  
  export default Service;