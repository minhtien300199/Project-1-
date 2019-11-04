import React, { Component } from "react";
import Modal from "./Panel";
import Img from "../pics/XepSoGif.gif";
import "../style/test.css";

export default class XepSo extends Component {
  state = {
    top: "",
    left: "",
    index:3,
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
        index={this.state.index}
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
      <div           
      onMouseMove={this.handlingMouseMove}
      onMouseOut={() => {
        this.setState({ hidden: "hidden" });
        this.renderModal();
      }}>
        {this.renderModal()}
        <div
        className="xepSo-title"

        >
          2048
        </div>
        <div className="btnContainer">
        <a href="/2048" className="button button-play">
        </a>
        </div>
      </div>
    );
  }
}
