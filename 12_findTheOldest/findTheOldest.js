const findTheOldest = function(people) {
    let oldest = ""
    let years = 0;
    let current = 0;
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < people.length; i++) {
        if (!people[i].hasOwnProperty('yearOfDeath')) {
            current = currentYear- people[i].yearOfBirth;
        } else {
            current = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        if (current > years) {
            years = current;
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
