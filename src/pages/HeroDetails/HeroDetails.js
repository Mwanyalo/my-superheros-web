import React, { Component } from "react";
import "./HeroDetails.scss";
import placeholder from "../../assets/placeholder.png";
import Header from "../../components/Header/Header";

class HeroDetails extends Component {
  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    const { id } = this.props.match.params;
    if (this.props.id !== id) {
      this.props.searchHeroById(id);
    }
  };

  imageError = (event) => {
    event.target.src = placeholder;
  };

  render() {
    const { hero = {} } = this.props;

    return (
      <div className="hero-content">
        <Header />
        <div className="profile-section">
          <div className="hero-profile">
            <img
              onError={this.imageError}
              src={hero?.image?.url}
              alt={hero.name}
            />
            <div className="hero-apperance">
              <h2 className="hero-title">{hero.name} Apperance</h2>
              <p>
                <span>Gender: </span>
                {hero.appearance?.gender}
              </p>
              <p>
                <span>Race:</span>
                {hero.appearance?.race}
              </p>
              <p>
                <span>Height: </span>
                {hero.appearance?.height}
              </p>
              <p>
                <span>Weight :</span>
                {hero.appearance?.weight}
              </p>
              <p>
                <span>Eye Color:</span>{" "}
                {hero.appearance === undefined
                  ? "-"
                  : hero?.appearance["eye-color"]}
              </p>
              <p>
                <span>Hair Color:</span>
                {hero.appearance === undefined
                  ? "-"
                  : hero?.appearance["hair-color"]}
              </p>
            </div>
          </div>
        </div>
        <div className="info-section">
          <div className="hero-header">{hero.name}</div>

          <header>
            <span>Power statistics</span>
          </header>

          <div className="power-stats">
            <div className="power-stat mb0">
              <div className="power-stat-name">Intelligence</div>
              <div>{hero.powerstats?.intelligence}%</div>
              <div className="stat-progress">
                <div
                  className="power-stat-bar"
                  style={{ width: `${hero.powerstats?.intelligence}%` }}
                ></div>
              </div>
            </div>
            <div className="power-stat mb0">
              <div className="power-stat-name">Strength</div>{" "}
              <div>{hero.powerstats?.strength}%</div>
              <div className="stat-progress">
                <div
                  className="power-stat-bar"
                  style={{ width: `${hero.powerstats?.strength}%` }}
                ></div>
              </div>
            </div>
            <div className="power-stat mb0">
              <div className="power-stat-name">Speed</div>
              <div>{hero.powerstats?.speed}%</div>
              <div className="stat-progress">
                <div
                  className="power-stat-bar"
                  style={{ width: `${hero.powerstats?.speed}%` }}
                ></div>
              </div>
            </div>
            <div className="power-stat mb0">
              <div className="power-stat-name">Durability</div>
              <div>{hero.powerstats?.durability}%</div>
              <div className="stat-progress">
                <div
                  className="power-stat-bar"
                  style={{ width: `${hero.powerstats?.durability}%` }}
                ></div>
              </div>
            </div>
            <div className="power-stat mb0">
              <div className="power-stat-name">Power</div>
              <div>{hero.powerstats?.power}%</div>
              <div className="stat-progress">
                <div
                  className="power-stat-bar"
                  style={{ width: `${hero.powerstats?.power}%` }}
                ></div>
              </div>
            </div>
            <div className="power-stat mb0">
              <div className="power-stat-name">Combat</div>
              <div>{hero.powerstats?.combat}%</div>
              <div className="stat-progress">
                <div
                  className="power-stat-bar"
                  style={{ width: `${hero.powerstats?.combat}%` }}
                ></div>
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
                  <td>{hero.work?.occupation}</td>
                </tr>
                <tr>
                  <td>Base</td>
                  <td>{hero.work?.base}</td>
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
                  <td>
                    {hero.biography === undefined
                      ? "-"
                      : hero?.biography["full-name"]}
                  </td>
                </tr>
                <tr>
                  <td>Alter Egos</td>
                  <td>
                    {" "}
                    {hero.biography === undefined
                      ? "-"
                      : hero?.biography["alter-egos"]}
                  </td>
                </tr>
                <tr>
                  <td>Aliases</td>
                  <td>{hero.biography?.aliases}</td>
                </tr>
                <tr>
                  <td>Place Of Birth</td>
                  <td>
                    {" "}
                    {hero.biography === undefined
                      ? "-"
                      : hero?.biography["place-of-birth"]}
                  </td>
                </tr>
                <tr>
                  <td>First Appearance</td>
                  <td>
                    {hero.biography === undefined
                      ? "-"
                      : hero?.biography["first-appearance"]}
                  </td>
                </tr>
                <tr>
                  <td>Publisher</td>
                  <td>{hero.biography?.publisher}</td>
                </tr>
                <tr>
                  <td>Alignment</td>
                  <td>{hero.biography?.alignment}</td>
                </tr>
              </tbody>
            </table>
            <header>
              <span>Connections</span>
            </header>
            <div className="section-details">
              <div>
                <h5 className="mb0">Group Affiliation</h5>
                <p>
                  {hero.connections === undefined
                    ? "-"
                    : hero?.connections["group-affiliation"]}
                </p>
              </div>
              <div>
                <h5 className="mb0">Relatives</h5>
                <p>{hero.connections?.relatives}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroDetails;
