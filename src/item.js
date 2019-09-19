import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LiItem extends Component {
    constructor(props) {
        super(props)
        // 在构造方法中绑定方法
        this.handleClick = this.handleClick.bind(this)
    }

    // 使用生命周期进行监听数据是否需要更新组件，减少更新次数，提升性能
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }

    render() {
        return (
            // 通过属性接受父组件传递过来的值
            <li onClick={this.handleClick}>{this.props.content}</li>
        );
    }


    // 点击触发的方法
    handleClick() {
        // 触发传递过来的方法，删除原数据
        // react是单项数据流，传递过来的数据是只读的，并不能改变，所以需要使用方法在原组件层进行数据改变
        this.props.itemClick(this.props.index)
    }
}

// 使用propTypes限定组件传递值时的类型，可以更加标准易维护
LiItem.propTypes = {
    // 限制类型为string并且时isRequired必须的
    content: PropTypes.string.isRequired,
    index: PropTypes.number,
    itemClick: PropTypes.func
}

// 设置默认值
LiItem.defaultProps = {
    content: "默认值"
}

export default LiItem;