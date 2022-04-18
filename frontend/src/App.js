import React from 'react';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar } from '@douyinfe/semi-ui';
import { IconUser, IconStar, IconUserGroup, IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';
import { BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom"

import Home from "./Pages/Home";
import About from "./Pages/About";
import Sponsorship from "./Pages/Sponsorship";
import Profile from "./Pages/Profile";
import Error from "./Pages/Error";
import Sidebar from './Components/Sidebar';
import Headbar from './Components/Headbar';
function App(){
    const { Footer, Sider, Content } = Layout;
//onChangeNavigation={this.changeNavigation}
    return (
      <Layout style={{minHeight:"100vh"}}>


      <Sidebar />
      <Layout>
          <Headbar />
          <Content
              style={{
                  padding: '24px',
                  backgroundColor: 'var( --semi-color-tertiary-light-default)',
              }}
          >
              <Breadcrumb
                  style={{
                      marginBottom: '24px',
                  }}
                  routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
              />
              <div
                  style={{
                      borderRadius: '10px',
                      border: '1px solid var(--semi-color-border)',
                      height: '376px',
                      padding: '32px',
                      backgroundColor: 'var(--semi-color-bg-0)'
                  }}
              >
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>} />
                    <Route path="/about" element={<Sponsorship/>}/>
                    <Route path="/profile/:username" element={<Profile/>}/>
                    <Route path="*" element={<Error/>}/>
                    </Routes>
                    
              </div>
          </Content>
          <Footer
              style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '20px',
                  color: 'var(--semi-color-text-2)',
                  backgroundColor: 'rgba(var(--semi-grey-0), 1)',
              }}
          >
              <span
                  style={{
                      display: 'flex',
                      alignItems: 'center',
                  }}
              >
                  <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
                  <span>Made By Kevin Zhou </span>
              </span>
          </Footer>
      </Layout>

  </Layout>
    );
}
export default App;