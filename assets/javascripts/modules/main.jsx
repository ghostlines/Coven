import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div className="panels">
        <div className="info">
          <div className="info__file-name">
            info.plist
          </div>

          <div className="info__text">
            {this.props.info}
          </div>
        </div>

        <div className="documents">
          <div className="documents__file-name">
            documents.plist
          </div>

          <div className="documents__text">
            {this.props.documents}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
