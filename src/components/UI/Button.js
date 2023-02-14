function Button(props) {
    return (
        <button
            className={props.className}
            type={props.type}
            className={props.styles}
            onClick={props.onClick}
        >
          {props.children}
        </button>
    )
}

export default Button
