import React, { FC } from 'react'
import { Layout, Row, Menu } from 'antd'
import { useNavigate } from 'react-router'
import { RouteNames } from '../route'
import { useTypedSelector } from '../hooks/useTupedSelector'
import { useActions } from '../hooks/useActions'

const Navbar: FC = () => {
    const router = useNavigate()
    const { isAuth, user } = useTypedSelector(state => state.auth)
    const {logout} = useActions()
    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                    ?
                    <>
                        <div style={{ color: 'white' }}>
                            {user.username}
                        </div>
                        <Menu
                            theme='dark'
                            mode='horizontal'
                            selectable={false}>
                            <Menu.Item
                                onClick={logout}
                                key={1}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        selectable={false}>
                        <Menu.Item
                            onClick={() => router(RouteNames.LOGIN)}
                            key={1}
                        >
                            Зарегистрироваться
                        </Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    )
}

export default Navbar
