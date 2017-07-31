var array = array;
  function forLoop(array)
    {for (let i = 0; i < 25; i++)
     {
       if (i === 1 )
            {array.push("I am 1 strange loop.")  }
       else {array.push("I am ${i} strange loops.");  }
      }
        return array };
 //  forLoop();

var number = number;
  function whileLoop(number)
  { let countdown = number;
      while (countdown > 0 )
       {console.log(--countdown); }
  return 'done' };
//whileLoop();

//var array = ["Milo", "Otis", "Garfield"];
var array = array;
function doWhileLoop(array)
  { function maybeTrue()
    { return Math.random() >= 0.5 }
  do {array.shift() }
  //    console.log('still going') }
    while (array.length > 0 && maybeTrue());
 return array };
