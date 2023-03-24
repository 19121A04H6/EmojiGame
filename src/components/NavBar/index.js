import './index.css'

const NavBar = props => {
  const {topScore, score, isPlaying} = props
  const imageUrl = 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png'
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img className="logo" src={imageUrl} alt="emoji logo" />
        <h1 className="emoji-text">Emoji Game</h1>
      </div>
      <>
        {isPlaying ? (
          <div className="score-container">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        ) : (
          ''
        )}
      </>
    </nav>
  )
}

export default NavBar
