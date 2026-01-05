function calculatePriority(impact, urgency) {
    if (impact === "High" && urgency === "High") {
        return "Critical";
    }
    if (impact === "High" || urgency === "High") {
        return "High";
    }
    if (impact === "Medium" || urgency === "Medium") {
        return "Medium";
    }
    return "Low";
}

// Example incident object
const incident = {
    number: "INC0010001",
    impact: "High",
    urgency: "Medium",
    state: "New"
};

incident.priority = calculatePriority(incident.impact, incident.urgency);
incident.state = "In Progress";

console.log(incident);
