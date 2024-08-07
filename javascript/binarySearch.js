// ordenated array
arrayOrdenate = [1,2,3,4,10,12,15,21,22,23,25,33,35,44,49,50,51,56,66,70,71,78,80,83,84,90,91,92,94,97,98,100];

console.log(arrayOrdenate);

function binarySearch(element) {
    let initArray = 0; 
    let endArray = arrayOrdenate.length - 1;
    console.log("size: "+ arrayOrdenate.length);
    let tryNumber;
    let middlePosition;
    totalExecutions = 0;

    while(initArray <= endArray) {
        middlePosition = Math.trunc((initArray + endArray)/2);
        tryNumber = arrayOrdenate[middlePosition];  
        console.log("middlePosition: " + middlePosition + " => " + arrayOrdenate[middlePosition]);

        if(element == tryNumber) {
            
            return `Find: ${element} in position ${middlePosition}`;            
        }

        if(tryNumber > element) {
            endArray = middlePosition - 1;
            console.log(`initArray = middlePosition + 1`);
        } else {
            initArray = middlePosition + 1;
            console.log(`endArray = middlePosition`);
        }
        totalExecutions++;
        console.log("Executions: "+ totalExecutions);
    }
    return null;
}

console.log(binarySearch(94));