function Water(props) {
    let state = "water";
    if (props.frozen){
        state = "ice"
    }
    return <div> {state} </div>;
}

export default Water;