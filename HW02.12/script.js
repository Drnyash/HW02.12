let player = {
    firstName: "Рахим",
    lastName: "Бекенов",
    age: 25,
    goals: 10,
    teams: ["Астана", "Қайрат", "Шахтер"],

    increaseGoals: function() {
        this.goals += 2;
    },
    printFullName: function() {
        console.log(this.firstName + this.lastName);
    },
    printCurrentTeam: function() {
        console.log("Қазіргі клубы: " + this.teams[this.teams.length - 1]);
    }
};

player.increaseGoals();
player.printFullName();
player.printCurrentTeam();
