import img1 from '../img/portImages/codequiz.png';
import img2 from '../img/portImages/maya-4.jpg';
import img3 from '../img/portImages/maya-3.jpg';
import img4 from '../img/portImages/Horiseon-Webpage.png';
import img5 from '../img/portImages/employee.png';
import img6 from '../img/portImages/sweat-mate.png';
import img7 from '../img/portImages/weatherdashboard.png';
import img8 from '../img/portImages/workday.png';
import img9 from '../img/portImages/tech.png';

const portfolios = [
    {
        id: 1,
        category: 'Html',
        image: img4,
        link1: 'https://github.com/MichaelPappas2662/Horiseon-Homepage',
        link2: 'https://michaelpappas2662.github.io/Horiseon-Homepage/',
        title: "Horiseon's Webpage",
        text: 'A webpage created with HTML and CSS'
    },
    {
        id: 2,
        category: 'Javascript',
        image: img1,
        link1: 'https://github.com/MichaelPappas2662/CodeQuiz',
        link2: 'https://michaelpappas2662.github.io/CodeQuiz/',
        title: 'Codequiz app',
        text: 'This is a how to app with vanilla Javascript that prompts the user to a Code quiz'
    },
    {
        id: 3,
        category: 'Javascript',
        image: img3,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How To Animate In Maya',
        text: 'Number one Animation Application'
    },
    {
        id: 4,
        category: 'Animation',
        image: img2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How To Use Blender',
        text: 'Free Animation Software'
    },
    {
        id: 5,
        category: 'Node.js',
        image: img5,
        link1: 'https://github.com/MichaelPappas2662/Employee-Tracker',
        link2: 'https://github.com/MichaelPappas2662/Employee-Tracker',
        title: 'Employee Tracker',
        text: 'A Node app that help you track , create and update your employees'
    },
    {
        id: 6,
        category: 'MySQL',
        image: img6,
        link1: 'https://github.com/MichaelPappas2662/Project2-Sweat-Mate',
        link2: 'https://sweat-mate.herokuapp.com/login',
        title: 'Sweat-Mate app',
        text: 'A full stack app that use HBS,express and MySQL to let the user create and update his workout routine and find some similar interest blogs from other users '
    },
    {
        id: 7,
        category: 'Javascript',
        image: img7,
        link1: 'https://github.com/MichaelPappas2662/Weather-Dashboard',
        link2: 'https://michaelpappas2662.github.io/Weather-Dashboard/',
        title: 'Weather Dashboard',
        text: 'An app that let you check your current location weather , using API calls from openweatherAPI and google GEOlocation '
    },
    {
        id: 8,
        category: 'Javascript',
        image: img8,
        link1: 'https://github.com/MichaelPappas2662/Work-Day-Scheduler',
        link2: 'https://michaelpappas2662.github.io/Work-Day-Scheduler/',
        title: 'WorkDay Scheduler',
        text: 'An app that let you create a TO-Do list in your web browser'
    },
    {
    id: 9,
    category: 'Javascript',
    image: img9,
    link1: 'https://whttps://github.com/MichaelPappas2662/Tech-Blogww.google.com',
    link2: 'https://tech-blog23.herokuapp.com/',
    title: 'Tech Blog',
    text: 'A full stack app that let you create a blogs,deployed in Heroku. Created with RESTfull APi, node, MySQl,express. '
    }
]

export default portfolios;