import './index.css'

const Thumbnail = props => {
  const {filteredImagesList, matchImage} = props

  return (
    <ul className="thumbnails-container">
      {filteredImagesList.map(image => (
        <li className="thumbnail-item" key={image.id}>
          <button
            type="button"
            className="thumbnail-btn"
            onClick={() => matchImage(image.id)}
          >
            <img
              src={image.thumbnailUrl}
              alt="thumbnail"
              className="thumbnail-img"
            />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Thumbnail
