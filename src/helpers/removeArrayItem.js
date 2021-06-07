export const  removeArrayItem = (arr, value) => { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}