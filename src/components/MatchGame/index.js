import {Component} from 'react'
import Navbar from '../Navbar'
import Navtabs from '../Navtabs'
import Thumbnail from '../Thumbnail'
import Gameover from '../Gameover'
import RandomMatchImage from '../RandomMatchImage'
import './index.css'

export default class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTabId: props.tabsList[0].tabId,
      randomMatchImageIndex: 0,
      score: 0,
      seconds: 60,
      gameOver: false,
    }
    this.timerId = null
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(prevState => {
        const {seconds} = prevState
        if (seconds === 0) {
          clearInterval(this.timerId)
          return {gameOver: true}
        }
        return {seconds: seconds - 1}
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  matchImage = id => {
    const {randomMatchImageIndex} = this.state
    const {imagesList} = this.props
    if (id === imagesList[randomMatchImageIndex].id) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        randomMatchImageIndex: Math.floor(Math.random() * imagesList.length),
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({gameOver: true})
    }
  }

  playAgain = () => {
    const {imagesList} = this.props
    this.setState({
      score: 0,
      seconds: 60,
      gameOver: false,
      randomMatchImageIndex: Math.floor(Math.random() * imagesList.length),
    })
    this.timerId = setInterval(() => {
      this.setState(prevState => {
        const {seconds} = prevState
        if (seconds === 0) {
          clearInterval(this.timerId)
          return {gameOver: true}
        }
        return {seconds: seconds - 1}
      })
    }, 1000)
  }

  setActiveTab = id => this.setState({activeTabId: id})

  render() {
    const {tabsList, imagesList} = this.props
    const {
      score,
      seconds,
      activeTabId,
      randomMatchImageIndex,
      gameOver,
    } = this.state
    const filteredImagesList = imagesList.filter(
      image => image.category === activeTabId,
    )

    return (
      <div className="main-container">
        <Navbar seconds={seconds} score={score} />
        <div className="wrapper">
          {!gameOver ? (
            <div className="match-container">
              <RandomMatchImage
                randomMatchImageIndex={randomMatchImageIndex}
                imagesList={imagesList}
              />
              <Navtabs
                tabsList={tabsList}
                activeTabId={activeTabId}
                setActiveTab={this.setActiveTab}
              />
              <Thumbnail
                matchImage={this.matchImage}
                filteredImagesList={filteredImagesList}
              />
            </div>
          ) : (
            <Gameover playAgain={this.playAgain} score={score} />
          )}
        </div>
      </div>
    )
  }
}
