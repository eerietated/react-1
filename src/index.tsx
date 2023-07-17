import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return (
        <div>
            <h1>Hello React</h1>
            <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo libero ratione eveniet tempore corporis, blanditiis
                perspiciatis quidem. Neque accusamus at, fugit, eos voluptates
                modi harum quam asperiores repellendus in vitae!
            </p>
            <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo libero ratione eveniet tempore corporis, blanditiis
                perspiciatis quidem. Neque accusamus at, fugit, eos voluptates
                modi harum quam asperiores repellendus in vitae!
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
