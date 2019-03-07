import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import { FriendsList } from "../components";

class FriendListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    if (this.props.isFetching) {
      return <h1>is fetching working</h1>;
    }
    if (this.props.error) {
      return <h2>ERROR Loading the page</h2>;
    }
    return (
      <div className="FriendsList_wrapper">
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.friendsReducer.isFetching,
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendListView);
