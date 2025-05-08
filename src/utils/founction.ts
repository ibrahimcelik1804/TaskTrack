const total=(count:number)=>{
    if(count>10){
    return 1;
}else{
    return-1}

}

const fullname=(name:string,surname:string)=>{
    return `${name} ${surname}`
}
export {total,fullname}