import React, { createContext, Component } from "react";
import { createBrowserHistory } from "history";
import api from "./config";

const HeroContext = createContext({});
const history = createBrowserHistory();

class HeroProvider extends Component {
  state = {
    hero: {},
    heroes: [],
    name: "",
    id: "",
    loading: false,
    message: "",
    error: "",
  };

  searchHeroesName = (name) => {
    this.setState({ name: name, hero: {}, loading: true, error: "" });
    api
      .get(`/search/${name}`)
      .then((res) => {
        const { data, status } = res;
        this.setState({ loading: false });
        console.log(res);
        if (status === 200 && data.response === "success") {
          history.push(`/search/${name}`);
          this.setState({ heroes: data.results, message: data.response });
        } else {
          this.setState({ error: data.error });
        }
      })
      .catch((error) => {
        console.log("error 101:", error);
        this.setState({ error: error });
        this.setState({ loading: false });
      });
  };

  searchHeroById = (hid) => {
    this.setState({ id: hid, loading: true, error: "" });
    api
      .get(`/${hid}`)
      .then((res) => {
        const { data, status } = res;
        this.setState({ loading: false });
        if (status === 200) {
          this.setState({ hero: data, message: "ok" });
        }
      })
      .catch((error) => {
        console.log("error 101:", error);
        this.setState({ error: error });
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <HeroContext.Provider
        value={{
          ...this.state,
          history: history,
          searchHeroesName: this.searchHeroesName,
          searchHeroById: this.searchHeroById,
        }}
      >
        {this.props.children}
      </HeroContext.Provider>
    );
  }
}

export const Consumer = HeroContext.Consumer;
export const Provider = HeroProvider;
