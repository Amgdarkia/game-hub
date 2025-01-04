import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '767e254219204c7180522b335f0aa32d'
    }
})