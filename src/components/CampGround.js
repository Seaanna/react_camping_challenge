import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Camping1 from '../images/camping_1.jpg';
import Camping2 from '../images/camping_2.jpg';
import Wc from 'material-ui-icons/Wc';
import Pets from 'material-ui-icons/Pets';
import Delete from 'material-ui-icons/Delete';
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown';
import Done from 'material-ui-icons/Done';
import Clear from 'material-ui-icons/Clear';

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
    cursor: 'pointer'
  },
  amenityText: {
    display: 'inline-block',
    position: 'relative',
    fontSize: 18
  },
  subfeatureText: {
    display: 'inline-block',
    position: 'relative',
    fontSize: 18,
    marginLeft: 38
  },
  disabledSubfeature: {
    display: 'inline-block',
    position: 'relative',
    fontSize: 18,
    color: 'grey',
    marginLeft: 38
  },
  inline: {
    display: 'inline-block'
  },
  icon: {
    width: 25,
    height: 25,
    position: 'relative',
    top: 4,
    cursor: 'pointer',
    marginRight: 15,
    color: 'grey',
    fontSize: 20,
    textAlign: 'center'
  },
  item: {
    listStyleType: 'none',
    padding: 0
  }
}

class CampGround extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAmenities: {}
    };
  }

  toggleSubfeature(amenityTitle){
    let openAmenities = this.state.openAmenities;
    openAmenities[amenityTitle] = !openAmenities[amenityTitle];
    this.setState(openAmenities: openAmenities);
  }

  renderAmenities(amenities) {
    return(
      amenities.map((amenity, index) => (
        <li key={index} style={styles.item}>
          <p onClick={this.toggleSubfeature.bind(this, amenity.title)} style={styles.amenity}>
            <span style={styles.amenityText}>
              {
                amenity.title == 'Toilet' &&
                <Wc style={styles.icon} color='grey' />
              }
              {
                amenity.title == 'Pets allowed' &&
                <Pets style={styles.icon} color='grey' />
              }
              {
                amenity.title == 'Shower' &&
                <i className='fas fa2x fa-shower' style={styles.icon} aria-hidden='true'></i>
              }
              {
                amenity.title == 'Trash' &&
                <Delete style={styles.icon} color='grey' />
              }
            </span>
            <span style={styles.amenityText}>
              {amenity.title}
            </span>
            {
              amenity.subfeatures &&
              amenity.subfeatures.length !== 0 &&
              <span
                className='float-right'
                style={styles.inline}
              >

                <KeyboardArrowDown style={styles.icon} color='grey' />
              </span>
            }
          </p>
          <Divider />
          <ul style={styles.item}>
            {
              this.state.openAmenities[amenity.title] &&
              this.renderSubfeatures(amenity.subfeatures)
            }
          </ul>
        </li>
      ))
    );
  }

  renderSubfeatures(subfeatures) {
    return(
      subfeatures.map((subfeature, index) => (
        <li key={index}>
          {
            <p onClick={this.toggleSubfeature.bind(this, subfeature.title)} style={styles.amenity}>
              <span style={subfeature.presence === false ? styles.disabledSubfeature : styles.subfeatureText}>
                {
                  subfeature.presence == false &&
                  <Clear style={styles.icon} color='red' />
                }
                {
                  subfeature.presence == true &&
                  <Done style={styles.icon} color='black' />
                }
                {
                  subfeature.title
                }

              </span>
              {
                subfeature.subfeatures &&
                subfeature.subfeatures.length !== 0 &&
                <span
                  className='float-right'
                  style={styles.inline}
                >
                  <KeyboardArrowDown style={styles.icon} color='grey' />
                </span>
              }

            </p>
          }
          <Divider />
          <ul style={styles.item}>
            {
              this.state.openAmenities[subfeature.title] &&
              this.renderSubfeatures(subfeature.subfeatures)
            }
          </ul>
        </li>
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
          <Col xs={12} sm={{ size: 6, order: 2, offset: 1 }}>
            <div className='text-left'>
            <h1>
              Camp Granite Lake
            </h1>
            </div>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={12} sm={{ size: 6, order: 2, offset: 1 }}>
            <div className='text-left'>
              <h5>
                About Camp Granite Lake
              </h5>
            </div>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={12} sm={{ size: 2, order: 2, offset: 1 }}>
            <div className='text-left'>
              <strong>
                Hosted by
              </strong>
              <div className="text-muted">
                Sea-Anna
              </div>
            </div>
          </Col>
          <Col xs={12} sm={{ size: 4, order: 2, offset: 0 }}>
            <div className='text-left'>
            <p>
              Lorem ipsum dolor amet keffiyeh vape echo park skateboard shabby chic gochujang kombucha celiac art party lomo whatever fashion axe synth. Tacos wolf chillwave tofu, migas pitchfork iPhone. Biodiesel hashtag lo-fi scenester. Enamel pin flannel banjo ethical austin. PBR&B hashtag cray, roof party readymade humblebrag pop-up occupy copper mug hexagon jianbing banjo.
            </p>
            </div>
          </Col>
        </Row>
        <br/>
        <Row style={styles.amenityMargin}>
          <Col xs={12} sm={{ size: 4, order: 3, offset: 3 }}>
            <div className='text-left'>
              <Paper zDepth={1}>
                <ul style={styles.item}>
                  {
                    this.renderAmenities(amenities)
                  }
                </ul>
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
