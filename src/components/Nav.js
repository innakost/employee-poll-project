export const Nav = () => {
    return (
        <div className="w3-bar w3-padding w3-pale-red">
            <a href="/" className="w3-bar-item w3-button">Home</a>
            <a href="/leaderboard" className="w3-bar-item w3-button">Leaderboard</a>
            <a href="/new" className="w3-bar-item w3-button">New</a>
            <a href="/login" className="w3-bar-item w3-button w3-right">Logout</a>
            <span href="" className="w3-bar-item w3-button w3-right">Authed Name</span>
        </div>
    )
}