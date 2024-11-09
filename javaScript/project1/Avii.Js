var x=100;
for(let j=0;j<5;j++){
for(let i=1;i<=10;i++)
    { 
        for(let k in arr)
            {
        console.log(i*x)
            }
    }
    x--;
}

function myFun(str)
{
    var word=str.split(" ");
    var v=0,c=0,s=0;
    for(let i of str)
        {
            if(str[i]=='a'||str[i]=='e'||str[i]=='o'||str[i]=='u'||str[i]=='i')
                {
                    v++;
                }
                else if(s[i]==' ') 
                    {
                        s++;
                    }
                    else 
                    {
                        v++;
                    }
        }
        return "words: "+word ,"consunanet:"+ c, "vovels: "+v;
}
console.log(myFun("this is my srntance"));
var arr=[2,3,5,8,9,7,3,5,8,9,9];
function array(arr)
{
   
    for(let i of arr)
        var w=0;
        {
         for(let j of arr)
            {
                if(arr[i]==arr[j]) w++;
            }   
        }
        if(w==1)
            {
                console.log(arr[i]);
            }
        
}
console.log([2,3,5,8,9,7,1,6,32,6,3,4,5,6,76,67,7,3,5,8,9,9].sort())

console.log("arrays")
let arrs=[2,3,4,5,6,7,3,1,4];
console.log(arr.length)
console.log(arrs.push(100),arrs)
console.log(arrs.pop(),arrs)
console.log(arrs.unshift(7),arrs)
console.log(arrs.shift(),arrs)
console.log(arrs.splice(99,77,88,66,44,55,11,22,33,789),arrs)
console.log(arrs.slice(2,6),arrs)

for(i=0;i<arrs.length;i++)
    {
        console.log(arrs[i])
    }
 for(let z of arr)
     {
        console.log(arr[z])  
     }

 for(let x in arrs)
     {
       console.log(arrs[x])
     }

console.log(arrs.sort())

let newArray=[2,3,4,5,6,7].forEach
(function(x)
{
    console.log(x)
})
let newArray1=[2,3,4,5,6,7,4,4,6,6,8,8,6,34,5,53,2,3].map
(function(x)
{
    return x%2==0
})
console.log(newArray1)
let newArray2=[2,3,4,5,6,7,4,4,6,6,8,8,6,34,5,53,2,3].filter
(function(x)
{
    return x%2==0
})
console.log(newArray2)

let result=[1,2,3,4,6,7,9,3,5,6,7,9,100].reduce
(function(c,p)
{
return c+p
},0)
console.log(result)

console.log(arrs)
console.log(arrs.every(function(x)
{
    return x>10
}))


console.log(arrs.some(function(x)
{
    return x>50
}))


console.log(arrs.find(function(x)
{
    return x>40
}))

console.log(arrs.sort())

console.log(arrs.reverse())



   
 let str1=["Avvi","Avanish","Yadav"].map
 (function(newStr)
{
    
   return newStr.split("").reverse().join("")
})
 console.log(str1)

 let intArrays=[1,3,4,5,6,7,2,8,9,4,7]
 for(let i=0;i<intArrays.length;i++)
    {
        var Max=0
        if(intArrays[i]>Max)
            {
                Max=intArrays[i]
            }
    }
Max=Max+1;
for(let x=0;x<intArrays.length;x++)
    {
        var c=0
        for(let y=x+1;y<intArrays.length;y++)
            {
                if(intArrays[i]==intArrays[y])
                    intArrays[y]=Max

            }
            if(intArrays!=Max)
                {
                    console.log(intArrays[i])
                }
    }