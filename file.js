function testArrays ( tab1, tab2 ) {
    let sum=0;
    let tab= tab1.concat(tab2);
    for(let i=0;i<tab.length;i++){
      for (let j=0;j<tab.length;j++){
       if (tab[i]==tab[j] && i!=j){
         tab[i]=0;
         tab[j]=0;
       } 
      }
    }
      for (let k=0;k<tab.length;k++){
        sum+=tab[k];
      }
      return sum
    }


    function allTableSum(tab1, tab2) {
        let tab = tab1.concat(tab2);
        const obj = {};
        let sum = 0;
        let sum2 = 0;
        for (let i = 0; i < tab.length; i++) {
            if (!obj.hasOwnProperty(tab[i])) {
                obj[tab[i]] = 0;
            } else {
                obj[tab[i]] = 1;
            }
        }
    
        for (let k in obj) {
            if (obj[k] == 0) {
                sum += parseInt(k);
            } else {
                sum2 += parseInt(k);
            }
        }
        let tab3 = [sum, sum2];
        return tab3;
    }
    
    console.log(allTableSum([3, 1, 7, 9, 5], [2, 4, 1, 9, 3]));