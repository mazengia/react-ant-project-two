import {
    AppstoreOutlined,
    DashboardOutlined,
    HomeOutlined, MenuUnfoldOutlined, ProfileOutlined,
    UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.min.css';
import { Menu} from 'antd';
import React, {useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Homepage from "./components/Home"
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const ListOfItems = [
    getItem('Home', 'Home', <HomeOutlined/>),//PieChartOutlined is icon
    getItem('Dashboard', 'Dashboard', <DashboardOutlined/>),
    getItem('Users', 'Users', <UserOutlined/>),
    getItem('Profile', 'Profile', <ProfileOutlined/>),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined/>, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
    getItem('', 'Collapse', <MenuUnfoldOutlined/>),
];
const App = () => {

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                height: '100vh'
            }}>
            <Header/>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                }}>
                <SideMenu/>
                <Content/>
            </div>
            <Footer/>
        </div>
    );
};

function SideMenu() {

    let [collapsed, setCollapsed,width] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        if(!collapsed){
              width = 56;
        }
        else {
              width = 200 ;
        }
    };
    const navigate = useNavigate();
    return (
        <div
            style={{
                width: width,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Menu
                style={{

                    height: '100%'
                }}
                onClick={({key}) => {
                    if (key === "Collapse") {
                        toggleCollapsed(key);
                    } else {
                        navigate(key)
                    }
                }}
                defaultSelectedKeys={['1']}
                theme="dark"
                inlineCollapsed={collapsed}
                items={ListOfItems}
            />
        </div>);
}

function Content() {
    return <div
        style={{
            width: '100%',
        }}
    >
        <Routes>
            <Route path="/" element={<div>empty </div>}></Route>
            <Route path="/Home" element={<Homepage/> }></Route>
            <Route path="/Dashboard" element={<div>Dashboard</div>}></Route>
            <Route path="/Users" element={<div>Users</div>}></Route>
            <Route path="/Profile" element={<div>Profile</div>}></Route>
            <Route path="/9" element={<div>option 9</div>}></Route>
            <Route path="/10" element={<div>option 10</div>}></Route>
        </Routes>
    </div>
}

function Header() {
    return (
        <div
            style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                height: 60,
                backgroundColor: "blue",
                display: "flex",
                fontWeight: "bold",
            }}>
            Header
        </div>
    );
}

function Footer() {
    return (
        <div style={{
            textAlign: "center",
            color: "white",
            height: 30,
            backgroundColor: "black",
            alignItems: "center",
            display: "flex",
            fontWeight: "bold",
            justifyContent: "center"
        }}>mz.tesfa sc</div>
    );
}

export default App;