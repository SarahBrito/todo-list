import Header from "../Header";
import Form from   '../Form';
import TaskContainer from   '../TaskContainer';
import Actions from   '../Actions';

import classNames from "classnames";

import './styles.scss'
import { useTasks } from "../../context/Tasks";


const Container = () => {

    const {theme} = useTasks()
    const currentTheme = classNames('dark-theme', { 'light-theme': theme })

    return (
        <div className={`container ${currentTheme}`}>
            <div className="to-do__container">
                <Header />
                <Form />
                <TaskContainer />
                <Actions />
            </div>
            <span className="to-do__info-reorder-list">Drog and drop to reorder list</span>
            <footer className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://portfolio-sarahbrito.vercel.app/">Sara Brito</a>.
            </footer>
        </div> 
    
     );
}
 
export default Container;