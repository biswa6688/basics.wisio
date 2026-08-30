import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { TopicsIndex } from './pages/TopicsIndex'
import { TopicPage } from './pages/TopicPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<TopicsIndex />} />
        <Route path="/topics/:slug" element={<TopicPage />} />
      </Routes>
    </Layout>
  )
}

export default App
