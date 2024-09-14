import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ addFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  const handleNameChange = (e) => {
    setFriendName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!friendName) return;

    const newFriend = {
      id: crypto.randomUUID(),
      name: friendName,
      image: imageUrl,
      balance: 0,
    };

    addFriend(newFriend);
    setFriendName("");
    setImageUrl("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmitForm}>
      <label htmlFor="friendName">Friend Name</label>
      <input type="text" value={friendName} onChange={handleNameChange} />

      <label htmlFor="imageUrl">Image URL</label>
      <input type="text" value={imageUrl} onChange={handleUrlChange} />
      <Button>Add</Button>
    </form>
  );
}
