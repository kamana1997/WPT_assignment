import { NameContext } from "./NameContext";

export default function Third(){

    // Using Consumer to access data from NameContext
    return(
        <NameContext.Consumer>
            {value => <div>
                        This is Third Component
                        <br />
                        <h4>Good Morning {value}</h4>
                      </div>
            }
        </NameContext.Consumer>
    );
}