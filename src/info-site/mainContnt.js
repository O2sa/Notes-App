

export default function MainContent(props){
    return(
        <div className={`main ${props.mode?'dark':""}`}>
            <h2>Fun Facts about React</h2>
            <ul>
                <li>Was released in 2013</li>
                <li>Was released in 2013</li>
                <li>Was released in 2013</li>
                <li>Was released in 2013</li>
                <li>Was released in 2013</li>
                <li>Was released in 2013</li>
            </ul>
        </div>
    )
}