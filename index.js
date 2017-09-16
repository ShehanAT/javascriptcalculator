$(document).ready(function(){
  var inputs = [''];
  var totalString;
  var operators1 = ['+', '-','/','*'];
  var operators2 = ['.'];
  var nums = [1,2,3,4,5,6,7,8,9];
  function getValue(input){
    if (operators2.includes(inputs[inputs.length -1 ]) === true && input === "."){
      console.log("duplicate'.'");
      
    }
    else if (operators1.includes(input) === false && inputs.length === 1){
      inputs.push(input);
    }
    else if(operators1.includes(inputs[inputs.length - 1]) === false){
      inputs.push(input);
    }
    else if (nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }
  function update(){
    totalString = inputs.join('');
    $("#steps").html(totalString);
    console.log(inputs);
  }
  function getTotal(){
    totalString = inputs.join('');
   console.log(totalString);
    $('#steps').html(eval(totalString));
  }
  $('a').on('click',function(){
    if (this.id === 'deleteAll'){
      inputs = [''];
      update();
    }
    else if (this.id === 'backOne'){
      inputs.pop();
      update();
    }
    else if (this.id === 'equals'){
      getTotal();
    }
    else{
      if (inputs[inputs.length -1 ].indexOf('+','-','/','*') === -1){
        getValue(this.id);
      }
      else{
        getValue(this.id);
      }
    }
  });
});