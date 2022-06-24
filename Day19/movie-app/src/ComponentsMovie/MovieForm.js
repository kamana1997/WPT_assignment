export default function MovieForm(props){
    var movieEntry = (e)=>{
        e.preventDefault();
        var arr = [];
        for(var i=0;i<4;i++){
            if(e.target.actor[i].checked){
                arr.push(e.target.actor[i].value.toString());
            }
        }
        var movie = {
            id : e.target.id.value,
            name : e.target.name.value,
            date : e.target.date.value,
            actors : arr
        }
        props.movieArr(movie);
    }
    return(
        <div>
            <form onSubmit={movieEntry}>
                <div className="mb-3">
                    <input type="text" name="id" className="form-control" placeholder="Enter Movie Id" />
                </div>
                <div className="mb-3">
                    <input type="text" name="name" className="form-control" placeholder="Enter Movie Name" />
                </div>
                <div className="mb-3">
                    <input type="date" name="date" className="form-control" placeholder="Enter Release Date" />
                </div>
                <div className="mb-3">
                    <input type="checkbox" name="actor" className="form-check-input" value="joy"/> Joy
                    <br />
                    
                    <input type="checkbox" name="actor" className="form-check-input" value="kamana"/> Kamana
                    <br />
                    
                    <input type="checkbox" name="actor" className="form-check-input" value="udit"/> Udit
                    <br />

                    <input type="checkbox" name="actor" className="form-check-input" value="hardik"/> Hardik
                </div>
                <div className="mb-3" style={{textAlign:"center"}}>
                    <button className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    );
}