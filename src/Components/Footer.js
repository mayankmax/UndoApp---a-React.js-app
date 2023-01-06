import '../manualStyle/Footer.css';

function Footer() {
  return (
    <footer>
        <div className="footer-top">
            <div className="container">
                <div className="footer-day-time">
                    <div className="row">
                        <div className="col-md-8">
                            <ul>
                                <li>Open To work</li>
                                <li>Notice Period : 60days</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className="phone-no">
                                <a href="tel:+91 8789601355"><i className="fa fa-mobile" aria-hidden="true"></i>Call +91 8789610355</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        
                        <h4>About Me</h4>
                        <p>Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der Standard der Branche Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der Standard der Branche  </p>

                    </div>

                    <div className="col-md-4">
                        <h4>Information</h4>
                        <ul className="address1">
                            <li><i className="fa fa-map-marker"></i>Lorem Ipsum 132 xyz Lorem Ipsum</li>
                            <li><i className="fa fa-envelope"></i><a href="mailto:#">kashyapmayank11785@gmail.com</a></li>
                            <li><i className="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90">+91 87 89 61 03 55</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h4>Follow us</h4>
                        <ul className="social-icon">
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <p className="copyright text-uppercase">Copyright © 2023
                        </p>
                    </div>
                    <div className="col-sm-7">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;