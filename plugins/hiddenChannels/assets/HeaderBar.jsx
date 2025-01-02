import classes from "./style.scss";

export default function HeaderBar(props) {
   return <div class={classes.headerBar}>{props.children}</div>;
}
