import { React, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function SignUpForm() {

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [signUp] = useMutation(ADD_USER);

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });


    };

    const handleFormSubmit = async event => {

        console.log("Sucess")
        try {
            const { data } = await signUp({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            username: '',
            email: '',
            password: ''
        });
    };


    return (

        <Form
            name="basic"
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 6 }}
            initialValues={{ remember: true }}
            onFinish={handleFormSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}

            >
                <Input name="username" onChange={handleChange} />
            </Form.Item>

            <Form.Item
                label="email"
                name="email"
                rules={[{ required: true, message: 'Please input a valid email!' }]}

            >
                <Input name="email" onChange={handleChange} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}

            >
                <Input.Password name="password" onChange={handleChange} />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" >
                    Submit
                </Button>
            </Form.Item>
        </Form>


    );

}

export default SignUpForm;