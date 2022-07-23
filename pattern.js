
    //https://www.tutorialstonight.com/js/javascript-star-pattern.php#heart-star-pattern
 //1.  *****
    // *****
    // *****
    // *****
    // *****

const pattern1 = (n) =>{
    let str = "";
    for(let row =1; row <=n; row++){
        for(let col =1; col <=n; col++){
            str+= "*";
            }
            str+= "\n";
    }
    console.log(str)
}
// pattern1(5)

//2.   *
    // **
    // ***
    // ****
    // *****


const pattern2 = (n) =>{
    let str = "";
    for(let row =1; row <=n; row++){
        for(let col =1; col <=row; col++){
            str+= "*";
            }
            str+= "\n";
    }
    console.log(str)
}
// pattern2(5)

 //3.  *****
    // ****
    // ***
    // **
    // *


const pattern3 =(n) => {
    let str =""
    for(let row =1; row <=n; row++){
        // console.log(row)
        for(let col=1; col <=n-row+1; col++){
            // console.log(col)
        str+= "*";
    }
    str+= "\n";
    }
    console.log(str)
    }
    // pattern3(5)

//4.   1
    // 1 2
    // 1 2 3
    // 1 2 3 4
    // 1 2 3 4 5

    const pattern4 = (n) =>{
        str =""
        for(let row=1; row<=n; row++){
            for(col=1; col<=row; col++){
                str+= col + " "
            }
            str+= "\n"
        }
        console.log(str)
    }
    // pattern4(5)

//5.   *
    // **
    // ***
    // ****
    // *****
    // ****
    // ***
    // **
    // *

    const pattern5 = (n) =>{
        str = ""
        for(let row=1; row<=  2 * n; row++){
            let colsinRow = row > n ? 2 * n-row : row
            for (let col = 1; col <= colsinRow; col++) {
            str += "*";
            }
            
            str+= "\n"
        }
        console.log(str)
    }
    // pattern5(5)

//6.        *
    //     **
    //    ***
    //   ****
    //  *****


const pattern6 = (n) =>{
    let str = "";
    for(let row=1; row<=n; row++){
        let spaceincol = n-row
        for (let space = 1; space <= spaceincol; space++){
        str += " ";
        }
        for(let col=1; col<=row; col++){
            str+= "*"
        }
        str+= "\n"
    }
    console.log(str)
}
    // pattern6(5)


//7.    *****
    //   ****
    //    ***
    //     **
    //      *

        const pattern7 = (n) => {
        let str = "";
        for (let row = 1; row <= n; row++) {
            let spaceincol = row-1;
            for (let space = 0; space <= spaceincol; space++){
            str += " ";
            }
            for(let col=1; col<=n-row+1; col++){
                str+= "*"
            }
            str += "\n";
        } 
        console.log(str);
        }
        // pattern7(5);


// 8.      *
    //    ***
    //   *****
    //  *******
    // *********

        const pattern8 =(n) =>{
            let str = "";
            for(row=1; row<=n; row++){
                let spaceincol = n-row;
                for(let space=1; space<=spaceincol; space++){
                    str+= " "
                }
                for(col=1; col<=2*row-1; col++){
                    str+= "*"
                }
                str+= "\n"
            }
            console.log(str)
        }
        // pattern8(5)

//    9. *********
//        *******
//         *****
//          ***
//           *

    const pattern9 = (n) =>{
        let str ="";
        for(let row=0; row<n; row++){
            for(let space=0; space<row; space++){
                str+= " "
            }
            for(let col=0; col<2*(n-row)-1; col++){
                str+= "*"
            }
            str+= "\n"
        }
        console.log(str)
    }
    // pattern9(5)


    

// 10.      *
//         * *
//        * * *
//       * * * *
//      * * * * *

    const pattern10 = (n) => {
        let str =""
        for(let row=1; row<=n; row++){
            spaceinCol = n-row
            for(let space=1; space<=spaceinCol; space++){
                str+= " "
            }
            for(let col=0; col<=row; col++){
                str+= " *"
            }
            str+= "\n"
        }
        console.log(str)
    }
    // pattern10(5)


// 11.  * * * * *
//       * * * *
//        * * *
//         * *
//          *

    const pattern11 = (n) => {
    let str = "";
    for (let row = 0; row < n; row++){
    spaceinCol = row;
    for (let space = 0; space <spaceinCol; space++) {
    str += " ";
    }
    for (let col = 1; col <n-row+1; col++) {
    str += " *";
    }
    str += "\n";
    }
    console.log(str);
    };
    // pattern11(5)







