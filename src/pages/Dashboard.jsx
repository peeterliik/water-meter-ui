import CardItem from '../components/cards/CardItem.jsx'
import Header from '../components/header/Header';
import './Dashboard.scss'
import currentReadingIcon from '../assets/icons/current-reading-icon.svg'
import currentBalanceIcon from '../assets/icons/current-balance-icon.svg'
import waterSpentIcon from '../assets/icons/water-spent-icon.svg'
import currentComparedUpIcon from '../assets/icons/current-compared-up-icon.svg'
import currentComparedDownIcon from '../assets/icons/current-compared-down-icon.svg'
import currentComparedSameIcon from '../assets/icons/current-compared-same-icon.svg'
import React, {useEffect, useState} from 'react';

import { getLatest, getConsumptionCurrentMonth } from '../controllers/endpoints.js';

const pageName = 'Dashboard';
const address = 'Observatooriumi 11-6, Tõravere' //TO-DO - take from login data

const currentComparedIcon = currentComparedUpIcon; // TO-DO - compare with previous month

const Dashboard = () => {

    const [ loading, setLoading ] = useState(true);
    const [ latestRead, setLatestRead ] = useState([]);

    const getLatestReadings = () => {
        setLoading(true);
        getLatest().then((data)=>{
            setLoading(false);
            setLatestRead(data.value);
        }).catch((err) => {
            setLoading(false);
            console.log(err);
            return null;
        });
    };

    useEffect(() => {
        getLatestReadings();
    }, [])
    

    const currentReadingData = {
        icon: currentReadingIcon,
        value: latestRead,
        subinfo: 'sdfsd',
    }
    
    const currentBalanceData = {
        icon: currentBalanceIcon,
        value: 'sdaas',
        subinfo: 'sdfsd',
    }
    
    const waterSpentData = {
        icon: waterSpentIcon,
        value: getConsumptionCurrentMonth().value,
        subinfo: 'sdfsd',
    }
    
    const comparedPreviousData = {
        icon: currentComparedIcon,
        value: 'sdaas',
        subinfo: 'sdfsd',
    }

    return (<div>
    <Header pageName={pageName} address={address}></Header>
    <div className="cards">
    <CardItem headerName={'Current reading'} 
        icon={currentReadingData.icon} 
        value={currentReadingData.value} 
        subinfo={currentReadingData.subinfo}></CardItem>

    <CardItem headerName={'Current balance'}
        icon={currentBalanceData.icon}
        value={currentBalanceData.value}
        subinfo={currentBalanceData.subinfo} ></CardItem>

    <CardItem headerName={'Water spent this month'}
        icon={waterSpentData.icon}
        value={waterSpentData.value}
        subinfo={waterSpentData.subinfo}></CardItem>

    <CardItem headerName={'Compared to previous month'}
        icon={comparedPreviousData.icon}
        value={comparedPreviousData.value}
        subinfo={comparedPreviousData.subinfo}></CardItem>
    </div>
    </div>)
};

export default Dashboard;