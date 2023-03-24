import './index.css'

const WinOrLossCard = props => {
  const {score, isPlaying, playAgain} = props
  const imageUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const text = isPlaying ? 'You Won' : 'You Lose'
  const scoreText = isPlaying ? 'Best Score' : 'Score'

  const playGame = () => {
    playAgain()
  }

  return (
    <div>
      <div>
        <h1 className="text-heading">{text}</h1>
        <div>
          <p>{scoreText}</p>
          <p>{score}/12</p>
        </div>
        <div>
          <button onClick={playGame} type="button">
            Play Again
          </button>
        </div>
      </div>
      <img src={imageUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLossCard
