import React from 'react'
import Document, {Head, Main, NextScript } from 'next/document'

class Documents extends Document{
    componentDidMount(){
        
    }
    render(){
        return(
            <html>
                <Head>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton-framework/1.1.1/skeleton.css" crossOrigin="anonymous"/>
                    <link href="https://fonts.googleapis.com/css?family=Niramit:500i|Roboto" rel="stylesheet"/>
                    <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}

export default Documents