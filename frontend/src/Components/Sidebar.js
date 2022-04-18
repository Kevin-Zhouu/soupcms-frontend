import react from "react";
import {Layout, Nav} from '@douyinfe/semi-ui';
import {IconUser, IconStar, IconUserGroup, IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
const Sidebar = (props) => {
    const { Sider} = Layout;

    return(
        <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <Nav
           defaultSelectedKeys={['Home']}
           style={{ maxWidth: 220, height: '100%' }}
        >
            <Nav.Header logo={<img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />} text={'Control Panel'} />
            <Nav.Item itemKey={'overview'} text={'Overview'} icon={<IconHistogram />} />
            <Nav.Sub itemKey={'content-manage'} text="Content Management" icon={<IconLive />}>
                <Nav.Item itemKey={'content-home'} text={'Home Page'} />
                <Nav.Item itemKey={'content-about'} text={'About Page'} />
            </Nav.Sub>
            <Nav.Sub itemKey={'team-management'} text="Team Management" icon={<IconUserGroup />}>
                <Nav.Item itemKey={'notice'} text={'Members'} />
                <Nav.Item itemKey={'query'} text={'Permissions'} />
                <Nav.Item itemKey={'info'} text={'Entry Information'} />
            </Nav.Sub>
            <Nav.Item itemKey={'setting'} text={'Settings'} icon={<IconSetting />} />
            <Nav.Footer collapseButton={true} />
        </Nav>
        </Sider>
    )
};
export default Sidebar;

