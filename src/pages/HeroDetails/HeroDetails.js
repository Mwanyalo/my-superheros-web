import React, { Component } from "react";
import "./HeroDetails.scss";

class HeroDetails extends Component {
  render() {
    return (
      <div className="hero-content">
        <div className="profile-section">
          <div className="hero-profile">
            <img
              src="https://www.superherodb.com/pictures2/portraits/10/100/10234.jpg"
              alt="Burnout"
            />

            <div className="hero-apperance">
              <h2 className="hero-title">BATWOMAN V Apperance</h2>
              <p>
                <span>Gender: </span>Feb 17, 1963
              </p>
              <p>
                <span>Race:</span>1m99 / 6-6
              </p>
              <p>
                <span>Height: </span>SG / SF{" "}
              </p>
              <p>
                <span>Weight :</span>United States
              </p>
              <p>
                <span>Eye Color:</span> North Carolina
              </p>
              <p>
                <span>Hair Color:</span> North Carolina
              </p>
            </div>
          </div>
        </div>
        <div className="info-section">
          <div className="hero-header">Batwoman V</div>

          <header>
            <span>Power statistics</span>
          </header>

          <div className="power-stats">
            <div className="power-stat mb0">
              <div className="power-stat-name">Intelligence</div>
              <div>100%</div>
              <div className="stat-progress">
                <div className="power-stat-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="power-stat mb0">
              <div className="power-stat-name">Strength</div> <div>100%</div>
              <div className="stat-progress">
                <div className="power-stat-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="power-stat mb0">
              <div className="power-stat-name">Speed</div>
              <div>100%</div>
              <div className="stat-progress">
                <div className="power-stat-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="power-stat mb0">
              <div className="power-stat-name">Durability</div>
              <div>100%</div>
              <div className="stat-progress">
                <div className="power-stat-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="power-stat mb0">
              <div className="power-stat-name">Power</div>
              <div>100%</div>
              <div className="stat-progress">
                <div className="power-stat-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="power-stat mb0">
              <div className="power-stat-name">Combat</div>
              <div>100%</div>
              <div className="stat-progress">
                <div className="power-stat-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
          <div className="hero-section">
            <header>
              <span>Work</span>
            </header>
            <table className="section-details">
              <tbody>
                <tr>
                  <td>Occupation</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>Base</td>
                  <td>Gotham City</td>
                </tr>
              </tbody>
            </table>

            <header>
              <span>Biography</span>
            </header>

            <table className="section-details">
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>Katherine Rebecca Kane</td>
                </tr>
                <tr>
                  <td>Alter Egos</td>
                  <td>No alter egos found.</td>
                </tr>
                <tr>
                  <td>Aliases</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Place Of Birth</td>
                  <td>Katherine Rebecca Kane</td>
                </tr>
                <tr>
                  <td>First Appearance</td>
                  <td>52 #7 (June, 2006)</td>
                </tr>
                <tr>
                  <td>Publisher</td>
                  <td>DC Comics"</td>
                </tr>
                <tr>
                  <td>Alignment</td>
                  <td>good</td>
                </tr>
              </tbody>
            </table>
            <header>
              <span>Connections</span>
            </header>
            <div className="section-details">
              <div>
                <h5 className="mb0">Group Affiliation</h5>
                <p>Batman Family (unofficially), D.E.O, Unknowns</p>
              </div>
              <div>
                <h5 className="mb0">Relatives</h5>
                <p>
                  Jacob Kane (father), Gabi Kane (mother; deceased), Beth Kane
                  (twin sister), Mary Elizabeth \"Bette\" Kane (cousin),
                  Catherine Hamilton-Kane (stepmother), Philip Kane (uncle),
                  Kane Family
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroDetails;
