import React, { useState } from "react";
import "./Header.css";
import Card from "./Card";
import Button from "./Button";
const Header = ({title = "Default Title",
  news = "Default News",}) => {

  const name = "Header page";
  const description = "New Description here";
  const mapping = [
    "aa",
    "bb",
    "cc",
    "dd",
    "ee",
    "ff",
    "gg",
    "hh",
    "ii",
    "jj",
    "kk",
    "ll",
    "mm",
    "nn",
    "oo",
    "pp",
    "qq",
    "rr",
    "ss",
    "tt",
  ];
  const friends = ["aman", "rohan", "mohan", "sohan", "tony"];
  const vegetables = ["carrot", "broccoli", "spinach", "potato"];
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  const items = [
    { id: 1, name: "Pen", inStock: true },
    { id: 2, name: "Book", inStock: false },
    { id: 3, name: "Notebook", inStock: true },
  ];
const [isLogin, setisLogin] = useState(false);
  return (
    <>
    <h2>{isLogin ? "Welcome back!" : "Please log in."}</h2>
    <button onClick={() => setisLogin(!isLogin)}>Click</button>
    <Button text="Click Me" />
    <Button text="submit" />
     {isLogin && <div>
      <h1 className="header">Header page : - {title} {news}</h1>
      <h3> Name : {name}</h3>

      <p>New Description here</p> 
      <p> Description : {description}</p>
      {mapping.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      {friends.map((friend, idx) => (
        <p key={idx}>Friend: {friend}</p>
      ))}
      {vegetables.map((vegi, i) => (
        <h3 key={i}> Vegetable: {vegi}</h3>
      ))}
      <div>
        {products.map((product) => (
          <li key={product.id}> name={product.name} price={product.price}</li>
        ))}
      </div>
      {items.map((item) => (
        item.inStock && <li key={item.id}>item name : {item.name}          </li>
      ))}
    
      </div>}
      <Card title="Card Title" description="This is a card description." />
      <Card title="Another Card" description="Another card description here." />
    </>
    
  );
  
}
  Header.defaultProps = {
  title: "Default Title",
  news: "Default News",
};
export default Header;

