import React from "react";

import SegmentedControl from "./segmentedControl";
import SegmentedButton from "./segmentedButton";
import Panel from "./panel";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: Object.keys(props)[0]
    };
  }

  handleActiveChange(active) {
    this.setState({ active });
  }

  render() {
    const segments = Object.keys(this.props).map(option => {
      const isActive = this.state.active === option;
      const onClick = this.handleActiveChange.bind(this);

      return (
        <SegmentedButton
          isActive={isActive}
          key={option}
          label={option}
          onClick={onClick}
        />
      );
    });

    const content = this.props[this.state.active];

    return (
      <div className="panels">
        <SegmentedControl>
          {segments}
        </SegmentedControl>

        <Panel content={content} />
      </div>
    );
  }
}

export default Main;
