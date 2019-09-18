import React from 'react'
import initializeStore from '../store/index'

// import { initializeStore } from '../store/store'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default App => class AppWithRedux extends React.Component {
  constructor(props) {
    super(props)
    this.store = getOrCreateStore(props.initialReduxState)
  }

  static async getInitialProps(appContext) {
    // Get or Create the store with 'undefined' as initialState
    // This allows you to set custom default initialStateß

    const store = getOrCreateStore()

    // Provide the store to getInitialProps of pages
    appContext.ctx.store = store

    let appProps = {}
    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps.call(App, appContext)
    }

    return {
      ...appProps,
      initialReduxState: store.getState(),
    }
  }

  render() {
    return <App {...this.props} store={this.store} />
  }
}
