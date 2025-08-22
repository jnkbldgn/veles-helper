import { Input, Space, Button} from "antd";

export const Login = () => {
    const {Compact} = Space;

    return (
        <Space direction="vertical">
            <Compact>
                <Input placeholder="Auth cookie" />
            </Compact>
            <Compact>
                <Input placeholder="CSRF token" />
            </Compact>
            <Compact>
                <Button>Login</Button>
            </Compact>
        </Space>
    )
}