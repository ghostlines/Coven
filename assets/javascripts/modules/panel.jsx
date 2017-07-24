import React from "react";

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <div className="panel__content">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Panel;
