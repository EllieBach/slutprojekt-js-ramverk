import React from 'react'


export const useChopArray = (input: any) => {// input är sökresultatet vi hämtade ifrån våran slice
    const someArray = [];
    const chopArray = 4; //för att bestämma hur många objekt som skall vara i varje nestade array
    if (input){
        if (input.title){
            for (let i=0; i < input.title.length; i+= chopArray){ //vi skapar en variabel med värdet 0, vi jämför den med längden på input.title arrayn vilket är böckerna 
                                                                    // och varje gång den loopar
                                                                    //så ökas i med 4.
                someArray.push(input.title.slice(i, i + chopArray));  // vi sätter in 4 index från vår input i someArray.
            }
            return someArray; //när värdet i I är större än längden på input.title returneras den nestade arrayn
        } 
    } 
    
}

const thisArray = [[1],2,3,4,5,6]
const newArray = thisArray.slice(0, 3)
