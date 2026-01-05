function checkSLABreach(openedHours) {
    const SLA_LIMIT = 4; // hours
    return openedHours > SLA_LIMIT ? "Breached" : "Within SLA";
}

const incident = {
    number: "INC0010001",
    openedHours: 6
};

incident.sla_status = checkSLABreach(incident.openedHours);

console.log(incident);
