import React, { Component } from 'react'

export default class Panel extends Component {
    render() {
        return (
            <div className={"overlay "+this.props.hidden} style={{top:`${this.props.top+5}px`,left:`${this.props.left+5}px`,position:'fixed',border:'1px solid black'}}>
                <div id="panel">
                    <div className="img" style={{
    width: `${this.props.width}px`,
    height: `${this.props.height}px`,
    backgroundImage: `url(${this.props.img})`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`
}}></div>
                    <div>
                        {this.props.des}
                    </div>
                </div>
            </div>
        )
    }
}
