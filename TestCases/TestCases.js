/**********************************
TEST CASE 
-- EVAL 
**
*/
var eval_01 = eval("1+1");
if (eval_01 == true){console.log('Eval condition is true');}
eval('5 + 5');
eval(new String('10 + 10'));


/**********************************
TEST CASE 
-- Dynamic Delete
**
*/
// Create a person Object
var person = {Fname:"Abbas", Lname:"Saifuddin", heigth:5.7, gender:"Male"};
// Delete person attributes
delete person["gender"];
delete person["Lname"];

// Create another person Object
var person2= {Nname:"Juzer", Vname:"Saifuddin", alt: 26};
person2.type = 12;
// Delete person2 attributes

/**********************************
TEST CASE 
-- Dynamic Add
**
*/
//Add  attributes in person object
person["hairColor"] = "Black";
person["nationality"] = "Pakistanich";
// Add  attribute in person2 object
person2["gender"]="Male";

/**********************************
TEST CASE 
-- Prototype Update
**
*/
var Vehicle = function(Vehiclename) {
this.Vehiclename = Vehiclename;
this.automatic = true;
this.start = function() 
{
if (this.automatic) 
{
console.log('This is ' + this.name);
}
}
}

var Car = function(Vehiclename, Brand) {
Vehicle.call(this, Vehiclename);
this.Brand = Brand;
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.start = function() {
if (this.automatic) {
console.log('This ' + this.name +  ' wlll be running  ' + this.automatic);
}
}

/**********************************
TEST CASE 
-- Method Overriding
**
*/
function Employees(){
this.Employeename;
this.getEmpName = function(){
return "Employee name is " + this.Employeename;
}
}
function Organization(){
} 
Organization.prototype = new Employees();
Organization.prototype.Employeename = function() {
return 'The  '+ this.Employeename+ 'belongs to this organization';
}

var emp = new Employees();
var org = new Organization();

emp.Employeename();
org.Employeename();

/**********************************
TEST CASE 
-- Method Overriding
**
*/
function Vehicles(brand_name){
this.brand_name = brand_name;
this.getBrandName = function(){
return "Vehicle Brand Name is " + this.brand_name;
}
}

function motorcycle(){
} 
motorcycle.prototype = new Vehicles();
motorcycle.prototype.brand_name = function() {
return 'The  '+ this.brand_name+ 'belongs to Honda';
}

var vech = new Vehicles();
var mot = new motorcycle();

vech.brand_name();
mot.brand_name();

