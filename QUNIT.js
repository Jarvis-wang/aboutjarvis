function calcSalary(number1,number) {
    hour=  parseFloat(number1)
    
    wage=  parseFloat(number)
    fToC = hour*wage;
    return fToC;
  }

  //Added QUnit Test
QUnit.test("calcSalary", function(assert) {
    assert.equal(calcSalary(3,1) , 3, "3 hour for 1$ per hour == 3$");
    assert.equal(calcSalary(6,1) , 6, "6 hour for 1$ per hour == 6$");
    assert.equal(calcSalary(7,1) , 7, "7 hour for 1$ per hour == 7$");
    assert.equal(calcSalary(9,1) , 9, "9 hour for 1$ per hour == 9$");
    assert.equal(calcSalary(5,1) , 5, "5 hour for 1$ per hour == 5$");
 });

 

 
 