import axios from "axios";

const config = {
    baseUrl: "https://api.hnpwa.com/v0"
}
function fetchNewsList() {
    return axios.get(`${config.baseUrl}/news/1.json`);
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}/ask/1.json`);
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}/jobs/1.json`);
}
async function fetchList(pageName) {
    try {
         return await axios.get(`${config.baseUrl}/${pageName}/1.json`);
    } catch (error) {
        console.error(error)
    }
}
async function fetchUserInfo(userName) {
    try {
        return await axios.get(`${config.baseUrl}/user/${userName}.json`);
    } catch (error) {
        console.error(error)
    }
}
async function fetchItemInfo(itemId) {
    try {
        return await axios.get(`${config.baseUrl}/item/${itemId}.json?print?=pretty`);

    } catch (error) {
        console.error(error)
    }
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}