import React, { Component } from 'react'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './style.css'
import LiItem from './item';
import Boss from './Boss'
import { format } from 'url';


const Fragment = React.Fragment



/**
 *  React的主要生命周期
    1.Initialization:初始化阶段。
    2.Mounting: 挂在阶段。它里边有三个小的生命周期函数:
        1>.componentWillMount : 在组件即将被挂载到页面的时刻执行。
        2>.render : 页面state或props发生变化时执行。
        3>.componentDidMount : 组件挂载完成时被执行
    3.Updation: 更新阶段。
    4.Unmounting: 销毁阶段


    注意：
    componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，而render函数是只要有state和props变化就会执行，这个初学者一定要注意。
 */

class App extends Component {

    // 构造函数创建state变量
    constructor(props) {
        super(props)
        this.state = {
            inputValue: "inputValueHint",
            list: [
                "基础按摩",
                '精油推背',
            ]
        }
    }

    // componentDidMount(){
    //     // 使用axios进行http请求
    //     axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    //         .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
    //         .catch((error)=>{console.log('axios 获取数据失败'+error)})
    // }

    render() {
        return (

            < Fragment >
                <div >
                    <label htmlFor='inputId'>加入服务</label>
                    < input id='inputId' className='input' value={this.state.inputValue} onChange={this.inputChange.bind(this)} ></input>
                    < button onClick={this.addItem.bind(this)} >增加服务 </button> </div >

                < ul >
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {

                                // 通过父组件像子组件传值,这里的content是自己定义的，可以随便起名
                                return (

                                    <CSSTransition
                                        timeout={2000}
                                        classNames='box-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index + item}
                                    >
                                        <LiItem
                                            content={item}
                                            index={index}
                                            itemClick={this.deleteItem.bind(this)}
                                        />
                                    </CSSTransition>
                                )
                                // 需要为每一项li标签添加唯一的key，不然会报警告
                                // <li key={index + item}
                                //     onClick={this.deleteItem.bind(this, index)}
                                // >
                                //     {item}
                                // </li>
                            })
                        }

                    </TransitionGroup>
                </ul>

                <Boss></Boss>
            </Fragment >
        )
    }

    // 输入时改变内同
    inputChange(e) {
        // 类似flutter中的setState赋值
        this.setState({
            inputValue: e.target.value
        }, () => {
            // setState函数是个异步函数，系统提供一个完成的回调函数
        })
    }

    // 点击按钮增加新条目
    addItem() {
        this.setState({
            // es6语法，扩展list，将list中的值复制并添加新的value
            list: [...this.state.list, this.state.inputValue],
            // 数据源添加后，将输入框清空
            inputValue: ""
        })
    }

    // 删除已有列表数据
    deleteItem(index) {
        // 不建议直接操作state，所以这里获取state中的原数据
        let list = this.state.list
        // 从目标位置删除数据
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

}

export default App