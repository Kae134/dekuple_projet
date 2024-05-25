import { redirect } from 'next/navigation'
import NavBarv2 from '../components/navbarv2/NavBarv2';
import Notifications from '../components/notifications/Notifications'
import CardGraph from '../components/cardGraph/CardGraph'

export default async function DekupleApp() {
    return (
        // redirect('/Dekuple-app/accueil')
        <div>
            <CardGraph color="#FF3125" />
            <CardGraph color="#4CAF50" />
            <CardGraph color="#2196F3" />
        </div>
    )
}