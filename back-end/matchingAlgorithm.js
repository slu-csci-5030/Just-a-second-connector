// Import necessary modules
const mongoose = require('mongoose');

// Define schema and model for employers and job seekers
const EmployerForm = mongoose.model('EmployerForm');
const Questionnaire = mongoose.model('Questionnaire');

// Function to calculate similarity score between employer and job seeker
function calculateSimilarity(employer, jobSeeker) {
  // Define weights for attributes (customize based on importance)
  const weights = {
    skills: 3,
    location: 2,
    // add more as the above two are just example and for our project we might need to deal with something else
  };

  // Calculate similarity score based on attributes and weights
  let similarityScore = 0;
  for (const attribute in weights) {
    if (employer[attribute] && jobSeeker[attribute]) {
      similarityScore += weights[attribute] * similarity(employer[attribute], jobSeeker[attribute]);
    }
  }
  return similarityScore;
}

// Function to calculate similarity
function similarity(arr1, arr2) {
  const intersection = arr1.filter(value => arr2.includes(value));
  return intersection.length / Math.sqrt(arr1.length * arr2.length);
}

// Function to find best matches for each employer
async function findMatches() {
  const employers = await EmployerForm.find();
  const jobSeekers = await Questionnaire.find();

  const matches = {};
  employers.forEach(employer => {
    const bestMatches = jobSeekers.map(jobSeeker => ({
      jobSeeker,
      score: calculateSimilarity(employer, jobSeeker),
    })).sort((a, b) => b.score - a.score);
    matches[employer._id] = bestMatches;
  });
  return matches;
}

// Call the function to find matches and log the results
findMatches()
  .then(matches => console.log(matches))
  .catch(error => console.error('Error finding matches:', error));
