import { Layout, App} from "antd";
import homeStyles from './home.module.css';
import {Login} from '@/component/login'

const Home = () => {
    const {Sider, Content} = Layout;

    return (
        <App>
            <Layout hasSider className={homeStyles.layout}>
                <Sider className={homeStyles.sider}>
                    <Login/>
                </Sider>
                <Content className={homeStyles.content}></Content>
            </Layout>
        </App>
    )
}

export default Home;