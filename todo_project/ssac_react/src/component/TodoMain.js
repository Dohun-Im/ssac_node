import main from '../css/main.module.css';

function TodoMain({ children }) {
    return <main className={main.main}>{children}</main>;
}

export default TodoMain;
