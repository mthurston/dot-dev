import React from "react";
import github from "../images/github-64.png";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";

export class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleLinkClick = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 600;

    const scrollDuration = 500;

    return (
      <header>
        <nav className={isMobile ? "" : "desktop"}>
          <Link to="home" id="header-logo" smooth duration={scrollDuration}>
            <h1>MT</h1>
          </Link>
          <HamburgerMenu
            id="hamburger"
            isOpen={this.state.isOpen}
            menuClicked={this.handleClick.bind(this)}
            color="#ffffff"
          />
          <ul className={this.state.isOpen ? "active" : ""}>
            <li>
              <Link
                onClick={this.handleLinkClick}
                activeClass="active"
                to="home"
                spy
                smooth
                duration={scrollDuration}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleLinkClick}
                activeClass="active"
                to="about"
                spy
                smooth
                duration={scrollDuration}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleLinkClick}
                activeClass="active"
                to="projects"
                spy
                smooth
                duration={scrollDuration}
              >
                Projects
              </Link>
            </li>
            <li id="break"></li>
            <li>
              <a className="social" href="https://github.com/mthurston">
                <img alt="" src={github}></img>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
