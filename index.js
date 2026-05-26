const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sessions = [];

function menu() {
    console.log("\n--- Study Tracker ---");
    console.log("1. Add Study Session");
    console.log("2. View Sessions");
    console.log("3. Total Study Time");
    console.log("4. Exit");

    input.question("Choose option: ", function(choice) {

        if (choice == "1") {
            addSession();
        }

        else if (choice == "2") {
            viewSessions();
        }

        else if (choice == "3") {
            totalTime();
        }

        else if (choice == "4") {
            console.log("Program closed");
            input.close();
        }

        else {
            console.log("Invalid choice");
            menu();
        }
    });
}

function addSession() {

    input.question("Enter topic: ", function(topic) {

        if (topic.trim() === "") {
            console.log("Topic cannot be empty");
            return menu();
        }

        input.question("Enter minutes: ", function(minutes) {

            let time = parseInt(minutes);

            if (isNaN(time) || time <= 0) {
                console.log("Minutes must be greater than 0");
                return menu();
            }

            sessions.push({
                topic: topic,
                minutes: time
            });

            console.log("Study session added");
            menu();
        });
    });
}

function viewSessions() {

    if (sessions.length === 0) {
        console.log("No sessions added");
    }

    else {
        for (let i = 0; i < sessions.length; i++) {

            console.log(
                (i + 1) + ". " +
                sessions[i].topic +
                " - " +
                sessions[i].minutes + " mins"
            );
        }
    }

    menu();
}

function totalTime() {

    let total = 0;

    for (let i = 0; i < sessions.length; i++) {
        total += sessions[i].minutes;
    }

    console.log("Total study time: " + total + " mins");

    menu();
}

menu();