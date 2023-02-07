import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonStrings } from '../Constant';
import { ApiKeys } from '../Config/ApiKeys';
const axios = require('axios');
const url = ApiKeys.BaseUrl

async function AuthAPI(apiName, method, params) {
    let options = method == 'GET' ? {
        method: method,
        url: `${url}${apiName}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        },
    } :
        {
            method: method,
            url: `${url}${apiName}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            data: params
        }
    let response = await axios(options);
    const data = [await response.data, response.status]
    return data
}

async function AfterAuth(apiName, method, params) {

    const Access_Token = await AsyncStorage.getItem(CommonStrings.ASYNC_AUTH_TOKEN)
    let options = method == 'GET' ? {
        method: method,
        url: `${url}${apiName}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Access_Token}`,
            'Cache-Control': 'no-cache'
        },
    } :
        method == 'DELETE' ? {
            method: method,
            url: `${url}${apiName}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Access_Token}`,
                'Cache-Control': 'no-cache'
            },
        } :
            {
                method: method,
                url: `${url}${apiName}`,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Access_Token}`,
                    'Cache-Control': 'no-cache'
                },
                data: params
            };
    let response = await axios(options);
    const data = [await response.data, response.status]
    return data;
}

module.exports = {
    async Login(params) {
        const requestToken = AuthAPI(params.Path, 'POST', params.Data)
        return requestToken;
    },
    
}
