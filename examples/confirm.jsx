import React, { Component } from 'react';
import PopConfirm from '../src/popconfirm.js';
import Button from 'rs-button';

export default class Example extends Component{
    constructor(props) {
        super(props);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleConfirm(data) {
        console.log('点击了确定');
        console.log(data);
    }

    handleCancel(data) {
        console.log('点击了取消');
    }

    render() {
        return (
            <div>
                <PopConfirm
                    place="right"
                    content="这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个"
                    title="hello"
                    trigger="click"
                    confirm={this.handleConfirm.bind(null, 1)}
                    cancel={this.handleCancel}
                >
                    <Button>click right</Button>
                </PopConfirm>
            </div>
        )
    }
}
