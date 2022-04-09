import Header from '../components/header/Header';

const pageName = 'Settings';
const address = 'Observatooriumi 11-6, Tõravere' //TO-DO - take from login data

const Settings = () => {
    return (<div>
    <Header pageName={pageName} address={address}></Header>
    </div>)
};
export default Settings;