export default function Accordian(props) {
    return (
      
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Movie #{props.movie.id}: {props.movie.name}
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        <strong>Movie Id:</strong>{props.movie.id}
                        <br />
                        <strong>Movie Name:</strong>{props.movie.name}
                        <br />
                        <strong>Movie Release Date:</strong>{props.movie.date}
                        <br />
                        <strong>Movie Cast: </strong>
                        <ol>
                            {props.movie.actors.map((data) => {
                                return <li key={data.toString()}>{data.toUpperCase()}</li>
                            })}
                        </ol>

                    </div>
                </div>
            </div>

    );
}