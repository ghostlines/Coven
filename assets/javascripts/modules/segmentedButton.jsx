import React from "react";

class SegmentedButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    this.props.onClick(this.props.label);
  }

  render() {
    let classList = ["button"];

    if (this.props.isActive) {
      classList.push("button--active");
    }

    return (
      <div
        className={classList.join(" ")}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.label}
      </div>
    );
  }
}

module.exports = SegmentedButton;
