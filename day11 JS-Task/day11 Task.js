// 1.Voting Eligibility
// **Scenario:** Determine if a person is eligible to vote.

// **Inputs:**
// - 'age'
// - 'citizenship'(boolean)

// **Outputs:**
// -'canVote'

// Answer:
var age = 17;
var citizen = true;

if (age >= 18 && citizen) {
  console.log("At age of", age, "He/She can Vote");
} else {
  console.log("At age of", age, "He/She cannot Vote");
}
// O/P: "At age of 17 He/She cannot Vote"




// 2.Admission to a Club
// **Scenario:**Determine if person can enter a club

// **Inputs:**
// -'age'
// -'hasInvitation' (Boolean)

// **Outputs:**
// -'canEnterClub'


// Answer:
var age = 100;
var hasInvitation = false;

if (age >= 21 || hasInvitation) {
  console.log("canEnterClub");
} else {
  console.log("canNotEnterClub");
}
// O/P: "canEnterClub"



// 3.Discount Eligibility
// **Scenario:** Determine if a person is eligible for dicount at a store.

// **Inputs:**
// -'isMember' (Boolean)
// -'age'

// **Outputs:**
// -'isEligibleForDiscount'


// Answer:
var isMember = false;
var age = 20;

if (age >= 65 || isMember) {
  console.log("isEligibleForDiscount");
} else {
  console.log("isNotEligibleForDiscount");
}
// O/P: "isNotEligibleForDiscount"




// 4.Scholarship Eligibility
// **Scenario:** Determine if a student is eligible for a scholarship.

// **Inputs:**
// -'gpa'
// -'extracurricular' (Boolean)
// -'recommendation' (Boolean)

// **Outputs:**
// -'isEligibleForScholarship'


// Answer:
var gpa = 3.6;
var extracurricular = true;
var recommendation = false;

if ((gpa >= 3.5 && extracurricular) || recommendation) {
  console.log("isEligibleForScholarship");
} else {
  console.log("isNotEligibleForScholarship");
}
// O/P: "isEligibleForScholarship"
