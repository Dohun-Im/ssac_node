import footer from '../css/footer.module.css';

function TodoFooter() {
    return (
        <footer className={footer.footer}>
            <div className={footer.section}>
                <div>TODO App</div>
                <div>&copy; Copyright All rights reserved.</div>
            </div>
        </footer>
    );
}

export default TodoFooter;
