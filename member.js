function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["js", "html", "css"],
        salary: 2000
    };
    var sum = 0;
    for (var i = 0; i < member.skills.length; i++) {
        sum += member.skills[i].length;
    }
    return sum;
}