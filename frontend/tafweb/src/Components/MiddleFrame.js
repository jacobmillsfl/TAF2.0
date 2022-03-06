import React, { Component } from 'react';

class MiddleFrame extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    const children = this.props.children;
    
    return (
      <div>
        <div className="middle-frame-body">
          <div className="row">
            <div className="middle-frame-holder">
              <div className="middle-frame-content">
                <div class="middle-frame-frame">
                  <div class="middle-frame-items">
                    <div>{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MiddleFrame;