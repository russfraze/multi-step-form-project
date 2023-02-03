function Button(props) {
    return (
        <button
            type={props.type}
            className={props.styles}
            onClick={props.onClick}
        >
          {props.children}
        </button>
    )
}

export default Button
