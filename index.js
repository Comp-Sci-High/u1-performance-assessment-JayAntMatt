// 1st Floor
let gymatoriumLock = false;

// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 2nd Floor
// Do not modify these arrays directly
let weworkItems = ["loaner laptop", "whiteboard", "conference room", "couch", "printer", "shared table", "Wi-Fi router", "plants", "office chair", "power outlets"];
let computerLabItems = ["desktop computers", "monitors", "broken laptop", "mice", "Wi-Fi router", "printer", "power strips", "headphones", "USB drives", "chairs", "desks"];
let mprItems = ["mirrors", "speakers", "chairs", "portable stereo", "projector", "chairs", "posters"];
let ll = weworkItems[0];
weworkItems.shift(0);
computerLabItems.push(ll);
computerLabItems[2] = "fixed laptop"
console.log(mprItems.length)
console.log(weworkItems)
console.log(computerLabItems)
// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 3rd Floor
// Do not modify these objects directly
let scoreValues = {
    "S": "Self-awareness",
    "C": "Challenge",
    "O": "Organization",
    "R": "Resilience"
}

let afterSchoolClubs = {
    athletic: [
        {
            club: "Soccer Club",
            location: "St. Mary's Park"
        },
        {
            club: "Flag Football",
            location: "St. Mary's Park"
        },
        {
            club: "Volleyball",
            location: "Gymnatorium"
        }
    ],
    social: [
        {
            club: "Gaming Club",
            location: 305
        },
        {
            club: "Art Club",
            location: 417
        },
        {
            club: "Gardening Club",
            location: 311
        }     
    ]
}
scoreValues.C = "Consistency"
scoreValues.O = "Ownership"
scoreValues.E = "Excellence"
console.log(scoreValues)
afterSchoolClubs.athletic[0].club = "British Football Club"
afterSchoolClubs.social[2].club = "Balcony"
console.log(afterSchoolClubs)

// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 4th Floor
// Uncomment the code below to begin this task

// let takeCareOfPet = function(snacks, pets) => {
//     if (Snacks[2] === "hotdogs" && pets > 10) {
//         return "Raccoon has been appeased"
//     } else {
//         return "The raccoon bit you and you died of rabies."
    
// }


// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 5th Floor





// Commit and show us to unlock the next floor's instructions
