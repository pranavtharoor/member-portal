import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VirtualID from 'Src/components/VirtualID';
import Chart from 'Src/modules/Chart';
import './home.scss';

class Home extends Component {
  static propTypes = {
    getUserDetails: PropTypes.func.isRequired,
    userDetails: PropTypes.shape({
      memId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired,
    grid: PropTypes.shape({
      areas: PropTypes.string.isRequired,
      rows: PropTypes.string.isRequired,
      columns: PropTypes.string.isRequired
    }),
    content: PropTypes.arrayOf(
      PropTypes.shape({
        area: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired
      })
    ).isRequired
  };

  componentDidMount() {
    this.props.getUserDetails();
    let prevWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      if (
        (window.innerWidth <= 1250 && prevWidth > 1250) ||
        (window.innerWidth >= 1250 && prevWidth < 1250)
      )
        this.forceUpdate();
      prevWidth = window.innerWidth;
    });
  }

  render() {
    return (
      <div id="home-page">
        <VirtualID {...this.props.userDetails} />
        <div
          style={{
            gridTemplateAreas: this.props.grid.areas,
            gridTemplateRows: this.props.grid.rows,
            gridTemplateColumns: this.props.grid.columns
          }}
          className="home-grid"
        >
          {this.props.content.map((template, i) => (
            <div
              key={i}
              style={{
                gridArea: template.area,
                height: template.height
              }}
            >
              <div
                style={{
                  width: template.width,
                  height: template.height
                }}
              >
                {template.type === 'chart' ? (
                  <Chart route={template.route} />
                ) : (
                  <div />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
