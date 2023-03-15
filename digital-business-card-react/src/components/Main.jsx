import resume from '../assets/Andrew_Storrow_Resume.pdf';

function Main() {
    return (
        <main>
            <h1 className="name">Andrew Storrow</h1>
            <h3 className="title">Web Developer</h3>
            <a href="https://github.com/andrewstorrow" className="website-link" target="_blank">github.com/andrewstorrow</a>
            <div className="buttons">
                <a className="btn white" href={resume} target="_blank">
                    <i className="fa-solid fa-file"></i>
                    Resume
                </a>
                <a className="btn blue" href="https://www.linkedin.com/in/andrew-storrow-84810133/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                    LinkedIn
                </a>
            </div>
            <h2 className="header">About</h2>
            <p>Hi, I'm Andrew and I'm a web developer driven by user experience. My career includes developing projects
                for Norwegian Cruise Lines and the Texas Department of Public Safety. Always learning, I am informed by
                my previous work in the fields of GPS mapping and audio engineering. I am committed to learning and
                growing as a web developer and am currently looking for new opportunities.</p>
            <h2 className="header">Interests</h2>
            <p>Music nerd. Guitar player. Metalhead. Outdoor enthusiast. Backyard explorer. Road trip lover. Podcast
                devourer. Spiritual seeker. Animal friend.</p>
        </main>
    )
}

export default Main