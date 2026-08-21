
function occurenceChar(str)
{

    let freq={};
    for (let ch of str){
        freq[ch]=(freq[ch]||0)+1;
        
    }
    return freq;


}

let res = occurenceChar("automation");
console.log(res);