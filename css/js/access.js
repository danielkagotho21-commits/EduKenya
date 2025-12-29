async function payAndUnlock(amount) {
    const phone = prompt("Enter your phone number (2547XXXXXXXX)");
    if(!phone) return alert("Phone number required");

    const response = await fetch('http://localhost:3000/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, amount })
    });

    const data = await response.json();
    console.log(data);
    alert("Payment initiated. Check your phone to complete the transaction!");
    // Temporarily unlock content for simulation
    localStorage.setItem('access_end', new Date().getTime() + 2*60*60*1000); // 2 hours default
    document.getElementById("content").style.display = "block";
}

function checkAccess() {
    let endTime = localStorage.getItem('access_end');
    return endTime && new Date().getTime() <= endTime;
}
