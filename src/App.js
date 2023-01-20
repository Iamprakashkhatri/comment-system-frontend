import { Container } from 'react-bootstrap'
import { HashRouter as Router,Routes ,Route } from 'react-router-dom'

import CommentListScreen from './screens/CommentListScreen'
import LoginScreen from './screens/LoginScreen'
import ReplyListScreen from './screens/ReplyListScreen'



function App() {
  return (
    <Container>
    <Routes>
        <Route path='/' element={<CommentListScreen/>}/> 
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/reply' element={<ReplyListScreen />} />
    </Routes>
  </Container>
  );
}

export default App;