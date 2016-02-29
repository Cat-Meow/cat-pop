import React, {Component} from 'react';

class Pop extends Component {
	state = {
		visible: this.props.visible
	}

    renderTitle() {
        return this.props.title ?
            (
                 <h3 className="popover-title">
                    {this.props.title}
                </h3>
            ) :
            null;
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
        let place = this.props.place,
            className = `popover fade ${ place } in`,
            divStyle = {
                display: this.state.visible ? 'block' : 'none',
                width: '250px'
            };

        switch (this.props.place) {
            case 'top':
                divStyle.top = 'initial';
                divStyle.bottom = '100%';
                divStyle.left = '50%';
                divStyle.marginBottom = '10px';
                divStyle.marginLeft = '-125px';
                break;
            case 'right':
                divStyle.top = '50%';
                divStyle.left = '100%';
                divStyle.marginTop = '-50%';
                break;
            case 'bottom':
                divStyle.top = '100%';
                divStyle.left = '50%';
                divStyle.marginLeft = '-125px';
                break;
            case 'left':
                divStyle.top = '50%';
                divStyle.right = '100%';
                divStyle.left = 'initial';
                divStyle.marginTop = '-50%';
                divStyle.marginRight = '10px';
                break;
        }

        const containerStyle = {
                position: 'relative',
                display: 'inline-block'
            };
        return (
            <div
                style={containerStyle}
                onMouseOver={this::this.handleMouseOver}
                onMouseLeave={this::this.handleMouseLeave}
            >
                {this.renderContent()}
                <div className={className} style={divStyle}>
                    <div className="arrow"></div>
                    {this.renderTitle()}
                    <div className="popover-content" style={{textAlign: 'center'}}>
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
						onClick: this::this.handleClick
                    });
                } else {
                    return child;
                }
            }
        });
    }
}

Pop.defaultProps = {
    place: 'top',
    trigger: 'hover',
    visible: false
}

export default Pop;
