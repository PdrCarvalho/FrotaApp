
import Axios from "axios";
const api = Axios.create({
    baseURL:"http://campussegurohomolog.imd.ufrn.br:8080/frota/getbehavior/"
})
export default api ;