import MovieForm from "./MovieForm"
import MovieAccordian from "./MovieAccordian"
import {useState} from "react"
import { MovieContext } from "./MovieContext";

export default function MovieHome(){

    var[movies,setMovies] = useState([]);
    var saveMovie = function (data){
        setMovies([...movies,data])
    }

    return(
        <div className="container-fluid">
            <div className="row justify-content-around align-items-center" style={{height:"98vh"}}>
                <div className="col-4 p-5 shadow">
                    <MovieForm movieArr={saveMovie}/>
                </div>
                <div className="col-8">
                    <MovieContext.Provider value={movies}>
                        <MovieAccordian />
                    </MovieContext.Provider>
                </div>
            </div>
        </div>
    );
}