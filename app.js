
const siteArr = [
    "http://www.dongtaiwang.com",
    "http://220.136.6.224", 
    "https://chinese.uhrp.org/", 
    "http://www.freetibet.org/", 
    "http://www.uyghurcongress.org/en/", 
    "http://www.freehongkong.org/", 
    "http://www.taiwan.gov.tw/index.php",
    "https://www.demosisto.hk/?lang=en", 
    "http://boxun.com/",  
    "http://minghui.org",  
    "https://tibet.net/",  
    "http://yibaochina.com/", 
    "http://theinitium.com/" 
]

const headers = new Headers({
    "Accept"       : "application/json",
    "Content-Type" : "application/json",
    "User-Agent"   : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.146 Whale/2.6.90.16 Safari/537.36"
});

const requestSite = () => {
    siteArr.forEach(async(site)=>{
        await fetch(site, {
            method : 'GET',
            headers : headers
        })
        .then(response => console.log(response))
    })
}

const init = () => {
    setInterval(
        requestSite, 5000
    )
}

init()