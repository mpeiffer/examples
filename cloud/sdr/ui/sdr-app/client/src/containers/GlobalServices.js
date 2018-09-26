import React, {Component} from 'react'

import {GlobalSentiments} from '../Sentiment'

import './GlobalServices.css'

class GlobalServices extends Component {
  render() {
    return (
      <div>
      <div className="bx--row">
        <div className="bx--col-xs-12">
          <h1 className="page-title">Global Keyword Sentiments</h1>
        </div>
      </div>
      <br />
      <div className="bx--row">
        <div className="bx--col-xs-12">
          <GlobalSentiments />
        </div>
      </div>
      </div>
    )
  }
}

export default GlobalServices