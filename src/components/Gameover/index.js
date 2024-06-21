import './index.css'

const Gameover = props => {
  const {score, playAgain} = props

  return (
    <div className="bg-container">
      <div className="game-over-container">
        <img
          className="trophy-img"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p className="score-title">YOUR SCORE</p>
        <h1 className="game-over-score">{score}</h1>
        <div className="btn-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            className="reset-logo"
            alt="reset"
          />
          <button type="button" className="play-again-btn" onClick={playAgain}>
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gameover
