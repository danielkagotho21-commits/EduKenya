function unlockContent(duration) {
    let price;
    if(duration === '2h') price = 30;
    else if(duration === '12h') price = 50;
    else if(duration === '24h') price = 100;

    alert(`Simulated payment: KES ${price} — Content unlocked for ${duration}`);
    let endTime = new Date().getTime() + durationToMs(duration);
    localStorage.setItem('access_end', endTime);
}

function durationToMs(duration) {
    if(duration === '2h') return 2*60*60*1000;
    if(duration === '12h') return 12*60*60*1000;
    if(duration === '24h') return 24*60*60*1000;
}

function checkAccess() {
    let endTime = localStorage.getItem('access_end');
    if(!endTime || new Date().getTime() > endTime){
        alert("Your access has expired!");
        return false;
    }
    return true;
}
