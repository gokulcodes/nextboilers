import Axios from "axios"

const Home = (props) => {
    return (
    <div>
        {props.hello}
    </div>
    )
}

Home.getInitialProps = async () => {
    const res = await Axios.get('http://localhost:3000/api/home')
    return res.data
}
export default Home