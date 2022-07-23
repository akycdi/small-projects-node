function getDate() {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    return day = today.toLocaleDateString("en-US", options);

}
function getDay() {
    const today = new Date();

    const options = {
        weekday: "long"
    };
    return day = today.toLocaleDateString("en-US", options);

}
exports.getDate = getDate;
exports.getDay = getDay;