var num;
        for (num=4; num<=80; num++){
            if(num%4==0){
                console.log("number devided by 4 is", num)
            }
        }


        
            let age;
            for (age = 0; age <= 60; age++) {
                if (age < 10)
                    console.log("you are child")
                }
                else if (age < 18 && age > 10) {
                    console.log("you are teen")
                }
                else if (age > 18 && age < 40) {
                    console.log("you are young")
                }
                else if (age > 40) {
                    console.log("you are moving towards old")
                }

            

    

            let test = (newage) => {
                    switch (true) {
                        case (newage < 10):
                            console.log("you are young");
                            break;
                        case (newage < 18 && newage > 10):
                            console.log("you are teen");
                            break;
                        case (newage > 18 && newage < 40):
                            console.log("you are young");
                            break;
                        case (newage > 40 && newage <60):
                            console.log("you are moving towards old");
                            break;
                            default: console.log("you are dead");
                    }
                }
                test(70)
            



        let var1 = 10
        let var2 = 15
        let var3 = var1
        var1 = var2
        var2 = var3
        console.log("var1", var1)
        console.log("var2", var2)

    let a = 6;
    let b = 7;
    [b, a] = [a, b];
    console.log("a", a)
    console.log("b", b)