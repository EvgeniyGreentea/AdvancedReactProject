import React, { FC } from 'react'
import { Layout, Row, Menu } from 'antd'
import { useNavigate } from 'react-router'
import { RouteNames } from '../route'
import { useTypedSelector } from '../hooks/useTupedSelector'

const Navbar: FC = () => {
    const router = useNavigate()
    const { isAuth } = useTypedSelector(state => state.auth)
    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                    ?
                    <>
                        <div style={{ color: 'white' }}>
                            EvgeniyGreenTea
                        </div>
                        <Menu
                            theme='dark'
                            mode='horizontal'
                            selectable={false}>
                            <Menu.Item
                                onClick={() => console.log('Exit')}
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
