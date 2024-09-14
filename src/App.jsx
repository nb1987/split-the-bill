import { useState } from "react";
import Friend from "./Friend";

import "./App.css";
import FriendsList from "./FriendsList";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import SplitForm from "./SplitForm";

const initialFriends = [
  {
    id: 118836,
    name: "Emily",
    image: "https://i.pravatar.cc/48?u=118835",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriendForm = () => {
    setShowAddForm((showAddForm) => !showAddForm);
  }; // open & close the form to add a friend

  const addFriend = (data) => {
    setFriends((friends) => [...friends, data]);
    setShowAddForm((showAddForm) => !showAddForm);
  }; // add a new friend & close the adding form.

  const toggleSelectedFriend = (friend) => {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend
    );
  }; // if the same friend is selected again, deselect it.

  const handleSplitedBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends}
          selectedFriend={selectedFriend}
          toggleSelectedFriend={toggleSelectedFriend} />

        {showAddForm && <AddFriendForm addFriend={addFriend} />}

        <Button onClick={handleAddFriendForm}>
          {showAddForm ? "Close" : "Add a Friend"}
        </Button>
      </div>

      <SplitForm
        selectedFriend={selectedFriend}
        handleSplitedBill={handleSplitedBill}
      />
    </div>
  );
  // - with prop drilling //
  // return (
  //   <div className="app">
  //     <div className="sidebar">
  //       <FriendsList
  //         friends={friends}
  //         selectedFriend={selectedFriend}
  //         toggleSelectedFriend={toggleSelectedFriend}
  //       />

  //       {showAddForm && <AddFriendForm addFriend={addFriend} />}

  //       <Button onClick={handleAddFriendForm}>
  //         {showAddForm ? "Close" : "Add a Friend"}
  //       </Button>
  //     </div>

  //     <SplitForm
  //       selectedFriend={selectedFriend}
  //       handleSplitedBill={handleSplitedBill}
  //     />
  //   </div>
  // );
}

export default App;
