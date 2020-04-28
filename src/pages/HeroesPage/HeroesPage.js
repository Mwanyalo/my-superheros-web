import React, { Component } from "react";
import "./HeroesPage.scss";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import placeholder from "../../assets/placeholder.png";

class HeroesPage extends Component {
  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    const { name } = this.props.match.params;
    if (this.props.name !== name) {
      this.props.searchHeroesName(name);
    }
  };

  imageError = (event) => {
    event.target.src = placeholder;
  };

  render() {
    const { heroes = [] } = this.props;

    return (
      <div className="heroes-body">
        <Header />
        <h4>Heroes found: {heroes?.length}</h4>
        <div className="heroes-list">
          {heroes.map((hero) => {
            return (
              <NavLink
                key={hero.id}
                to={`/hero/${hero.id}`}
                className="frame"
                style={{ display: "inline-block" }}
              >
                <div className="frame-avatar">
                  <div
                    className="avatar"
                    style={{
                      backgroundImage: `url(${hero.image?.url || placeholder})`,
                    }}
                  ></div>
                </div>
                <div className="name">
                  <h4>{hero.name}</h4>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HeroesPage;
