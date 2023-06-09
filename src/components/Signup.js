import React, { useRef } from 'react'
import {Card, Button, Form} from 'react-bootstrap'

const Signup = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();


  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>

                {/* Form starts */}
                <Form>
                    {/* Email group */}
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required></Form.Control>
                    </Form.Group>

                    {/* Password group */}
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required></Form.Control>
                    </Form.Group>

                    {/* Confirm password group */}
                    <Form.Group id='password-confirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>

                    {/* Sign up button */}
                    <Button type='submit' className='w-100 text-center mt-2'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an account? Log In
        </div>
    </>
  )
}

export default Signup