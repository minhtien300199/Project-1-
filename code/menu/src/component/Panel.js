import React, { Component } from 'react'

export default class Panel extends Component {
    render() {
        return (
            <div className={"overlay "} style={{top:`${this.props.top+5}px`,left:`${this.props.left+5}px`,border:'1px solid black'}}>
                <div id="panel">
                    <div className="img"  alt="test" style={{
    width: `100%`,
    height: `250px`,
    backgroundImage: `url(${this.props.img})`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize:`cover`
}}>
</div>
                    <div className={"img-des "+this.props.hidden} style={{
                            fontSize:'20px',
                            border: `1px solid`,
                            textAlign: `center`,
                            position: `fixed`,
                            top: `35%`,
                            left: `50%`,
                            transform: `translate(-50%, -50%)`,
                            color: `rgb(66, 87, 206)`,
                            WebkitFilter: `grayscale(0%)`,
                            filter: `grayscale(0%)`
                    }}>
                        {this.props.des}
                    </div>
                </div>
            </div>
        )
    }
}
// width: `${this.props.width}px`,
// height: `${this.props.height}px`,