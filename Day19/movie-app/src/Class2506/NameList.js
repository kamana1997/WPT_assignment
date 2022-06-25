import React from "react"

class NameList extends React.Component{
    constructor(){
        super();
        this.state = {
            name : []
        }
        this.save = this.save.bind(this);
    }

    save(event){
        event.preventDefault();
        var n = event.target.name.value;
        this.setState({name:[...this.state.name,n]});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.save}>
                    <input type="text" name="name" placeholder="Name"/>
                    <button>Save</button>
                </form>
                <br />

                <ol>
                    {
                        this.state.name.map((data) => {
                            return <li key={data.toString()}>{data}</li>
                        })
                    }
                </ol>

            </div>
        )
    }
}

export default NameList;