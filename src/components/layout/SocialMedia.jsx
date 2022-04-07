import './SocialMedia.css'
import facebook from './assets/social-media/facebook.png'
import instagram from './assets/social-media/instagram.png'
import tiktok from './assets/social-media/tiktok.png'
import twitter from './assets/social-media/twitter.png'
import youtube from './assets/social-media/youtube.png'

// socialMedia contains an array of social media objects that contains name and link
const socialMedia = [
    {icon: facebook,
    link: 'https://www.facebook.com'},
    {icon: instagram,
    link: 'https://www.instagram.com'},
    {icon: tiktok,
    link:'https://www.tiktok.com'},
    {icon: twitter,
    link:'https://www.twitter.com'},
    {icon: youtube,
    link:'https://www.youtube.com'},
]

// Social Media will iterate through socialMedia array and create a list of social media
function SocialMedia() {
    return(
        <>
            <ul id='social-media-icons'>
                {
                    // Map through socialMedia Array
                    socialMedia.map((social, i) => {

                        // Deconstruct social object
                        const {icon, link} = social
                        
                        // Return social media icon links
                        return(
                            <li key={i} className='icons'>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <img src={icon} alt={link} />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default SocialMedia