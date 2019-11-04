import React, { Component } from 'react'
import Modal from './Panel';
import Img from '../pics/SudokuGif.gif'
export default class SudokuSite extends Component {
    state={img:Img,hidden:'hidden',index:0}
    handlingMouseMove=(e)=>{
        this.setState({hidden:'',des:`
        là trò chơi điền số sao cho trong 1 ô vuông hoặc dòng cột từ 1 tới 9 không có số nào được trùng nhau`});
    }
    renderModal(){
            return (<Modal
                index={this.state.index}
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
                <div className="sudo-title" >
                SudokuSite
                </div>
                <div className="btnContainer">
                <a href="/webSudoku" className="button button-play">
                </a>
                </div>
            </div>
        )
    }
}
