import App, {Container} from 'next/app'
import React, {Component} from 'react'
import withReduxStore from '../app/lib/with-redux-store'
import { Provider } from 'react-redux'

class AppWrapper extends App{
    componentDidMount(){
        if('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('../app/serviceWorker.js')
                    .then((registration) => {
                        console.log('SW registered => ', registration)
                    })
                    .catch((registrationErr) => {
                        console.log('SW registered failed => ', registrationErr)                        
                    })
            })
        }
    }

    render(){
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps}/>
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(AppWrapper);
