import './About.css'
import background from '../components/layout/assets/about-bg.jpg'

function About() {
    return(
        <div id='about-container'>
            <img src={background} alt="Think one with fitness" />
            <div id='about-info'>
                 <h1>Think Smart &amp; Work Hard</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea minus, ab voluptates tempore alias, laudantium dicta, nesciunt non accusantium et magnam autem ducimus. Fugit sit magnam eligendi dignissimos. Perspiciatis?
                 Pariatur distinctio, debitis recusandae quaerat facilis sequi ipsa nisi, voluptates laboriosam dolor quia enim quidem veritatis officia neque? Assumenda consequatur suscipit nihil quisquam nesciunt corrupti ratione eius eveniet voluptate temporibus!
                 Voluptates sequi expedita at asperiores sit nam, nostrum modi amet culpa dolorum nihil non quia optio sed aliquam cum molestias est ipsa error explicabo fugit quod harum repellat? Odio, eius.</p>
            </div>
        </div>
    )
}

export default About