//STEP 1: require the React library
const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

//STEP 2: class component syntax vs. functional component syntax
//allows child class to INHERIT properites and methods fr the parent class 
class Show extends React.Component {

    //Creates a method in class
    render() {

        const log = this.props.log
        // or destructured below
        // const { name, entry, shipIsBroken, _id } = this.props.log
        //note: we are using parenthese with return in react
        //this.props allow us to access data passed in as object to res.render
        console.log(this.props.log)
    
        return (
            <DefaultLayout>
                <h1> Show Page</h1>
                <p>
                    {log.name}<br></br>
                    {log.entry} <br></br>
                    
                </p>
                <p>
                    {/* ternary statement syntax is common for React */}
                    {log.shipIsBroken ? "Ship is broken!" : "Ship is NOT broken"}
                </p>

                <button>
                    <a href={`/logs/${_id}`}>Edit</a>
                </button>

                <form action={`/logs/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form> 
            
                <nav>
                    {/* the /logs string below takes you back to index */}
                    <a href='/logs'>back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show