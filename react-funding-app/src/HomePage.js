import GuestHome from './GuestHome';
import AuthHome from './AuthHome';
import {useCookies} from 'react-cookie';

function HomePage() {
    const [cookies, setCookie] = useCookies(['userCookie']);
    if(cookies.json !== undefined){
        return(
            <AuthHome/>
        )
    } else {
        return(
            <GuestHome/>
        )
    }
}

export default HomePage;