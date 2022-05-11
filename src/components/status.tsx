type StatusPros={
    status: 'loading' | 'success' |'error'
}
export const Status=(props:StatusPros)=>{
    let msg;
    if(props.status==='loading'){
        msg='Loading...'
    }else if(props.status==='success'){
        msg='Data fetched successfully'
    }else if(props.status==='error'){
        msg='error fetching data'
    }
    return(
        <div>
            <h2>Status - {msg}</h2>
        </div>
    )
}