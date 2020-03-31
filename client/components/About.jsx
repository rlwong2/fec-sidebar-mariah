import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DetectableOverflow from 'react-detectable-overflow';


///////////////// STYLED COMPONENTS ////

const AboutDiv2 = styled.div`
  margin-bottom: 20px;
  max-height: 85px;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  display: block;
`;
const AboutDiv2Big = styled.div`
  margin-bottom: 20px;
  max-height: none;

  position: relative;
  display: block;
`;

const A = styled.a`
  margin-top: 10px;
  cursor: pointer;
`;

const Invis = styled.div`
  opacity: .0;

`;
/////////////////



class About extends React.Component {

  constructor(props) {

    super(props);
    this.outerRef = React.createRef();
    this.state = {
      height: 0,
      fullView: false,
      overFlow: false
    };

  }

  checkOverflow() {
    setTimeout(() => {
      this.setState({
        height: this.outerRef.current.clientHeight
      });
      if (this.state.height > 85) {
        this.setState({
          overFlow: true
        });
      }
    }, 120);
  }

  componentDidMount() {
    this.checkOverflow();
  }

  render() {
    return (
      <div >
        <div>
          <div ref={this.outerRef} style={{position: 'absolute', zIndex: '-1'}}>
            <Invis >
              <AboutDiv2Big id="notCollapsed">
                <div id="wrapper">
                  <div id="truncated-description">
                    {this.props.about.join('\n')}
                  </div>
                </div>
              </AboutDiv2Big>
            </Invis>
          </div>
          {this.state.fullView
            ? <AboutDiv2Big id="collapsed">
              <div id="wrapper">
                <div id="truncated-description">
                  {this.props.about.join('\n')}
                </div>
              </div>
            </AboutDiv2Big>
            :
            <AboutDiv2 id="notCollapsed">
              <div id="wrapper">
                <div id="truncated-description">
                  {this.props.about.join('\n')}
                </div>
              </div>
            </AboutDiv2>
          }
        </div>

        <div>
          {this.state.overFlow
            ?
            <div>
              {this.state.fullView
                ? <A className="collapse" onClick={() => this.setState({ fullView: false })}>
                  Show less <span style={{ 'fontSize': '7px' }}>▲</span>
                </A>
                :
                <A className="collapse" onClick={() => this.setState({ fullView: true })}>
                  Show more <span style={{'fontSize': '7px'}}>▼</span>
                </A>
              }
            </div>
            :
            <div></div>

          }
        </div>
      </div>
    );
  }

}

export default About;