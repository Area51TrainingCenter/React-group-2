import React from 'react'
import { isEmpty } from 'lodash'

const LoaderHOC = type => WrapperComponent => {
  return class extends React.Component {
    render() {
      return isEmpty(this.props[type]) ? 
      <div className="loader">
        <div className="shadow"></div>
        <div className="box"></div>
      </div> : 
      <WrapperComponent {...this.props} />
    }
  }
}

export default LoaderHOC