import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    textSearch: ""
  };

  onSearchChange = e => {
    const textSearch = e.target.value;
    this.setState({ textSearch });
    this.props.onSearchChange(textSearch);
  };

  render() {
    const { taskData } = this.props;

    let classNames = "container";

    if (taskData.length > 1) {
      classNames += " moreTwoItems";
    }

    return (
      <div className={classNames}>
        <div className="row">
          <div className="col-12">
            <div id="custom-search-input">
              <div className="input-group">
                <input
                  type="text"
                  className="search-query form-control"
                  placeholder="Search"
                  value={this.state.textSearch}
                  onChange={this.onSearchChange}
                />
                <span className="input-group-btn">
                  <button type="button" disabled>
                    <span className="fa fa-search"></span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
