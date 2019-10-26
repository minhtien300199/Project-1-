import React, { Component } from "react";
import Modal from "./Panel";
import Img from "../pics/XepSoGif.gif";
import "../style/test.css";
export default class XepSo extends Component {
  state = {
    top: "",
    left: "",
    img: Img,
    hidden: "hidden",
    des: "2048 là trò chơi gộp số sao cho số lớn nhất là 2048 thì thắng game."
  };
  handlingMouseMove = e => {
    this.setState({ top: e.clientY, left: e.clientX, hidden: "" });
  };
  renderModal() {
    return (
      <Modal
        height='368'
        width='368'
        top={this.state.top}
        left={this.state.left}
        img={this.state.img}
        hidden={this.state.hidden}
        des={this.state.des}
      ></Modal>
    );
  }
  removeModal() {
    this.renderModal();
  }
  render() {
    return (
      <div>
        {this.renderModal()}
        <div
        className="xepSo-title"
          onMouseMove={this.handlingMouseMove}
          onMouseOut={() => {
            this.setState({ hidden: "hidden" });
            this.renderModal();
          }}
        >
          2048
        </div>
        <a href="/2048">
          Click Here
        </a>
      </div>
    );
  }
}
