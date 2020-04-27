import React, { createContext, Component } from "react";
import { createBrowserHistory } from "history";
import api from "./config";

const HeroContext = createContext({});
const history = createBrowserHistory();

class HeroProvider extends Component {
  state = {
    hero: {},
    heroes: [],
    loading: false,
    message: "",
    error: "",
  };

  searchHeroesName = () => {
    this.setState({ loading: true, error: "" });
    const data = "batman";

    // fetch(`https://superheroapi.com/api/248393186523534/search/${data}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // this.setState({ todos: data });
    //     console.log(data);
    //   })
    //   .catch(console.log);

    api
      .get(`/search/${data}`)
      .then((res) => {
        const { data, status } = res;
        this.setState({ loading: false });
        console.log(data, status);
        if (status === 200) {
          this.setState({ heroes: data, message: "ok" });
        }
      })
      .catch((error) => {
        this.setState({ error: error });
        this.setState({ loading: false });
      });
  };

  // postRecommendedUsers = (data: any) => {
  //   this.setState({ loading: true, error: "" });
  //   api
  //     .post("/ticket/recommendUsers", data)
  //     .then((res: any) => {
  //       this.setState({ loading: false });
  //       history.push(`/view-tickets`);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({ loading: false });
  //     });
  // };

  // validateOTP = (data) => {
  //   this.setState({ loading: true, error: "" });
  //   api
  //     .put(url, data)
  //     .then((res) => {
  //       const { status } = res;
  //       this.setState({ loading: false });
  //       if (status === 200) {
  //         this.setState({ message: "Login Successful" }, () => {
  //           const key = `tok${this.state.phone}en`;
  //           localStorage.setItem("accKeySession", key);
  //           localStorage.removeItem("phone");
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       this.setState({ error: "Invalid code, please try again" });
  //       this.setState({ loading: false });
  //     });
  // };

  // logout = () => {
  //   localStorage.removeItem("accKeySession");
  //   this.setState({ loading: false, message: "", phone: "", error: "" });
  // };

  render() {
    return (
      <HeroContext.Provider
        value={{
          ...this.state,
          history: history,
          searchHeroesName: this.searchHeroesName,
          // validateOTP: this.validateOTP,
          // logout: this.logout,
        }}
      >
        {this.props.children}
      </HeroContext.Provider>
    );
  }
}

export const Consumer = HeroContext.Consumer;
export const Provider = HeroProvider;
