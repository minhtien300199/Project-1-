import React, { Component } from 'react'
import Modal from './Panel';
import Img from '../pics/SnakeGif.gif';

export default class Snake extends Component {
    state={top:'',left:'',img:Img,hidden:'hidden'};
    handlingMouseMove=(e)=>{
        this.setState({top:e.clientY,left:e.clientX,hidden:'',des:`
        là trò chơi rắn ăn trái cây. trò chơi kết thúc khi khi cơ thể rắn đụng nhau`});
    }
    renderModal(){
            return (<Modal
                height='320'
                width='320'
                top={this.state.top}
                left={this.state.left}
                img={this.state.img}
                hidden={this.state.hidden}
                des={this.state.des}
            ></Modal>);
    }
    render() {
        return (
            <div>
                {this.renderModal()}
                <div className="snake-title" onMouseMove={this.handlingMouseMove} onMouseOut={()=>{this.setState({hidden:'hidden'});this.renderModal()}}>
                Snake
                </div>
                <a href="/snake"> Click Here</a>
            </div>
        )
    }
}
