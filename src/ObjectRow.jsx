

export default function ObjectRow() {

  let Fibo =[0,1]
  let FinalNum 
  
//   console.log(Fibo);
for (let i = 2; i < 10; i++) {
    // console.log(Fibo);

    let FiboNum = Fibo[i-1]+Fibo[i-2]
        console.log(FiboNum);
        Fibo.push(FiboNum)
     FinalNum = Fibo.join(', ')
    
        
   
   

}
  return (
    <div>
      {FinalNum}
    </div>
  )
}
