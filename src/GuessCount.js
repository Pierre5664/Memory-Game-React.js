import PropTypes from 'prop-types'
import React from 'react'

import './GuessCount.css'

const GuessCount = ({ guesses }) => <div className="guesses">Nombre de tours: {guesses}</div>

GuessCount.propTypes = {
    guesses: PropTypes.number.isRequired,
}

export default GuessCount
