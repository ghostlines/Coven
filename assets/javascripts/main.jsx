import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div className="panels">
        <div className="info">
          <h1 className="info__file-name">
            info.plist
          </h1>

          <div className="info__text">
            {this.props.info}
          </div>
        </div>

        <div className="documents">
          <h1 className="documents__file-name">
            documents.plist
          </h1>

          <div className="documents__text">
            {this.props.documents}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
