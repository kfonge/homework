const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { logs } = this.props

        return (
            <DefaultLayout>
            <div>
                    <h1>Logs Index Page</h1>
                    <ul id="logs-index">
                
                        {logs.map((log) => {
                            return (
                                <li key={log._id}>
                                    <a href={`/logs/${log._id}`}>{log.title}</a>
                                    <br></br>
                                    {log.entry}
                                </li>
                            )
                        })}
                    </ul>
                    

                    <nav>
                        <a href="/logs/new">Create a new log</a>
                    </nav>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;