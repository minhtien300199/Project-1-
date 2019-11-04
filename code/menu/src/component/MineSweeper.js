/* eslint-disable jsx-a11y/anchor-has-content */
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
            <div onMouseMove={this.handlingMouseMove} onMouseOut={()=>{this.setState({hidden:'hidden'});this.renderModal()}}>
                {this.renderModal()}
                <div className="minesweeper-title" >
                MineSweeper
                </div>
                <div className="btnContainer">
                <a href="/MineSweeper" className="button button-play"></a>
                </div>
            </div>
            
        )
    }
}
