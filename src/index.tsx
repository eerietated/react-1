import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
    return <h1>Hello React</h1>
}
const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo libero ratione eveniet tempore corporis, blanditiis
                perspiciatis quidem. Neque accusamus at, fugit, eos voluptates
                modi harum quam asperiores repellendus in vitae!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo libero ratione eveniet tempore corporis, blanditiis
                perspiciatis quidem. Neque accusamus at, fugit, eos voluptates
                modi harum quam asperiores repellendus in vitae!
            </p>
        </>
    )
}
const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Content />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
