window.addEventListener('load', (event) => {
    console.log('  Starting initialization ')
    
    if (localStorage.getItem('hour')) {
      document.getElementById('hour').value = parseInt(localStorage.hour)
      console.log(`  Stored hour = ${localStorage.hour}`)
    }
    if (localStorage.getItem('wage')) {
      document.getElementById('wage').value = parseInt(localStorage.wage)
      console.log(`  Stored wage = ${localStorage.wage}`)
    }
    console.log('  Finished initialization')
  })


var hour = 0
var wage = 0


function calcSalary() {
    hour= Number(document.getElementById("hour").value)
    
    wage= Number(document.getElementById("wage").value)
    var salary = calculate1(hour, wage)
    // alert("salary of triangle of hour: " + hour + " and wage: " + wage + " is: " + salary)
}


function calculate1(hour, wage) {

    const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
        var salary =hour * wage
        document.getElementById('result').innerHTML =  "Total salary is : "+ salary;
        const ct = origCount + 1
        localStorage.setItem('countOfClicks', ct) 
        
      localStorage.setItem('hour', hour)
      localStorage.setItem(' wage',  wage)
      console.log('  Finished clicker click handler')

    return  salary;
}
document.getElementById('wiper').addEventListener('click', () => {
    console.log('  Starting wiper click handler')
    localStorage.removeItem('countOfClicks')
    
    localStorage.removeItem('hour')
    localStorage.removeItem('wage')
    console.log('  Finished wiper click handler - localStorage entries removed')
  })