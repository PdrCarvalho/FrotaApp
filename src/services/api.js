
import Axios from "axios";
const api = Axios.create({
    // baseURL:"http://campussegurohomolog.imd.ufrn.br:8080/frota/getbehavior/"
    baseURL:"localhost:8080/getbehavior/"
})
export default api ;