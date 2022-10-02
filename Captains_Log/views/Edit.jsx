const React = require('react')


class Edit extends React.Component {
    render() {
        return (
            <div>
            <h1>Edit Log</h1>
                <form action="/logs" method="POST">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" /><br></br>
                    
                    <label htmlFor="entry">Entry:</label>
                    <input type="textarea" id="entry" name="entry" /><br></br>

                    <label htmlFor="name">Broken Ship?:</label>
                    <input type="checkbox" id="shipIsBroken" name="shipIsBroken" /><br></br>
                    
                    <input type="submit"  value="Submit Edits" />
                </form>
            </div>

        )
    }
}

module.exports = Edit