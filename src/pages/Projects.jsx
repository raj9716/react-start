
import drdoImage from '../assets/drdo.png';
import faberImage from '../assets/faber.png';
import asianImage from '../assets/asian.png';
import carrierImage from '../assets/carrier.png';
import akumsImage from '../assets/akums.png';
import stormImage from '../assets/storm.png';



function Projects() {
  return (



    <section className="projects">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Projects</h2>
          <p className="text-muted">Some of the work I’ve recently done</p>
        </div>

        <div className="row g-4">
          {/* Project Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={drdoImage} alt="DRDO" className='img-fluid' />
              <div className="card-body text-center">
                <h5 className="card-title">DRDO</h5>
                <div className="d-flex justify-content-center gap-2">
                  <a href="https://millclient.com/projects/sesam/" target="_blank" className="btn btn-primary btn-sm">More Details <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={faberImage} alt="FABER INDIA" className='img-fluid' />
              <div className="card-body text-center">
                <h5 className="card-title">FABER INDIA</h5>
                <div className="d-flex justify-content-center gap-2">
                  <a href="https://faberindia.com/" target="_blank" className="btn btn-primary btn-sm">More Details <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={asianImage} alt="ASIANPAINTS" className='img-fluid' />
              <div className="card-body text-center">
                <h5 className="card-title">ASIANPAINTS</h5>
                <div className="d-flex justify-content-center gap-2">
                  <a href="https://www.asianpaints.com/" target="_blank" className="btn btn-primary btn-sm">More Details <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={carrierImage} alt="CARRIER MIDIA" className='img-fluid' />
              <div className="card-body text-center">
                <h5 className="card-title">CARRIER MIDIA</h5>
                <div className="d-flex justify-content-center gap-2">
                  <a href="https://carriermideaindia.com/" target="_blank" className="btn btn-primary btn-sm">More Details <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 5 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={akumsImage} alt="AKUMS PHARMA" className='img-fluid' />
              <div className="card-body text-center">
                <h5 className="card-title">AKUMS PHARMA</h5>
                <div className="d-flex justify-content-center gap-2">
                  <a href="https://www.akums.in/" target="_blank" className="btn btn-primary btn-sm">More Details <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>

           {/* Project Card 6 */}
           <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={stormImage} alt="STORM" className='img-fluid' />
              <div className="card-body text-center">
                <h5 className="card-title">STORM</h5>
                <div className="d-flex justify-content-center gap-2">
                  <a href="https://thestorm.in/" target="_blank" className="btn btn-primary btn-sm">More Details <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;

