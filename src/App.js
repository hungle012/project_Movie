import logo from './logo.svg';
import './App.css';
import './assets/style/main.scss'

function App() {

  return (
    <div className="App">
      <header className="header" id="myHeader">
        <div className="header__nav " id="nav-test">
          <nav className="navbar navbar-expand-md ">
            <a className="header__logo" href="/">
              <img src="./img/logo.png" alt="anh_LOGO" className="mb-0" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mt-0 mx-auto">
                <li className="nav-item  ">
                  <a className="nav-link text-left px-4 text-md-center" href="/">Lịch chiếu</a>
                </li>
                <li className="nav-item  ">
                  <a className="nav-link text-left px-4 text-md-center" href="/">Cụm rạp </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-left px-4 text-md-center" href="/">Tin tức </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-left px-4 text-md-center" href="/">Đăng nhập</a>
                </li>
              </ul>
            </div>
            <div className="header__detail">
              <div className="user">
                <a href="/">
                  <i className="fas fa-user" />
                </a>
              </div>
              <div className="user-name">
                <p>Người dùng</p>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="carousel">
        <div id="carouselMovie" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselMovie" data-slide-to={0} className="active" />
            <li data-target="#carouselMovie" data-slide-to={1} />
            <li data-target="#carouselMovie" data-slide-to={2} />
            <li data-target="#carouselMovie" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./img/IronMan.jpg" className="d-block w-100" alt="..." />
              <div className="playTrailer">
                <a href="#content-popup" className="open-popup">
                  <i className="fas fa-play" />
                </a>
              </div>
              <div id="content-popup" className="content-popup mfp-hide">
                <iframe className="embed-responsive-item" width={854} height={450} src="https://www.youtube.com/embed/rFVD_AnOIjA?autoplay=0" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
            <div className="carousel-item">
              <img src="./img/Captain.png" className="d-block w-100" alt="..." />
              <div className="playTrailer">
                <a href="#content-popup" className="open-popup">
                  <i className="fas fa-play" />
                </a>
              </div>
              <div id="content-popup" className="content-popup mfp-hide">
                <iframe className="embed-responsive-item" width={854} height={450} src="https://www.youtube.com/embed/rFVD_AnOIjA?autoplay=0" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
            <div className="carousel-item">
              <img src="./img/Thor.png" className="d-block w-100" alt="..." />
              <div className="playTrailer">
                <a href="#content-popup" className="open-popup">
                  <i className="fas fa-play" />
                </a>
              </div>
              <div id="content-popup" className="content-popup mfp-hide">
                <iframe className="embed-responsive-item" width={854} height={450} src="https://www.youtube.com/embed/rFVD_AnOIjA?autoplay=0" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
            <div className="carousel-item">
              <img src="./img/Hulk.png" className="d-block w-100" alt="..." />
              <div className="playTrailer">
                <a href="#content-popup" className="open-popup">
                  <i className="fas fa-play" />
                </a>
              </div>
              <div id="content-popup" className="content-popup mfp-hide">
                <iframe className="embed-responsive-item" width={854} height={450} src="https://www.youtube.com/embed/rFVD_AnOIjA?autoplay=0" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          </div>
          <button className="btn-control carousel-control-prev" type="button" data-target="#carouselMovie" data-slide="prev">
            <i className="fas fa-chevron-left" />
            <span className="sr-only">Previous</span>
          </button>
          <button className="btn-control carousel-control-next" type="button" data-target="#carouselMovie" data-slide="next">
            <i className="fas fa-chevron-right" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </section>


    </div>
  );
}

export default App;
