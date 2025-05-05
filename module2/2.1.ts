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



    //
}