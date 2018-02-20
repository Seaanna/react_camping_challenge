import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Camping1 from '../images/camping_1.jpg';
import Camping2 from '../images/camping_2.jpg';
import Delete from 'material-ui-icons/Delete';

const amenities = [
  {
    'title': 'Toilet',
    'presence': true,
    'subfeatures': []
  },
  {
    'title': 'Pets allowed',
    'presence': true,
    'subfeatures': []
  },
  {
    'title': 'Shower',
    'presence': false,
    'subfeatures': [
      {
        'title': 'Outdoor shower',
        'presence': false,
        'subfeatures': []
      }
    ]
  },
  {
    'title': 'Trash',
    'presence': true,
    'subfeatures': [
      {
        'title': 'Recycling bin',
        'presence': true,
        'subfeatures': []
      },
      {
        'title': 'Compost bin',
        'presence': true,
        'subfeatures': []
      },
      {
        'title': 'Trash bin',
        'presence': false,
        'subfeatures': [
          {
            'title': 'Pack in, pack out',
            'presence': true,
            'subfeatures': []
          }
        ]
      }
    ]
  }
];

const styles = {
  amenity: {
    padding: '15px 15px',
    margin: 0,
  },
  amenityText: {
    display: 'inline-block',
    position: 'relative',
    fontSize: 18
  },
  disabled: {
    display: 'inline-block',
    position: 'relative',
    fontSize: 18,
    color: 'grey',
  },
  inline: {
    display: 'inline-block'
  },
  icon: {
    width: 25,
    height: 25,
    position: 'relative',
    top: 4,
    cursor: 'pointer'
  }
}



class CampGround extends Component {

  renderAmenities(amenities) {
    return(
      amenities.map((amenity, index) => (
        <div>
          <p key={amenity.name} style={styles.amenity}>
            <span style={styles.amenityText}>
              {amenity.title}
            </span>
            <span
              className='float-right'
              style={styles.inline}
            >
              <Delete style={styles.icon} color='grey' />
            </span>
          </p>
          <Divider />
        </div>
      ))
    );
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12} sm={6}>
            <div className='text-center'>
              <img src={Camping1} alt={"camping_1"} className='img-fluid' />
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className='text-center'>
              <img src={Camping2} alt={"camping_2"} className='img-fluid' />
            </div>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={12} sm={6}>
            <div className='text-left'>
            <h1>
              Santee Lakes
            </h1>
            </div>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={12} sm={6}>
            <div className='text-left'>
            <p>
              Lorem ipsum dolor amet keffiyeh vape echo park skateboard shabby chic gochujang kombucha celiac art party lomo whatever fashion axe synth. Tacos wolf chillwave tofu, migas pitchfork iPhone. Biodiesel hashtag lo-fi scenester. Enamel pin flannel banjo ethical austin. PBR&B hashtag cray, roof party readymade humblebrag pop-up occupy copper mug hexagon jianbing banjo.
            </p>
            </div>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={12} sm={6}>
            <div className='text-left'>
              <Paper zDepth={1}>
                  {
                   this.renderAmenities(amenities)
                  }
              </Paper>
            </div>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default CampGround;
