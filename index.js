import axios from 'axios'


const device = navigator.userAgentData.platform
const referrer = document.referrer
const langauges = navigator.languages
const vendor = navigator.vendor
const location = Intl.DateTimeFormat().resolvedOptions().timeZone + " " + Intl.DateTimeFormat().resolvedOptions().locale
const usertime = new Date().toLocaleTimeString()

// console.log(window);

axios.defaults.baseURL = import.meta.env.VITE_BASEURL

// console.log(axios.defaults.baseURL);

// console.log(navigator);


let load, unload, diff, hr, min, sec;
let userstay, userenter, userleave

window.addEventListener("load", async () => {
    userenter = new Date().toString()  //no change
    load = new Date()
    // console.log(userenter);
})

window.addEventListener("beforeunload", async (e) => {
    e.preventDefault()
    userleave = new Date().toString()  //no change

    unload = new Date()

    diff = unload - load

    hr = Math.floor(diff / (1000 * 60 * 60)) % 24
    min = Math.floor(diff / (1000 * 60)) % 60
    sec = Math.floor(diff / 1000) % 60

    userstay = (hr + ":" + min + ':' + sec)
    // console.log(userstay);


    try {
        const user = await axios.post("/tshirt", {
            userstay, userenter, userleave,
            device, referrer, langauges, vendor, location, usertime
        })
        // console.log(user);
    } catch (error) {
        console.log(error.message);
    }


})

// console.log(navigator.userAgentData);
// if (navigator.userAgentData.mobile){
//     isMobile = "mobile"
// }
// else{
//     console.log("lap");
// }



// navigator:
// useragentdata
// useragent
// mobile or web
// vendor
// languages

// refreer
// window.location.pathname