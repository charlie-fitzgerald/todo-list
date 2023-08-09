import { ToDoFactory } from "./todoFactoryModule";
import { mainPageLoad } from "./mainPageModule";
import './style.css';

const working = () => console.log("Connected via webpack");

mainPageLoad();
working();