import './index.css'

const RandomMatchImage = props => {
  const {imagesList, randomMatchImageIndex} = props

  return (
    <div className="random-match-image-container">
      <img
        src={imagesList[randomMatchImageIndex].imageUrl}
        className="random-image"
        alt="match"
      />
    </div>
  )
}

export default RandomMatchImage
