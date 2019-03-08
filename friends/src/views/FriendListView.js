import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import ProtectedFriendsList from "../components/ProtectedFriendsList";

class FriendListView extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="FriendsList_wrapper">
        <ProtectedFriendsList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
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
