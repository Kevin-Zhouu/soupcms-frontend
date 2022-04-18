import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar } from '@douyinfe/semi-ui';
function Home() {
    let navigate = useNavigate();
    return (
        <>
        <div>Home</div>
        <Button  onClick={()=>{
            navigate("/about")}
            }>Go to about</Button>
        </>
    )
}

export default Home