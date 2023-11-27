const rps = (p1, p2) => {
    if (p1==p2){
      return "Draw!"
    }else if ((p1=="scissors"&&p2=="paper")||(p1=="paper"&&p2=="rock")||(p1=="rock"&&p2=="scissors")){
      return "Player 1 won!"
    }else{
      return "Player 2 won!"
    }
  };
  /*
  either write down all cases and outputs
  write some cases and outputs
    -wrote draw cases
    -wrote p1 win cases
    -else p2 wins
  or find a clever way to determine the outputs
    -somehow find a way to make s>p,p>r,r>s and then make p1 and p2 select their case and compare independantly
      -mathematically impossible to make 1>2>3>1 unless I somehow use negative numbers
  */