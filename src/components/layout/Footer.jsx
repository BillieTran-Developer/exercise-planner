import './Footer.css'
import SocialMedia from './SocialMedia'


function Footer() {
    const date = new Date()

    return(
        <footer id='footer'>
            <SocialMedia/>
            <p id='footer-copyright'>
                Billie Tran {date.getFullYear()}&copy;
            </p>
        </footer>
    )
}

export default Footer