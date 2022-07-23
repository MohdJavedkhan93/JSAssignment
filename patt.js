// 12   * * * * *
//       * * * *
//        * * *
//         * *
//          *
//          *
//         * *
//        * * *
//       * * * *
//      * * * * *
    const pattern12 = (n) =>{
        let str = "";
    for(let row=1; row<=2*n; row++){
        let spaceinCol = row>n ? 2*n-row: row-1;
        for(let space=1; space<=spaceinCol; space++){
        str+= " "
    }
    let starincol = row<=n ? n-row+1 : row-n
    for (let col = 1; col <= starincol; col++) {
      str += " *";
    }
    
    str+= "\n"
}
    console.log(str);
}
// pattern12(5)


// 13.      *
//         * *
//        *   *
//       *     *
//      *********


    const patteren13 = (n) =>{
        let str = "";
        for(let row =1; row<=n; row++){
            
            for(let space =1; space<=n-row; space++){
                str+= " ";
            }
            for(let col=0; col<2*row-1; col++){
                if(row===1|| row ===n){
                str+= "*";
            }
            else{
                if(col===0|| col===2*row-2){
                    str+= "*";
                }
                else{
                    str+= " ";
                }
            }
            }
            str+= "\n"
        }
        console.log(str)
    }
    patteren13(5)