import React from 'react';
import styled from 'styled-components';
import { LocaleProvider } from 'antd';

import { history } from './router';
import { render } from 'react-dom';
import { PopoContainer } from 'model';
import { fakeMenuList } from 'router/fakeMenuList';
import { Router } from 'react-router-dom';
import TmsRoleMnu from 'tms-common-role-menu';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import routes from 'router/routes';

import 'antd/dist/antd.min.css';
import 'tms-common-role-menu/lib/app.css';


module.hot && module.hot.accept();

const DescriptionComponent = styled.div`
    padding: 10px 0 5px 27px;
    color: #FFF;
    h2 {
        font-size: 1.5em;
        color: #FFF;
        font-weight: bold;
        padding-bottom: 5px;
    }
    p:last-child {
        color: #C9C9C9;
        font-size: 12px;
    }
`;

const HeaderRightChildren = styled.section`
    margin-left: auto;
    margin-right: 10px;
`;

const HeaderBottomChildren = styled.section`
    width: 100%;
    height: 40px;
    background: #FFF;
`;

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <TmsRoleMnu
                    systemDescription={
                        <DescriptionComponent>
                            <h2>CCP-SITE</h2>
                            <p>Randomization and Trial</p>
                            <p>Supply Management</p>
                            <p>version 1</p>
                        </DescriptionComponent>
                    }
                    hideSystemDescription={
                        <DescriptionComponent>
                            <h2>hide</h2>
                        </DescriptionComponent>
                    }
                    headerRightChildren={
                        <HeaderRightChildren>
                            这里放入小铃铛和退出登录等组件
                        </HeaderRightChildren>
                    }
                    headerBottomChildren={
                        <HeaderBottomChildren>
                            这里放入面包屑组件
                        </HeaderBottomChildren>
                    }
                    history={history}
                    componentMap={routes}
                    list={fakeMenuList}
                    mode="split"
                />
            </Router>
        );
    }
}

render(
    <LocaleProvider locale={zh_CN}>
        <PopoContainer>
            <App />
        </PopoContainer>
    </LocaleProvider> ,
    document.getElementById('root')
);
