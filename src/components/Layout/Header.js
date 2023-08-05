import React, { Fragment } from "react";
import mealsImage from "../../assets/images/meals.jpg";
import classes from './Header.module.css';
import CartButton from "./CartButton";


const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <CartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A Table with a lots of food"/>
      </div>
    </Fragment>
  );
};

export default Header;
