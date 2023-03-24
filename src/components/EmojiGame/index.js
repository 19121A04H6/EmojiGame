/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, isPlaying: true, prevList: []}

  getWin = () => {
    const {score} = this.state
    if (score === 12) {
      this.setState({isPlaying: true})
    }
  }

  updateScore = id => {
    const {prevList, score} = this.state
    if (!prevList.includes(id)) {
      this.setState(prevState => ({score: score < 12 && prevState.score + 1}))
      prevList.push(id)
      this.getWin()
    } else {
      this.setState({isPlaying: false, prevList: []})
    }
  }

  playAgain = () => {
    const {score, topScore} = this.state
    this.setState({topScore: score > topScore ? score : topScore})
    this.setState({isPlaying: true, score: 0})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const ListOfEmojis = this.shuffledEmojisList()
    const {isPlaying, score, topScore} = this.state
    return (
      <div className="app-container">
        <NavBar isPlaying={isPlaying} score={score} topScore={topScore} />
        {isPlaying ? (
          <ul className="emojis-container">
            {ListOfEmojis.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                updateScore={this.updateScore}
              />
            ))}
          </ul>
        ) : (
          <WinOrLossCard
            playAgain={this.playAgain}
            score={score}
            isPlaying={isPlaying}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
