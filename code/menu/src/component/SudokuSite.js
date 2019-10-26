import React, { Component } from 'react'
import Modal from './Panel';
import Img from '../pics/SudokuGif.gif'
export default class SudokuSite extends Component {
    state={top:'',left:'',img:Img,hidden:'hidden'}
    handlingMouseMove=(e)=>{
        this.setState({top:e.clientY,left:e.clientX,hidden:'',des:`
        là trò chơi điền số sao cho trong 1 ô vuông hoặc dòng cột từ 1 tới 9 không có số nào được trùng nhau`});
    }
    renderModal(){
            return (<Modal
                height='251'
                width='251'
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
                <div className="sudo-title" onMouseMove={this.handlingMouseMove} onMouseOut={()=>{this.setState({hidden:'hidden'});this.renderModal()}}>
                SudokuSite
                </div>
                <div className="sudo-pic">
                <a href="https://sudoku-app-tienle.netlify.com/" >
                    Click Here
                </a>
                </div>
            </div>
        )
    }
}
