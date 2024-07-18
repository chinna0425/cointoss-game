import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  changethestatus = () => {
    const vals = Math.floor(Math.random() * 2)
    if (vals === 0) {
      this.setState(prevstate => ({
        total: prevstate.total + 1,
        heads: prevstate.heads + 1,
        tails: prevstate.tails,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevstate => ({
        total: prevstate.total + 1,
        heads: prevstate.heads,
        tails: prevstate.tails + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, heads, tails, imgUrl} = this.state
    return (
      <div className="background-container">
        <div className="inner-container">
          <h1 className="heading1">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={imgUrl} className="image-style" alt="toss result" />
          <br />
          <button
            className="button"
            type="button"
            onClick={this.changethestatus}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="paragraph1">Total: {total}</p>
            <p className="paragraph1">Heads: {heads}</p>
            <p className="paragraph1">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
