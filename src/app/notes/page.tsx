import { createClient } from '@/src/utils/supabase/server';
import BarChart from '../components/charts/BarChart';
import { data } from 'autoprefixer';

export default async function Chart() {
    const supabase = createClient();
    const { data : users } = await supabase.from("users").select('*');
    const { data: Data } = await supabase.from("Data").select();

    const info = {type: "users", data : users}
    const info_2 = {type: "entreprise", data : Data}
    return (
    <div>
        {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
        
        <BarChart data={info}/>
        <BarChart data={info_2}/>
    </div>
    )
}