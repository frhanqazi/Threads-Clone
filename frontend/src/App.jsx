import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'
import Header from './components/Header'

function App() {
  return (
    <Container maxW="620px">
      <Header></Header>
      <Routes>
        <Route path="/:username" element={<UserPage></UserPage>}></Route>
        <Route
          path="/:username/post/:pid"
          element={<PostPage></PostPage>}
        ></Route>
      </Routes>
    </Container>
  )
}

export default App
