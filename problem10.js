function pingPong(){
    for (let x =1 ;
        x<=20;
        x++
    ){
        if (x % 3 ===0 && x % 5 === 0){
            console.log('PingPong')
        }
       else if(x % 3 ===0){
            console.log('Ping')
        }
        else if(x % 5 ===0){
            console.log('Pong')
        }
        
        else{
            console.log(x)
        }
    }
}
pingPong()