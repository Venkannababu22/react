import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy location",
        bio: "Dummy bio",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Venkannababu22");
    const user = await data.json();

    this.setState({
      userInfo: user,
    });

    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <img src={avatar_url} />
        <h3>Loaction: {location}</h3>
        <h3>Bio: {bio}</h3>
        <div>Logged In User
          <UserContext.Consumer>
            {({loggedInUser}) =><h1>LoggedInUser: {loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>

        <h4>Contact: bumchik@gmail.con</h4>
      </div>
    );
  }
}

export default UserClass;



/**
 * -----Mounting cycle:------
 * 
 * 1. constructor (dummy)
 * 2. Render (DOM will be updated with the dummy data as in the above state variable userInfo)
 * 3. ComponentDidMount 
 *    - fetch data from API
 *  
 * ------Updating cycle:------
 * 1. setState will be update with the fetched data
 * 2. Render (with the updated data from the API) 
 * 3. ComponentDidUpdate (if any state or props change)

 */
