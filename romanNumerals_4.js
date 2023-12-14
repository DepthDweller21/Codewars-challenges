class RomanNumerals {
    static toRoman(num) {
      console.log(`entered number is ${num}`)
      //answer
      let ans=[]
      //split into 4 digits
      let splitNum=`${num}`.split('')
      while(splitNum.length<4){
        splitNum.unshift('0')
      }
      //function that returns x character y times
      function xtimesy(letter,number){
        let ansArr=[]
        for(let i=0;i<number;i++){
          ansArr.push(`${letter}`)
        }
        return ansArr.join('')
      }
      //first M only
      ans.push(xtimesy('M',splitNum[0]))
      //second between C and D
      ans.push(xtimesy('C',splitNum[1]))
      ans[1]=ans[1].replace('CCCCC','D');
      ans[1]=ans[1].replace('CCCC','CD');
      ans[1]=ans[1].replace('DCD','CM');
      //third between X and L
      ans.push(xtimesy('X',splitNum[2]))
      ans[2]=ans[2].replace('XXXXX','L');
      ans[2]=ans[2].replace('XXXX','XL');
      ans[2]=ans[2].replace('LXL','XC');
      //fourth digit chooses between I and V
      ans.push(xtimesy('I',splitNum[3]))
      ans[3]=ans[3].replace('IIIII','V');
      ans[3]=ans[3].replace('IIII','IV');
      ans[3]=ans[3].replace('VIV','IX');
      return ans.join('')
    }
  
    static fromRoman(str) {
      console.log(`entered roman is ${str}`)
      str=str.replace('IX','VIV')
      str=str.replace('IV','IIII')
      str=str.replace('V','IIIII')
      str=str.replace('XC','LXL')
      str=str.replace('XL','XXXX')
      str=str.replace('L','XXXXX')
      str=str.replace('CM','DCD')
      str=str.replace('CD','CCCC')
      str=str.replace('D','CCCCC')
      let splitArray=str.split('')
      splitArray=splitArray.map((element)=>{
        switch(element){
          case 'I': 
          return 1;
          break;
          case 'X':
          return 10;
          break;
          case 'C':
          return 100;
          break;
          case 'M':
          return 1000;
          break;
        }
      })
      return splitArray.reduce((a,b)=>a+b)
    }
  }