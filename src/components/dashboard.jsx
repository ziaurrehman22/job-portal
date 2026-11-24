import MainArea from '../Dashboard/mainArea';
import Header from '../Dashboard/header';
import Sidebar from '../Dashboard/sidebar'

const Dashboard = () => {
    return (
        <div id='mainContainer'>
            <Sidebar />
            <Header />
            <MainArea />
        </div>
    );
};

export default Dashboard;