import './index.css'

const EmojiCard = props => {
  const {emojiDetails, updateScore} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const clickEmoji = () => {
    updateScore(id)
  }
  return (
    <li className="emoji-list">
      <button onClick={clickEmoji} type="button" className="emoji-button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
