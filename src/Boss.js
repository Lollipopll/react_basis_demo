import React, { Component } from 'react';
// 动画库
import { CSSTransition } from 'react-transition-group';

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }

        this.toToggole = this.toToggole.bind(this)
    }
    render() {
        return (
            <div>
                {/*
                // 使用css控制
                className={this.state.isShow ? 'show' : 'hide'} */}

                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames='box-text'

                    // 动画结束移除dom元素
                    unmountOnExit
                >
                    <div>Boss级人物-孙悟空</div>

                </CSSTransition>
                <div><button onClick={this.toToggole}>召唤Boss</button></div>

            </div>
        );
    }

    toToggole() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default Boss;