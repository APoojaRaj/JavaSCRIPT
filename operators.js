/*

1.
var total=5+10;
console.log(total);


2.
var total=5.1+3.3;
console.log(total); // result is 8.39999 so on.. this is because floating point result are not accurate


3.
var total=5.1+3.3;
console.log(total.toFixed(2));// this means that we are rounding up the decimal number to 2 digits after
                     // the decimal point which helps up in giving the right resule. here it gives 8.4 now


4.
var id= "abc" + 25;
console.log(id);   //abc25-result



5.
var id= "2000" + "5000";
console.log(id);   // result- 20005000


6.
var id= "2000" + undefined;
console.log(id);  // NaN



7.
var id= "PR" + undefined;
console.log(id);   //PRDundefined


8.
var id= "PR" + null;
console.log(id);  // PRnull


9.
var id= 2000 + null;
console.log(id);   // 2000-result


10.
var id= 2000 + NaN;
console.log(id);  //NaN



11.
var id= "PR" + NaN;
console.log(id);     //PRNaN




12.
var total=5.1-3.3;
console.log(total); //1.7999999 (same as addition)




13.
 var total=5.1-3.3;
 console.log(total.toFixed(2));


14.

var total="500"-"300";
console.log(total); // result is 200.. that is because in Javascript when it sees a '-' sign it doesnt care
// if it is a string or not



15.
var total="PR"-"AB";
console.log(total); // NaN




16.
var total=300- null;
console.log(total); // result-300


17.
var total=300- undefined;
console.log(total); // result-NaN


18.

var obj={
    valueOf:function()
    {
        return 100;

    }
};
var total=400-obj;
console.log(total);  //result- 300(it looks for a value assigned inside the object and hence shows 100)




19.

var total=5*3;
console.log(total); //result-15



20.
var total=1.1*1.1;
console.log(total);

if(total!=1.21)
    console.log("Problem!!"); //result- 1.2100  Problem!!



21.
var total=1.1 * 1.1;
console.log(total);

if(total.toFixed(2)==1.21)
    console.log("Fixed!!"); //result- 1.21000 Fixed




22.
var obj={
    valueOf:function()
    {
        return 100;

    }
};
var total=4*obj;
console.log(total);  // 400-result



23.
var total=9/0;
console.log(total); // infinity




24.

var total=9/"3";
console.log(total);  //result - 3(during division it doest care if it is string or not


25.

var total=9/"  4  ";
console.log(total); // result-1 (even if there is space it still divides in the same matter by not considering the space



26.

var total=-9/0;
console.log(total); //result: -Infinity



27.

var level=5;
++level;
console.log(level); // result- 6 (can also be written as level++



28.
var level=6;
var nextLevel= ++level;
console.log(nextLevel);// result- 7


29.
var level=6;
var nextLevel= level++;
console.log(nextLevel); // result-6(it does not make any difference to the number)


30.

var level=6;
var nextLevel= --level;
console.log(nextLevel);  // result-5

31.
var level=6;
var nextLevel= level--;
console.log(nextLevel); //result- 6




32.

var level;
console.log(++level); //result- NaN



33.

var level=null;
console.log(++level); //result-1


34.

var value=9;
value=+value;
console.log(value);
// result- 9(the + value doe not amke any change even if we do it with -9)



35.
var value=9;
value=-value;
console.log(value);//result- (-9) if we are going to use -9 the value changes to +9

36.
var value='abc';
value=+value;
console.log(value); // reuslt-NaN(same with -value as well)




37.

var value= !true;
console.log(value);  // result- false(same when put false)



38.

var obj={
    calc: 'logical AND'
};
var value= obj && 0;
console.log(value); // result-0



39.

var value= "z" && null;
console.log(value); //result- null(either of the operand in null then the result is null)




40.
"use strict"
var o= {
    name: "Jill"

};
var o2= o;
o2.name= "jack";

console.log(o.name); // result- Jack;



41.
var entries=Array('trains',42,"true");
console.log(entries instanceof Array); //true


42.
var entries=[,,,];
console.log(entries.length); // result-3



43.
var entries=["6"];
console.log(entries.length); // result-1



44.
var entries=Array(5);
console.log(entries.length); // result-5


45.

var entries=['Planes','trains'];
entries.length=10;
console.log(entries.length); //result-10;




46.
var entries=['Planes','trains'];
entries.length=1;
console.log(entries[2]); //result- undefined.(even though the assigned values are 2
                         //  once we give the length 1 the value is altered to 1




47.
var entries=['Planes','trains','ships'];
entries[2]="cars";
console.log(entries[2]); //result-cars




48.
var entries=['Planes','trains','ships'];
entries[50]="cars";
console.log(entries.length); // result-51



49.
var entries=['Planes','trains','ships'];
entries[entries.length]="cars";
console.log(entries.length); //result-4




50.
var entries=["planes","automobiles","train"];
console.log(entries.toString()); //result- planes,automobiles,train




51.
var rating=[5,2,4];
console.log(rating.join('|')); //result- 5|2|4




 52.
var rating=[];
rating.push(5);
rating.push(2,6);
console.log(rating.length); //result- 3;



53.

var rating=[];
rating.push(5);
rating.push(2,6);
console.log(rating.pop()); //result-6



54.
var rating=[];
rating.push(5);
rating.push(2,6);
var firstRating=rating.shift();

console.log(firstRating); //reuslt- 5




55.

var rating=[];
rating.push(5);
rating.push(2,6);
var newCount= rating.unshift(3);

console.log(rating[0]);
console.log(newCount);
//result- 3
//        4




56.
    var rating=[1,2,3];
var newRating= rating.concat([5,6,7]);
//console.log(newRating);//result- 1,2,3,5,6,7
console.log(newRating.length); // result-6


57.
var rating=[1,2,4,5,7];
var newRating=rating.slice(2);
console.log(newRating); //[4,5,7]



58.

var rating=[1,2,4,5,7];
rating.splice(2,0,12,13,14,15);
console.log(rating.toString());   //result- 1,2,12,13,14,15,4,5,7



59.


*****


var rating=[1,7,4,3,6];
rating.sort(function(value1,value2){
    return value1-value2;

});
console.log(rating.toString());





60.
var rating=[1,2,3 ,4,5,3,2,1];
//console.log(rating.indexOf('3'));//result: -1(this is because no conversion
// is done from string to a number and hence returns -1)


console.log(rating.indexOf(3)); //result: 2



61.
vvar project= new Object;
project.name="Project JavaScript";
project.title="Fundamentals";
console.log(project.name); //result- Project Javascript


 */





































































































































































