import PropTypes from "prop-types"
import React from "react"

import bg from "../images/coneflower-consulting-bg.jpg"
import logo from "../images/coneflower-consulting-logo.svg"

const Header = ({ siteTitle }) => (
  <header className="h-screen flex flex-col items-center justify-center relative">
    <div className="absolute inset-0">
      <img className="w-full h-full object-cover" src={ bg } alt="" />
    </div>
    <div className="z-10">
      <div className="w-full max-w-md mx-auto px-4">
        <h1 className="">
          <img
            src={ logo }
            alt={ siteTitle }
            className="w-full h-auto"
          />
        </h1>
      </div>
      <div className="text-center mt-16">
        <span className="text-xl font-bold">Empowering Creative Non-Profits throughout the Midwest</span>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
