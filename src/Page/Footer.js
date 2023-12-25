import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>

      <footer class="container bg-white">
        <div class="row">
          <div class="col-md-5 p-1">
            <ul class="navbar list-inline justify-content-md-around mt-md-4">
              <li><a href="Home" className="text-decoration-none text-black">Home</a></li>
              <li><a href="About" className="text-decoration-none text-black">About</a></li>
              <li><a href="Services" className="text-decoration-none text-black">Services</a></li>
              <li><a href="Contact" className="text-decoration-none text-black">Contact</a></li>
            </ul> </div>
          <div class="col-md-1 col-10 p-3">
            <img src="./img/logo-black-1.png" alt="Logo" className="img-fluid col-md-12 col-2 ms-md-3" />
          </div>
          <div className="col-md-3"></div>
          <div class="col-md-3 col-12 p-3">
            <p className="paragraph mt-md-4 fs-6">© 2023 Hope Starter Design</p>
          </div>
        </div>
      </footer>

      <Outlet />
    </>
  )
};

export default Footer;