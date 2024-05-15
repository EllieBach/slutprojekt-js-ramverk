import React from 'react'


export const useChopArray = (input: any) => {
    const someArray = [] ;
    const chopArray = 4;
    if (input){
        if (input.title) {
            for (let i=0; i <input.title.length; i+= chopArray){
                someArray.push(input.title.slice(i, i + chopArray));
            }
            console.log(someArray)
            return someArray;
        } 
    } else if(!input.title){
        for(let i=0; i<input.lenght; i+= chopArray){
            someArray.push(input.slice(i, i + chopArray));
        }
        return someArray;
    }
}
