import React from "react";
import Aux from "../../Hoc/Aux";
import classes from "./Layout.module.css";

const layout = props => (
  <Aux>
    <div>TooldBar SideDrawer backDrop</div>

    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
