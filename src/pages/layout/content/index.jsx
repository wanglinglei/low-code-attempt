import React from "react";
import { Layout } from "antd";
import css from './index.module.less'

const { Content } = Layout

const Component = (props) => {
    return (<Content className={`${css.content}`}>
        {props.children}
    </Content>)
}
export default Component