console.log("Hello");

const arr = (a:number , b: string, ...c:any) => {
    console.log(a, b, c);
}

arr (34, 'str', 222223, 23332, 23333)
