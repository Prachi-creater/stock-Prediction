import React from 'react' 
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function TextField (props){
    return(
       <>
            <Input size="large" placeholder="Username" style={{width:300}} prefix={<UserOutlined />} >{props.textContent}</Input>
    <br />
    <br />
    

        </>
    )
}
export default TextField