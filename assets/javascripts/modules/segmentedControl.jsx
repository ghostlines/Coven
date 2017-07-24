import React from "react";

class SegmentedControl extends React.Component {
  render() {
    return <div className="segmented-control">{this.props.children}</div>;
  }
}

module.exports = SegmentedControl;
