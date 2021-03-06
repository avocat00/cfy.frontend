import React from 'react'
import './style.sass'
import PropTypes from 'prop-types'

const Loader = ({ children }) => {
	return <div className="loader">{children}</div>
}

Loader.propTypes = {
	children: PropTypes.node,
}

export default Loader
