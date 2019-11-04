import React, { Component } from "react";
import SudokuSite from "./SudokuSite";
import Snake from "./Snake";
import "../style/style.css";
import XepSo from "./XepSo";
import MineSweeper from "./MineSweeper";
// import Modal from './Panel'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="ui-header">
          <div className="title"><h1>Web Game</h1></div>
        </div>
        <div className="ui-main">
          <div className="card1">
            <SudokuSite />
          </div>
          <div className="card2">
            <Snake />
          </div>
          <div className="card3">
            <XepSo />
          </div>
          <div className="card4">
            <MineSweeper />
          </div>
        </div>
        <div className="ui-footer"></div>
      </div>
    );
  }
}
