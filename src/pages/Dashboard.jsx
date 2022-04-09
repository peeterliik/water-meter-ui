import CardItem from '../components/cards/CardItem.jsx'
import Header from '../components/header/Header';
import './Dashboard.scss'

const pageName = 'Dashboard';
const address = 'Observatooriumi 11-6, Tõravere' //TO-DO - take from login data

const Dashboard = () => {
    return (<div>
    <Header pageName={pageName} address={address}></Header>
    <div className="cards">
    <CardItem></CardItem>
    <CardItem></CardItem>
    <CardItem></CardItem>
    <CardItem></CardItem>
    <CardItem></CardItem>
    <CardItem></CardItem>
    <CardItem></CardItem>
    </div>
    </div>)
};

export default Dashboard;