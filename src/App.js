// Import required dependencies
import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import axios from "axios";
//import App Components
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import NotFound from "./components/NotFound";
import apiKey from "./config";
import PhotoContainer from "./components/PhotoContainer";


export default class App extends Component {
  // Create a constructor and it's initial state value
  constructor() {
    super();
    this.state = {
      photos: [],
      dog: [],
      ocean: [],
      mountain: [],
    };
  }

  // Call component did mount and pass it in the performSearch function
  componentDidMount() {
    this.performSearch();
    this.performSearch("dog");
    this.performSearch("ocean");
    this.performSearch("mountain");
  }


//Create a function that takes in a parameter named query and updates the given state when called
// Fetch data using axios 
  performSearch = (query = "roses") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (query === "dog") {
          this.setState({
            dog: response.data.photos.photo,
          });
        } else if (query === "ocean") {
          this.setState({
            ocean: response.data.photos.photo,
          });
        } else if (query === "mountain") {
          this.setState({
            mounatin: response.data.photos.photo,
          });
        } else {
        this.setState({
            photos: response.data.photos.photo,
          });
        }
      })

      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  // Render and return the information to be displayed.
  //Use Routes to direct and redirect users to appropriate pages
  render() {
    return (
      <BrowserRouter>
        <SearchForm onSearch={this.performSearch} />
        <Nav />
        <div className="photo-container">
          <Switch>
            <Route
            exact
              path="/"
              render={() => <PhotoContainer data={this.state.photos} />}
            />
            <Route
              path="/dog"
              render={() => <PhotoContainer data={this.state.dog} />}
            />
            <Route
              path="/ocean"
              render={() => <PhotoContainer data={this.state.ocean} />}
            />
            <Route
              path="/mountain"
              render={() => <PhotoContainer data={this.state.mountain} />}
            />
            <Route exact path="/search/:query" 
            render={ ()=> <PhotoContainer data={this.state.photos}/>}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}