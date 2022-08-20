import './App.css'
import { Navbar } from './components'
import {  AppRouter  } from './route/AppRouter'

function App() {
    return (
        <>
            <Navbar />
            <hr />
            <div className="page-content">
                <AppRouter />
            </div>
        </>
    )
}

export default App
