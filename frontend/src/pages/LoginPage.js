import React, {useState, useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../reduxActions/userActions'
import {FormContainer} from '../components/FormContainer'

function LoginPage() {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const dispatch=useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault()
       dispatch(
           login(email,password)
       )
    }
    
    let location=useLocation()
    let navigate=useNavigate()
    const redirect= location.search ? location.search.split("=")[1] : "/"
    const userLogin= useSelector(state=>state.userLogin)
    const {error, loading, userInfo}=userLogin
    useEffect(()=>{
        if(userInfo){
            navigate('/'+redirect.split('/')[0])
        }
    
    },[userInfo, redirect])
  return (
    <FormContainer>
        <h1>login</h1>
        {error && <h3>{error}</h3>}

        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>E-mail address</Form.Label>
                <Form.Control type='email' placeholder='enter email ...' value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='enter password ...' value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>Login</Button>
        </Form>
        <Row className="py-3">
            <Col>
              New here? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> Register </Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginPage