var tableLength = 12;
var tourDestinations = ['coxsbazar','nepal','bhutan','paris'];

tourDestinations.indexOf('bhutan');

var fourthDestination = tourDestinations[3];
tourDestinations[1] = 'srilanka';

tourDestinations.push('London');
tourDestinations.pop('');

if(tourDestinations[1] == 'nepal'){
    console.log('phara ahare ahare');
}
else if(tourDestinations[1] == 'china'){
    console.log('chaina tor kace jamuna');
}
else if(tourDestinations.length == 4){
    console.log('aro taka ase aro besi ghurmu');
}
else{
    console.log('kothao jamu na basai thakmu ar mosa marmu');
}

var eggPrice = 32;
var myBudget = 32;

if(eggPrice <= myBudget){
    console.log('ami dim khamu');

}
if(eggPrice >= myBudget){
    console.log('lebu diye vat khabo');
}