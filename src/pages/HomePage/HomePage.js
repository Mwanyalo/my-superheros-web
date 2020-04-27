import React, { Component } from "react";
import "./HomePage.scss";
import Logo from "../../assets/logo.png";

import { FaSearch } from "react-icons/fa";

class HomePage extends Component {
  state = {
    search: "",
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleChange = (event) => {
    const { value } = event.target;
    const { searchHeroesName } = this.props;
    this.setState({ search: value }, () => {
      searchHeroesName(this.state.search);
    });
  };

  render() {
    return (
      <div>
        <div>
          <img src={Logo} alt="my superheroes app" />
        </div>
        <div className="search-form">
          <form>
            <input
              className="search-input"
              placaholder="search"
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button type="submit">
              <FaSearch size={"22px"} />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default HomePage;
