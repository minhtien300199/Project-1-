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
          <div className="header-content">Web Game</div>
        </div>
        <div className="ui-main">
          <div className="grid-item">
            <SudokuSite />
          </div>
          <div className="grid-item">
            <Snake />
          </div>
          <div className="grid-item">
            <XepSo />
          </div>
          <div className="grid-item">
            <MineSweeper />
          </div>
        </div>
        <div className="ui-footer"></div>
      </div>
    );
  }
}
