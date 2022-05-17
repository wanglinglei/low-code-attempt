import React,{memo} from "react";
import { Layout } from 'antd'
import Header from "./header"
import Sider from "./sider"
import Content from "./content"
import css from "./index.module.less"
const Main = (props) => { 
    return (
        <Layout className={css.layout}>
            <Header />
            <Layout className={css.content}>
                <Sider></Sider>
                <Content>{props.children}</Content>
            </Layout>
        </Layout>
    )
}
export default  memo(Main)
