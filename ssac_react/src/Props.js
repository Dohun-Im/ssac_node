// props 사용
// props : properties
// component와 component 사이에서 값을 전달할때 사용하는 객체

function Props(props) {
    return(
        <article className="article">
            {props.number}
        </article>
    );
}

export default Props;