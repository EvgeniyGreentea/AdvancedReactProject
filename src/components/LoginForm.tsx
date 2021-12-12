import React, { FC, useState } from 'react'
import { Button, Form, Input } from 'antd'
import { rules } from '../utils/rules'
import { useTypedSelector } from '../hooks/useTupedSelector'
import { useActions } from '../hooks/useActions'

const LoginForm: FC = () => {
    const { error, isLoading } = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()
    const submit = () => {
        login(username, password)
    }

    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{ color: 'red' }}>
                {error}
            </div>}
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйста введите имя пользователя')]}
            >
                <Input
                    value={username}
                    onChange={e => setUsername(String(e.target.value))}
                />
            </Form.Item>
            <Form.Item
                label="Пороль"
                name="password"
                rules={[rules.required('Пожалуйста введите пороль')]}
            >
                <Input
                    value={password}
                    type={'password'}
                    onChange={e => setPassword(String(e.target.value))}
                />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
