function area(a,b,c){
    var temp=((a+b+c)/2)
    var area=Math.sqrt(temp*((temp-a)*(temp-b)*(temp-c)));
    return area
}

console.log("The Area of Triangle is "+area(5,6,7)))
