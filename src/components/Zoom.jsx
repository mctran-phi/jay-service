import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 5;
  height: 100%;
  width: 100%;
  box-shadow: 2px 2px 7px 2px rgba(130, 130, 130, .7),  -2px -2px 7px 2px rgba(130, 130, 130, 1);
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 0;
`;

const Image = styled.div`
  background-size: 200%;
  background-color: white;
  background-repeat: no-repeat;
  height: 100%;
`;


class Zoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo
    };
  }




  render() {
    return (
      <Container>
        <Image style={{backgroundImage: 'url(' + this.props.photo.url + ')', backgroundPosition: (-this.props.x * 1.6) + 'px ' + (-this.props.y * 1.6) + 'px'}}>
        </Image>
      </Container>
    );
  }
}


export default Zoom;