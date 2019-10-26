import React, { Component } from 'react'
import Modal from './Panel'
import Img from '../pics/minesweeperGif.gif'
export default class MineSweeper extends Component {
    state={top:'',left:'',img:Img,hidden:'hidden'}
    handlingMouseMove=(e)=>{
        this.setState({top:e.clientY,left:e.clientX,hidden:'',des:`
        game dò mìn, thắng khi bạn cấm cờ được tất cả các quả bom, thua khi bạn mở trúng bom`});
    }
    renderModal(){
            return (<Modal
                height='314'
                width='298'
                top={this.state.top}
                left={this.state.left}
                img={this.state.img}
                hidden={this.state.hidden}
                des={this.state.des}
            ></Modal>);
    }
    removeModal(){
        this.renderModal();
    }
    render() {
        return (
            <div>
                {this.renderModal()}
                <div className="minesweeper-title" onMouseMove={this.handlingMouseMove} onMouseOut={()=>{this.setState({hidden:'hidden'});this.renderModal()}}>
                MineSweeper
                </div>
                <a href="/MineSweeper"> Click Here</a>
            </div>
            
        )
    }
}
