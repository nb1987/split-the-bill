import "./index.css";
import Friend from "./Friend";

export default function FriendsList({ friends, selectedFriend, toggleSelectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          toggleSelectedFriend={toggleSelectedFriend} />
      ))}
    </ul>
  );
}
