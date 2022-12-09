import { Container } from 'react-bootstrap'
import { HashRouter as Router,Routes ,Route } from 'react-router-dom'

import CommentListScreen from './screens/CommentListScreen'
import LoginScreen from './screens/LoginScreen'



function App() {
  return (
    <Container>
    <Routes>
        <Route path='/' element={<CommentListScreen/>}/> 
        <Route path='/login' element={<LoginScreen />} />
    </Routes>
  </Container>
  );
}

export default App;