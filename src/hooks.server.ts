import { start_mongodb } from "$lib/mongodb";

start_mongodb().then(()=>{
    console.log("MongoDB started")
}).catch((err:any)=>{
    console.error(err);
});
