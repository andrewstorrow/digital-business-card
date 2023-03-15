import profileImage from '../assets/myface.png'

function Header() {
    return (
        <header>
            <img src={profileImage} alt="Andrew Storrow Portrait" className="profile-img" />
        </header>
    )
}

export default Header