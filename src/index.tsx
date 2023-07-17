import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'

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
            <Header title="React" year={2024} />
            <Content />
            <Header title="TS" year={2020} />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
