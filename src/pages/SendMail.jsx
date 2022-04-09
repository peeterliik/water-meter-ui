import Header from '../components/header/Header';

const pageName = 'Send Readings';
const address = 'Observatooriumi 11-6, Tõravere' //TO-DO - take from login data

const SendMail = () => {
    return (<div>
    <Header pageName={pageName} address={address}></Header>
    </div>)
};

export default SendMail;