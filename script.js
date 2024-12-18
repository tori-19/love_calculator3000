function calculateCompatibility(name1, name2) {
    const getScore = (name) => {
      return name
        .toUpperCase()
        .split("")
        .reduce((sum, char) => {
          const charCode = char.charCodeAt(0);
          if (charCode >= 65 && charCode <= 90) { // A-Z
            return sum + (charCode - 64); // A=1, B=2, ...
          }
          return sum;
        }, 0);
    };
  
    const score1 = getScore(name1);
    const score2 = getScore(name2);
  
    const compatibility = (score1 + score2) % 101; // Ensures a value between 0-100
    return compatibility;
  }
  
  // Usage
  const name1 = "Alice";
  const name2 = "Bob";
  console.log(`${name1} and ${name2} have a compatibility score of: ${calculateCompatibility(name1, name2)}%`);
  

document.getElementById("calculateBtn").addEventListener("click", function() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
  
    if (name1 === "" || name2 === "") {
      alert("Please enter both names!");
      return;
    }
  
    // Simple compatibility calculation (for fun!)
    const loveScore = Math.floor(Math.random() * 101); // Generates a random percentage
    const result = document.getElementById("result");
  
    result.innerHTML = `<p>${name1} and ${name2}'s love score is: <strong>${loveScore}%</strong> 💖</p>`;
  });
  
