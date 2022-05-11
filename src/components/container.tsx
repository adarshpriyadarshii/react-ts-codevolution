type ContaionerProps={
    styles: React.CSSProperties
}
export const Container=(props:ContaionerProps)=>{
    return(
        <div style={props.styles}>
            Text goes here
        </div>
    )
}