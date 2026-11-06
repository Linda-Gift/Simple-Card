import Counter from "./StateManagement.jsx"

function Card(props){
    return(
        <div className="cardcontainer">
 
            {/* <div className="cardtitle">
                <h1>
                  {props.titleText}
                </h1>
            </div>

            <div className="carddescription">
                <p>
                    {props.descriptionText}
                </p>
            </div>

            <div className="button">
                <button>{props.button}</button>
            </div> */}

            <Counter />
        </div>
        
    )
}

export default Card