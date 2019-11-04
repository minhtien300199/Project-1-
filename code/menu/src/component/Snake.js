/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
import Modal from './Panel';
import Img from '../pics/SnakeGif.gif';

export default class Snake extends Component {
    state={top:'',left:'',img:Img,hidden:'hidden',index:1};
    handlingMouseMove=(e)=>{
        this.setState({top:e.clientY,left:e.clientX,hidden:'',des:`
        là trò chơi rắn ăn trái cây. trò chơi kết thúc khi khi cơ rắn tự va chạm với thân`});
    }
    renderModal(){
            return (<Modal
            index={this.state.index}
                top={this.state.top}
                left={this.state.left}
                img={this.state.img}
                hidden={this.state.hidden}
                des={this.state.des}
            ></Modal>);
    }
    render() {
        return (
            <div onMouseMove={this.handlingMouseMove} onMouseOut={()=>{this.setState({hidden:'hidden'});this.renderModal()}}>
                {this.renderModal()}
                <div className="snake-title" >
                Snake
                </div>
                <div className="btnContainer">
                <a href="/snake" className="button button-play" ></a>

                </div>
            </div>
        )
    }
}
