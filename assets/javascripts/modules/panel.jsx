import React from "react";

function format(content) {
  if (typeof content === "string") {
    return content;
  } else {
    return JSON.stringify(content);
  }
}

class Panel extends React.Component {
  render() {
    const content = format(this.props.content);

    return (
      <div className="panel">
        <div className="panel__content">
          {content}
        </div>
      </div>
    );
  }
}

export default Panel;
