import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

// Pages
import { HomePage } from './pages/HomePage'
import { JobsPage } from './pages/JobsPage'
import JobPage, { JobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import { NotFoundPage } from './pages/NotFoundPage'

// Layouts
import { MainLayout } from './layouts/MainLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={JobLoader} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />
}

export default App