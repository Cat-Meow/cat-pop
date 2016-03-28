import React from 'react';
import Pop from './pop.js';

export default class PopConfirm extends React.Component {

    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    state = {
        visible: this.props.visible
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible
        });
    }

    handleCancel() {
        this.props.cancel && this.props.cancel();
        this.setState({
            visible: false
        });
    }

    handleConfirm() {
        this.props.confirm && this.props.confirm();
        this.setState({
            visible: false
        });
    }

    renderContent() {
        return (
            <div className="popconfirm-content">
                {this.props.content}
                <div className="popconfirm-content-btns">
                    <button className="btn btn-default btn-xs" onClick={this.handleCancel}>取消</button>
                    <button className="btn btn-primary btn-xs" onClick={this.handleConfirm}>确定</button>
                </div>
            </div>
        );
    }
    render() {
        return (
            <Pop
                {...this.props}
                visible={this.state.visible}
                content={this.renderContent()}
            >
                {this.props.children}
            </Pop>
        )
    }
}
