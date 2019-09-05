import axios from "axios";
import qs from "qs";

const apiBaseUrl = "https://localhost:44379/api";

export function getRequest(path, params, cb) {
    axios.get(apiBaseUrl + path, {
            params,
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        })
        .then(function(response) {
            cb(response.data);
        })
        .catch(err => console.log(err));
}