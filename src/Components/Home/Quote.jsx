export const Quote = () => {
    let quote = "Not all of us can do great things. But we can do small things with great love.";
    let author = "Mother Teresa"
    return (
        <div className='d-flex quote_div'>
            <div>
                <h2>"{quote}"</h2>
                <span className="author_name">- {author}</span>
            </div>            
        </div>
    )
}
