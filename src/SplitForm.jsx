import Button from "./Button";
import { useState } from "react";

export default function SplitForm({ selectedFriend, handleSplitedBill }) {
  const [bill, setBill] = useState("");
  const [yourBill, setYourBill] = useState("");
  const [whoPays, setWhoPays] = useState("you");
  const payedByFriend = bill && yourBill ? bill - yourBill : 0; // bill doesn't exist at first.

  const handleYourBill = (e) => {
    const newBillValue = Number(e.target.value);
    if ((!isNaN && newBillValue <= bill) || newBillValue >= 0)
      setYourBill(newBillValue);
  }; // Prevent invalid inputs & ensure yourBill doesn't exceed bill

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !yourBill || bill < 0 || yourBill < 0 || isNaN(bill)) return;

    handleSplitedBill(whoPays === "you" ? payedByFriend : -yourBill);
  }; // if I pay, friend owes me, if friend pays, I need to pay back.
  // Determine who pays & calculate the final balance.

  const handleReset = (e) => {
    e.preventDefault();
    setBill("");
    setYourBill("");
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a Bill {selectedFriend && `with ${selectedFriend.name}`}</h2>

      <label>The Bill</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your Expense</label>
      <input type="text" value={yourBill} onChange={handleYourBill} />

      <label>
        {selectedFriend
          ? `${selectedFriend.name}'s Expense`
          : "Friend's Expense"}
      </label>
      <input type="text" value={payedByFriend} disabled />

      <label>Who is Paying the Bill?</label>
      <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
        <option value="you">You</option>
        {selectedFriend && (
          <option value="friend">{selectedFriend.name}</option>
        )}
      </select>

      <Button>Split the Bill</Button>
      <Button onClick={handleReset}>reset</Button>
    </form>
  );
}
