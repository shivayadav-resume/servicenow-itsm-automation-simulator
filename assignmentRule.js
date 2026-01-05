function assignGroup(category) {
    if (category === "Network") {
        return "Network Support";
    }
    if (category === "Application") {
        return "Application Support";
    }
    return "Service Desk";
}

const incident = {
    number: "INC0010001",
    category: "Application"
};

incident.assignment_group = assignGroup(incident.category);

console.log(incident);
