
    const hundred = [
       1, 2, 3, 4, 5, 6 ,7, 8 ,9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
];
    var specialNumber1 = prompt('specialNumber1','');
    var specialNumber2 = prompt('specialNumber2','');
    var specialNumber3 = prompt('specialNumber3','');
    var hundred2 = judgeSpecialNumber2();
    var hundred23 = judgeSpecialNumber3();
    var hundred123 = judgeSpecialNumber1();
//#1

function judgeSpecialNumber2() {
    var hundred2 = hundred;
    for (var i in hundred2) {
        if(hundred2[i] % specialNumber2 ==0) {
            hundred2[i] = 'Buzz';
}
}
    return hundred2;
}

//#2

function judgeSpecialNumber3() {
      var hundred23 = hundred2;
       for (var i in hundred2) {
        if(hundred[i] % parseInt(specialNumber3) == 0) {
            if(typeof hundred23[i] == 'number') {
                hundred23[i] == 'Whizz';
}
            else {
                hundred23[i] += 'Whizz';
}
}
}
     
     return hundred23;
}

//#3

function judgeSpecialNumber1() {
      var hundred123 = hundred23;
      for(var i in hundred123) {
        if(hundred[i].toString().indexOf(specialNumber1)) {
            hundred123[i] = 'Fizz';
}
        else if(hundred[i] % specialNumber1 == 0) {
            if(typeof hundred123[i] == 'number') {
                hundred123[i] == 'Fizz';
}
            else {
                hundred123[i] = 'Fizz' + hundred123[i];
}
}
}
   
    return hundred123;
}

//#4

function typeout() {
    for(var i in hundred123) {
    console.log(hundred123[i]);
}
    return 0;
}
typeout();


    
       
    
