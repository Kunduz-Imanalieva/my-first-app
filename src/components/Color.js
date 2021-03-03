const { useState } = require("react")

function Color({ value }){
    const [list, setList] = useState(value ?? "");
    return <div className="example-5">
            <p>{list}</p>
            <input type="color" 
            onInput={(event) => setList(event.target.value)}/>
    </div>
}
export default Color;