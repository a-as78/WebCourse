import '../App.css'
function Header (props) {
    return (<div class="header">
        <div class="welcome-text">{props.welcomeText}</div>
    </div>)
}
export default Header;