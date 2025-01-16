document.getElementById("calculateBtn").addEventListener("click", function() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
  
    if (name1 === "" || name2 === "") {
      alert("Please enter both names!");
      return;
    }
  
    const loveScore = Math.floor(Math.random() * 101); 
    const result = document.getElementById("result");
  
    result.innerHTML = `<p>${name1} and ${name2}'s love score is: <strong>${calculateCompatibility(name1, name2)}%</strong> 💖</p>`;
  });

function calculateCompatibility(name1, name2) {
  const getScore = (name) => {
    return name
    .toUpperCase()
    .split("")
    .reduce((sum, char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        return sum + (charCode - 64)
      }
      return sum;
    }, 0);
  };

  const score1 = getScore(name1);
  const score2 = getScore(name2);

  const compatibility = (score1 + score2) % 101;
  return compatibility
}
  
  