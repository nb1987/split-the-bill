import "./index.css";

import Button from "./Button";

export default function Friend({
  friend,
  selectedFriend,
  toggleSelectedFriend,
}) {
  const isSelected = selectedFriend?.id === friend.id; // important

  return (
    <li className={isSelected && "selected"}>
      <img src={friend.image} alt="name" />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} &{Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>{friend.name} and you are even.</p>}

      <Button onClick={() => toggleSelectedFriend(friend)}>
        {isSelected ? "Selected" : "Select"}
      </Button>
    </li>
  );
}
