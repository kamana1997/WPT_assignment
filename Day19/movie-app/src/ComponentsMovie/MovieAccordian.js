import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import Accordian from "./Accordian";

export default function MovieAccordian() {
    var movies = useContext(MovieContext);
    return (
        <div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                {movies.map((data) => {
                    return <Accordian movie={data} />
                })}
            </div>
        </div>
    );
} 