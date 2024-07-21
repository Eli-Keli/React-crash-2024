import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

// Pages
import { HomePage } from './pages/HomePage'
import { JobsPage } from './pages/JobsPage'

// Layouts
import { MainLayout } from './layouts/MainLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />
}

export default App