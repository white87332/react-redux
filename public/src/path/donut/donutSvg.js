import React from 'react';

class DonutSvg extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        let { width, height } = this.props;
        return (
            <svg width={width} height={height}>
                {this.props.children}
            </svg>
        );
    }
}

export default DonutSvg;
