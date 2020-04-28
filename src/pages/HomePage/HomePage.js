import React, { Component } from "react";
import "./HomePage.scss";
import Logo from "../../assets/logo.png";

import { FaSearch } from "react-icons/fa";

class HomePage extends Component {
  state = {
    search: "",
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  searchHeroes = () => {
    const { searchHeroesName } = this.props;
    searchHeroesName(this.state.search);
  };

  render() {
    return (
      <div className="home-page">
        <div className="heroes-logo">
          <img src={Logo} alt="my superheroes app" />
        </div>
        <h3 className="description">
          Learn more about your favorite superhero
        </h3>
        <form>
          <input
            className="search-input"
            placeholder="Search Name"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={() => this.searchHeroes()}>
          <FaSearch /> Search
        </button>
      </div>
    );
  }
}

export default HomePage;
