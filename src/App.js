import { Container } from 'react-bootstrap'
import { HashRouter as Router,Routes ,Route } from 'react-router-dom'

import CommentListScreen from './screens/CommentListScreen'
import LoginScreen from './screens/LoginScreen'



function App() {
  return (
    <Container>
    <Routes>
        <Route path='/login' element={<LoginScreen />} />   
        <Route path='/' element={<CommentListScreen/>} exact="true"/> 
    </Routes>
  </Container>
  );
}

export default App;