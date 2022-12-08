import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { useNavigate } from 'react-router-dom';



function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    let navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
        else {
            navigate('/login')
        }

    }, [navigate,userInfo])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h3>Sign In</h3>
            <Form onSubmit={submitHandler}>

                <input
                    className="form-control"
                    style={{marginBottom:20}}
                    required aria-required="true"
                    placeholder="Username"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}

                    />

                <input
                    className="form-control"
                    required aria-required="true"
                    placeholder="Password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}

                    />

                <button type='submit' variant='primary' className='mt-3'>
                    Sign In
                </button>
            </Form>

        </FormContainer>
    )
}

export default LoginScreen
