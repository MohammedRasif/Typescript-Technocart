{
    //
    let anything : any;

    anything = "next level web developer";
    anything = 222;

    // (anything as number)

    const kgTOgm = (value:string | number) : string | number |undefined =>{
        if(typeof value === "string"){
            const convertedValue = parseFloat(value)*1000;
            return `The converted value is:${convertedValue}`
        }
        if(typeof value === "number"){
            return value*1000
        }
    }


    const result1 = kgTOgm(1000) as number;
    const result2 = kgTOgm("1000") 

    type CustomError = {
        message:string
    }

    try{

    }catch(error){
        console.log((error as CustomError).message);
    }



    //
}