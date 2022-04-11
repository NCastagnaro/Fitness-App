
var calorieVal = document.querySelector('#calories').value;


var btn = document.querySelector('#submitButton');    //sets variable for our calorie button


//query selectors for maacro input fields
const protein = document.querySelector('#proteinVal').value;
const carbs = document.querySelector('#carbsVal').value;
const fats = document.querySelector('#fatsVal').value;

//Water -------------------------------------------
var watValNumber;
const waterButton = document.querySelector('#submitButton2');
waterButton.addEventListener('click',function(){
   let watVal = document.querySelector('#waterAmount').value;
   if(watVal !== ''){
       //watValNumber is our goal for ounces of water that we want
        watValNumber = parseInt(watVal);
        document.querySelector('#remainingWater').innerText = `${watValNumber} oz. remaining`;
        document.querySelector('#remainingWater').style.fontSize = 'x-large';
        document.querySelector('#waterAmount').value ='';
        console.log(watValNumber);
    }
   else{
    document.querySelector('#remainingWater').innerText ='Enter Valid Amount';
    document.querySelector('#remainingWater').style.fontSize = 'x-large'; 
   }
})
let addWater = document.querySelector('#addWater');
let count = 0;

addWater.addEventListener('click', function(){
    if(document.querySelector('#waterValue2') !== ''){
        let waterCount = parseInt(document.querySelector('#waterValue2').value)
        count = count + waterCount;
        document.querySelector('#waterValue').value = count;

        countPercentage = (count/watValNumber) * 100;

            if(countPercentage >= 100){
            document.querySelector('.water').style.height = '100%';
            }
            else{
            document.querySelector('.water').style.height = `${countPercentage}%`;
            }
        document.querySelector('#waterValue2').value = '';
        //account for changing the ounces remaining text
        document.querySelector('#remainingWater').innerText = `${watValNumber-count} oz. remaining`;
        //handles case where ounces remaining goes below zero. Just returns '0 oz. remaning' message
        if(watValNumber - count <=0){
        document.querySelector('#remainingWater').innerText = `0 oz. remaining`;
        } 
    }
})



let waterBut16 = document.querySelector('#waterButton16');
let waterBut32 = document.querySelector('#waterButton32');
let waterBut50 = document.querySelector('#waterButton50');

let countPercentage;

//For 16 oz addition button
waterBut16.addEventListener('click', function(){
    count = count + 16;
document.querySelector('#waterValue').value = count;

countPercentage = (count/watValNumber) * 100;

if(countPercentage >= 100){
    document.querySelector('.water').style.height = '100%';
}
else{
    document.querySelector('.water').style.height = `${countPercentage}%`;
    
}
//account for changing the ounces remaining text

document.querySelector('#remainingWater').innerText = `${watValNumber-count} oz. remaining`;
//handles case where ounces remaining goes below zero. Just returns '0 oz. remaning' message
if(watValNumber - count <=0){
    document.querySelector('#remainingWater').innerText = `0 oz. remaining`;
}
})

//For 32 oz addition button
waterBut32.addEventListener('click', function(){
    count = count + 32;
document.querySelector('#waterValue').value = count;
countPercentage = (count/watValNumber) * 100;

if(countPercentage >= 100){
    document.querySelector('.water').style.height = '100%';
}
else{
    document.querySelector('.water').style.height = `${countPercentage}%`;
    
}
//account for changing the ounces remaining text

document.querySelector('#remainingWater').innerText = `${watValNumber-count} oz. remaining`;
//handles case where ounces remaining goes below zero. Just returns '0 oz. remaning' message
if(watValNumber - count <=0){
    document.querySelector('#remainingWater').innerText = `0 oz. remaining`;
    }
})

//For 50 oz addition button
waterBut50.addEventListener('click', function(){
    count = count + 50;
document.querySelector('#waterValue').value = count;
countPercentage = (count/watValNumber) * 100;
if(countPercentage >= 100){
    document.querySelector('.water').style.height = '100%';
}
else{
    document.querySelector('.water').style.height = `${countPercentage}%`;
    
}
//account for changing the ounces remaining text
document.querySelector('#remainingWater').innerText = `${watValNumber-count} oz. remaining`;
//handles case where ounces remaining goes below zero. Just returns '0 oz. remaning' message
if(watValNumber - count <=0){
document.querySelector('#remainingWater').innerText = `0 oz. remaining`;
}
})






//----------------------------------------------


//Query Selectors for the add meal buttons
const addMeal = document.querySelector('#addMeal');
const addMeal1 = document.querySelector('#addMeal1');
const addMeal2= document.querySelector('#addMeal2');




//breakfast
const breakfastMeals = document.querySelector('#breakfastContainer');
const total = document.querySelectorAll('.total'); //This total variable will allow for access to all 3 total buttons
                                                    //they just have to be accounted for properly with  separate event listeners

//lunch
const lunchMeals = document.querySelector('#lunchContainer');


//dinner
const dinnerMeals = document.querySelector('#dinnerContainer');


//button for calories 
btn.addEventListener('click', function(){
    calorieVal = (document.querySelector('#calories').value);               //stores calorie value in variable and number format
    if(calorieVal !== ''){
    calorieValNumber = parseInt(calorieVal);
    document.querySelector('#calories').value = '';                         //Makes the input field for calories blank again
    options.plugins.title.text = `${calorieValNumber} calories remaining`;
    }
    else{
        calorieValNumber = '';
        options.plugins.title.text = `Enter a valid calorie value` 
    }
    myChart.update();                                                       //Updates chart with any changes
})


//CHART JS Chart 1 =============================================================================================================================================================
//Setup Block
const data = {
    labels: ['Protein', 'Carbs', 'Fats', 'Cals Rem.'],
    datasets: [{
        label: '# of Votes',
        data: [0,0,0,10],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
    }]
};
//options block ------
const options = {
    layout:{
        padding:0
    },
    plugins:{
        legend:{
            position: 'right',
        },
        title:{
            display:true,
            text:'Enter calories & macros',
            padding:10,
            align:'start',
            font:{
                size:25
            },
            padding:{
                top:0,
                bottom:0
            }
        },
        
    }
}



//config block - contains 3 core elements, the type,data and options -----
const config = {
    type: 'pie',        //This makes it a pie chart
    data,               //data is just a constant. It is part of the setup block.
                        //we need to include the data above, before we reference it here in the config block
    options,             //We included the options above in the option block and are referencing them here.

}

//render/initialization block  ------

var myChart = new Chart(             //Here we made the constant variable, myChart, be the same as what we set the id to for 
    document.getElementById('myChart'), //our Canvas element. But, you can name it whatever you want
    config,                              //we put our config in here, which is dependent on the config in the config block
);

//CHART JS END OF DATA ===============================================================================================================================================

//Modifying water level







//To append to breakfast 
addMeal.addEventListener('click', function(){     //div,input,id for each 
    const mealDiv = document.createElement('div');
    const meal = document.createElement('input');
    meal.setAttribute('id','meal');
    meal.setAttribute('name','meal');
    
    mealDiv.append(meal);

    const proteinDiv = document.createElement('div');
    const protein = document.createElement('input');
    protein.setAttribute('id','proteinInput');
    protein.setAttribute('name','protein');

    proteinDiv.append(protein);
    
    const carbDiv = document.createElement('div');
    const carb = document.createElement('input');
    carb.setAttribute('id','carbInput');
    carb.setAttribute('name','carb');

    carbDiv.append(carb);

    const fatDiv = document.createElement('div');
    const fat = document.createElement('input');
    fat.setAttribute('id','fatInput');
    fat.setAttribute('name','fat');

    fatDiv.append(fat);

    breakfastMeals.append(mealDiv);
    breakfastMeals.append(proteinDiv);
    breakfastMeals.append(carbDiv);
    breakfastMeals.append(fatDiv);

})


//To append to lunch
addMeal1.addEventListener('click', function(){     //div,input,id for each 
    const mealDiv = document.createElement('div');
    const meal = document.createElement('input');
    meal.setAttribute('id','meal');
    mealDiv.append(meal);

    const proteinDiv = document.createElement('div');
    const protein = document.createElement('input');
    protein.setAttribute('id','proteinInput');
    proteinDiv.append(protein);
    
    const carbDiv = document.createElement('div');
    const carb = document.createElement('input');
    carb.setAttribute('id','carbInput');
    carbDiv.append(carb);

    const fatDiv = document.createElement('div');
    const fat = document.createElement('input');
    fat.setAttribute('id','fatInput');
    fatDiv.append(fat);

    lunchMeals.append(mealDiv);
    lunchMeals.append(proteinDiv);
    lunchMeals.append(carbDiv);
    lunchMeals.append(fatDiv);

})

//To append to dinner
addMeal2.addEventListener('click', function(){     //div,input,id for each 
    const mealDiv = document.createElement('div');
    const meal = document.createElement('input');
    meal.setAttribute('id','meal');
    mealDiv.append(meal);

    const proteinDiv = document.createElement('div');
    const protein = document.createElement('input');
    protein.setAttribute('id','proteinInput');
    proteinDiv.append(protein);
    
    const carbDiv = document.createElement('div');
    const carb = document.createElement('input');
    carb.setAttribute('id','carbInput');
    carbDiv.append(carb);

    const fatDiv = document.createElement('div');
    const fat = document.createElement('input');
    fat.setAttribute('id','fatInput');
    fatDiv.append(fat);

    dinnerMeals.append(mealDiv);
    dinnerMeals.append(proteinDiv);
    dinnerMeals.append(carbDiv);
    dinnerMeals.append(fatDiv);
})






//summing up macros - This allows the breakfast total button to work and have functionality 
total[0].addEventListener('click', function(){
    if(typeof calorieValNumber ==='number' && !isNaN(calorieValNumber)){

    //protein
    let proteinTotal = 0;
    for(let i = 0; i < document.querySelectorAll('#proteinInput').length; i++){
        if(document.querySelectorAll('#proteinInput')[i].value ===''){
            proteinTotal = proteinTotal; //keep the same because the field is emppty, so we are basically just adding zero to it
        }
        else{
        let proteinInd = parseInt(document.querySelectorAll('#proteinInput')[i].value);
        proteinTotal = proteinInd + proteinTotal;
        }
    }
    //changes value in the total macros input field
    document.querySelector('#proteinVal').value = `${proteinTotal} grams`;
    console.log(`protein content: ${proteinTotal} grams`);

    //carbs
    let carbTotal = 0;
    for(let i = 0; i < document.querySelectorAll('#carbInput').length; i++){
        if(document.querySelectorAll('#carbInput')[i].value ===''){
            carbTotal = carbTotal; 
        }
        else{
            let carbInd = parseInt(document.querySelectorAll('#carbInput')[i].value);
            carbTotal = carbInd + carbTotal;
        }   
    }

    //changes value in the total macros input field
    document.querySelector('#carbsVal').value = `${carbTotal} grams`;
    console.log(`carb content: ${carbTotal} grams`);

    //fats
    let fatTotal = 0;
    for(let i = 0; i < document.querySelectorAll('#fatInput').length; i++){
        if(document.querySelectorAll('#fatInput')[i].value ===''){
            fatTotal = fatTotal; 
        }
        else{
        let fatInd = parseInt(document.querySelectorAll('#fatInput')[i].value);
        fatTotal = fatInd + fatTotal;
        }
}
    //changes value in the total macros input field
    document.querySelector('#fatsVal').value = `${fatTotal} grams`;
    console.log(`fat content: ${fatTotal} grams`);



//updates chart values
myChart.config.data.datasets[0].data[0] = proteinTotal*4;
myChart.config.data.datasets[0].data[1] = carbTotal*4;
myChart.config.data.datasets[0].data[2] = fatTotal*9;
myChart.config.data.datasets[0].data[3] = calorieValNumber -(fatTotal*9 + proteinTotal*4 + carbTotal*4);

document.querySelector('#message').innerHTML = '';
options.plugins.title.text = `${myChart.config.data.datasets[0].data[3]} calories remaining`;
myChart.update();

}
//fires if calories haven't been entered
else{
    console.log('Enter a calorie val!')
    document.querySelector('#message').innerHTML = 'Enter a calorie value!'
    document.querySelector('#message').style.color = 'red';

}


})




//summing up macros - This allows the lunch total button to work and have functionality
total[1].addEventListener('click', function(){
    if(typeof calorieValNumber ==='number' && !isNaN(calorieValNumber)){

    //protein
    let proteinTotal = 0;
    for(let i = 0; i < document.querySelectorAll('#proteinInput').length; i++){
        if(document.querySelectorAll('#proteinInput')[i].value ===''){
            proteinTotal = proteinTotal; //keep the same because the field is emppty, so we are basically just adding zero to it
        }
        else{
        let proteinInd = parseInt(document.querySelectorAll('#proteinInput')[i].value);
        proteinTotal = proteinInd + proteinTotal;
        }
    }
    //changes value in the total macros input field
    document.querySelector('#proteinVal').value = `${proteinTotal} grams`;
    console.log(`protein content: ${proteinTotal} grams`);

    //carbs
    let carbTotal = 0;
    for(let i = 0; i < document.querySelectorAll('#carbInput').length; i++){
        if(document.querySelectorAll('#carbInput')[i].value ===''){
            carbTotal = carbTotal; 
        }
        else{
            let carbInd = parseInt(document.querySelectorAll('#carbInput')[i].value);
            carbTotal = carbInd + carbTotal;
        }   
    }

    //changes value in the total macros input field
    document.querySelector('#carbsVal').value = `${carbTotal} grams`;
    console.log(`carb content: ${carbTotal} grams`);

    //fats
    let fatTotal = 0;
    for(let i = 0; i < document.querySelectorAll('#fatInput').length; i++){
        if(document.querySelectorAll('#fatInput')[i].value ===''){
            fatTotal = fatTotal; 
        }
        else{
        let fatInd = parseInt(document.querySelectorAll('#fatInput')[i].value);
        fatTotal = fatInd + fatTotal;
        }
}
    //changes value in the total macros input field
    document.querySelector('#fatsVal').value = `${fatTotal} grams`;
    console.log(`fat content: ${fatTotal} grams`);



//updates chart values
myChart.config.data.datasets[0].data[0] = proteinTotal*4;
myChart.config.data.datasets[0].data[1] = carbTotal*4;
myChart.config.data.datasets[0].data[2] = fatTotal*9;
myChart.config.data.datasets[0].data[3] = calorieValNumber -(fatTotal*9 + proteinTotal*4 + carbTotal*4);

document.querySelector('#message').innerHTML = '';
options.plugins.title.text = `${myChart.config.data.datasets[0].data[3]} calories remaining`;
myChart.update();

}
//fires if calories haven't been entered
else{
    console.log('Enter a calorie val!')
    document.querySelector('#message').innerHTML = 'Enter a calorie value!'
    document.querySelector('#message').style.color = 'red';

}


})




//summing up macros - This allows the dinner total button to work and have functionality
total[2].addEventListener('click', function(){
    if(typeof calorieValNumber ==='number' && !isNaN(calorieValNumber)){

    //protein
    let proteinTotal = 0;
    for(let i = 0; i < document.querySelectorAll('#proteinInput').length; i++){
        if(document.querySelectorAll('#proteinInput')[i].value ===''){
            proteinTotal = proteinTotal; //keep the same because the field is emppty, so we are basically just adding zero to it
        }
        else{
        let proteinInd = parseInt(document.querySelectorAll('#proteinInput')[i].value);
        proteinTotal = proteinInd + proteinTotal;
        }
    }
    //changes value in the total macros input field
    document.querySelector('#proteinVal').value = `${proteinTotal} grams`;
    console.log(`protein content: ${proteinTotal} grams`);

    //carbs
    let carbTotal = 0;
    for(let i = 0; i < document.querySelectorAll('#carbInput').length; i++){
        if(document.querySelectorAll('#carbInput')[i].value ===''){
            carbTotal = carbTotal; 
        }
        else{
            let carbInd = parseInt(document.querySelectorAll('#carbInput')[i].value);
            carbTotal = carbInd + carbTotal;
        }   
    }

    //changes value in the total macros input field
    document.querySelector('#carbsVal').value = `${carbTotal} grams`;
    console.log(`carb content: ${carbTotal} grams`);

    //fats
    let fatTotal = 0;
    for(let i = 0; i < document.querySelectorAll('#fatInput').length; i++){
        if(document.querySelectorAll('#fatInput')[i].value ===''){
            fatTotal = fatTotal; 
        }
        else{
        let fatInd = parseInt(document.querySelectorAll('#fatInput')[i].value);
        fatTotal = fatInd + fatTotal;
        }
}
    //changes value in the total macros input field
    document.querySelector('#fatsVal').value = `${fatTotal} grams`;
    console.log(`fat content: ${fatTotal} grams`);



//updates chart values
myChart.config.data.datasets[0].data[0] = proteinTotal*4;
myChart.config.data.datasets[0].data[1] = carbTotal*4;
myChart.config.data.datasets[0].data[2] = fatTotal*9;
myChart.config.data.datasets[0].data[3] = calorieValNumber -(fatTotal*9 + proteinTotal*4 + carbTotal*4);

document.querySelector('#message').innerHTML = '';
options.plugins.title.text = `${myChart.config.data.datasets[0].data[3]} calories remaining`;
myChart.update();

}
//fires if calories haven't been entered
else{
    console.log('Enter a calorie val!')
    document.querySelector('#message').innerHTML = 'Enter a calorie value!'
    document.querySelector('#message').style.color = 'red';

}


})


