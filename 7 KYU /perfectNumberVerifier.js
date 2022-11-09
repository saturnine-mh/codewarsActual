function isPerfect(n) {
    // Your code here
   let perfectNumberArr = []
    let trashNumberArr = []
    let checker = 0
    // console.log(n, 6%1)
    for(let i = 0; i < n; i++){
      if(n % i == 0 ){
        perfectNumberArr.push(i)
        // console.log('hi',n,i)
      }
    }
    for (let j = 0; j <perfectNumberArr.length; j++){
      checker = checker += perfectNumberArr[j]
    //   console.log(checker, 'checker')
      
    }

    if(checker == n){
        console.log('hiu win')
      return true;
     
    }
    else{
        console.log('loser')
      return false;
    }
    
    
  }
  isPerfect(23459879034)