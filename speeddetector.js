function calculateDemeritPoints() {
    const speed = prompt("Car speed:");
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("OK");
        window.alert("OK");
        return;
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

        if (demeritPoints <= 12) {
            window.alert(`You have ${demeritPoints} demerit point(s)`);
        } else {
            window.alert("License suspended");
        }
    }
}
