 class SecretSantaGenerator {
    constructor(participants) {
      this.participants = participants;
    }
  
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    generateSecretSantaPairs() {
      const shuffledParticipants = [...this.participants];
      this.shuffleArray(shuffledParticipants);
  
      const secretSantaPairs = [];
  
      for (let i = 0; i < this.participants.length; i++) {
        secretSantaPairs.push([this.participants[i], shuffledParticipants[i]]);
      }
  
      return secretSantaPairs;
    }
  }
  
  // Example usage
  const participants = ["KANCHAMIREDDY DHANUSH KUMAR REDDY",
"Pabbisetty Dinesh",
"ARAVAPALLI KEERTANA",
"Krishna Priya",
"Akhila K",
"Nithisha",
"Sneha V",
"Navyasri",
"S Swetha",
"S.Lochani",
"Sri jyothsna",
"Santhoshi Kumari",
"KILLI BEBI RANI",
"Soma Bhanu prasad",
"Nedula Pravalika Reddy",
"Surendra Kumar",
"Sainath",
"Seerapu kali",
"Anudeep",
"Vinod",
"Sravya",
"Charitha",
"Suresh Naidu",
"M Saibhanu",
"I. Padmavathi",
"Bandi prudhvi",
"V Maidhile",
"Manaswini",
"Divya",
"Pravallika.M",
"Upendra",
"PADALA BHAVANI",
"Shaik Reshma",
"Narayanasetti Gowthami",
"Ganta Varalaxmi",
"Ram",
// "Laddu",
"Abhishek john weslee Malaka",
"Nataraj",
"Srinath",
"Tejas",
"Deepak vemula"
];

  const secretSantaGenerator = new SecretSantaGenerator(participants);
  const secretSantaPairs = secretSantaGenerator.generateSecretSantaPairs();
  
  console.log("Secret Santa Pairs:");
  secretSantaPairs.forEach(([giver, recipient]) => {
    console.log(`"${giver}" : "${recipient}",`);
  });
   