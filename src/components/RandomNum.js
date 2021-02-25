function RandomNum({min, max}) {
    return <div>{min + Math.random().toFixed(0) * max}</div>;
}

export default RandomNum;