import React, {Component} from 'react';

export default class Pop extends Component {
    static propTypes = {
        place: React.PropTypes.oneOf([
            'top',
            'bottom',
            'left',
            'right'
        ]),
        triggler: React.PropTypes.oneOf([
            'click',
            'hover'
        ]),
        visible: React.PropTypes.bool,
        prefixName: React.PropTypes.string
    }

    static defaultProps = {
        place: 'top',
        trigger: 'hover',
        visible: false,
        prefixName: 'salt'
    }

    constructor(props) {
        super(props);
        ['handleClick', 'handleMouseOver', 'handleMouseLeave'].forEach((item) => this[item] = this[item].bind(this));
    }

	state = {
		visible: this.props.visible
	}

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible
        });
    }

    renderTitle() {
        return this.props.title && (
                <h3 className="popover-title">
                    {this.props.title}
                </h3>
            );
    }

    handleClick() {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleMouseOver() {
        if (this.props.trigger === 'hover') {
            this.setState({
                visible: true
            });
        }
    }
    handleMouseLeave() {
        if (this.props.trigger === 'hover') {
            this.setState({
                visible: false
            });
        }
    }

    render() {
        let { place, prefixName } = this.props;
        let className = `popover fade ${ place } in`;
        let divStyle = {
                display: this.state.visible ? 'block' : 'none'
            };

        return (
            <div
                className={`${prefixName}-popover-container`}
                onMouseOver={this.handleMouseOver}
                onMouseLeave={this.handleMouseLeave}
            >
                {this.renderContent()}
                <div className={className} style={divStyle}>
                    <div className="arrow"></div>
                    {this.renderTitle()}
                    <div className="popover-content">
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }

    renderContent() {
        return React.Children.map(this.props.children, child => {
            if (child) {
                if (this.props.trigger === 'click') {
                    return React.cloneElement(child, {
						onClick: this.handleClick
                    });
                } else {
                    return child;
                }
            }
        });
    }
}
