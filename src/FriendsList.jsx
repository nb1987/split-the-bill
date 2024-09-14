import "./index.css";
import Friend from "./Friend";

export default function FriendsList({ friends, children }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} {...children.props} />
      ))}
    </ul>
  );
}
