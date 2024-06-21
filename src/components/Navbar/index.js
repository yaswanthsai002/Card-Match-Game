import './index.css'

const Navbar = props => {
  const {score, seconds} = props
  return (
    <ul className="navbar">
      <li className="logo-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </li>
      <li className="score-and-timer-container">
        <p className="score-text">
          Score: <span className="score">{score}</span>
        </p>
        <div className="timer-container">
          <img
            className="timer-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="seconds">{seconds} sec</p>
        </div>
      </li>
    </ul>
  )
}

export default Navbar
