function scuberGreetingForFeet(rideDistance) {
    // Write your code here!

    if (rideDistance <= 400) {
        return "This one is on me!";
    } else if (rideDistance <= 2499) {
        console.log(rideDistance);
        return "I will gladly take your thirty bucks.";
    } else if (rideDistance >= 2500) {
        return "No can do.";
    }

}


function ternaryCheckCity(city) {
    // Write your code here!
    return city === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(amountLeft) {
    // Write your code here!
    switch (amountLeft) {
        case "generous":
            return "Thank you so much.";
        case "not as generous":
            return "Thank you.";
        default:
            return "Bye.";

    }

}