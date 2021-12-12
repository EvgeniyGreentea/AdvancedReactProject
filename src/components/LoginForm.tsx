import React, { FC } from 'react'
import { Button, Form, Input } from 'antd'
import { rules } from '../utils/rules'
import { useDispatch } from 'react-redux'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'
const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const submit = () => {
        dispatch (AuthActionCreators.login('user','123'))
    }

    return (
        <Form
            onFinish={submit}
        >
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйста введите имя пользователя')]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Пороль"
                name="password"
                rules={[rules.required('Пожалуйста введите пороль')]}
            >
                <Input />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
