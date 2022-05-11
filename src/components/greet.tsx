type GreetProps={
    name:string
    msgCount?:number
    isLoggedIn:boolean
}
export const Greet=(props:GreetProps)=>{
    const {msgCount=0}=props
    return(
        <div>
            <h2>{props.isLoggedIn
            ?`Hi ${props.name}! You have ${msgCount} messages.`
            : 'Welcome Guest'
            }
            </h2>
        </div>
    )
}