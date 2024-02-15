import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import { Details } from '../Details'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/details/:id' element={<Details />} />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }