function expect(val) {
    let vals = val;


    return {
        tobe: function (val) {
            if (vals === val) {
                console.log(`value: ${true}`);
            }
            else {
                throw new error("notEaual");
            }



        },

        notToBe: function (val) {
            if (vals != val) {
                return `vallue: not equal ${true}`
            }
            else {
                throw new error('Not Equal')
            }

        }



    }



}

const ex1 = expect(5).tobe(5);
const ex2 = expect(5).notToBe();
console.log(ex1);
console.log(ex2);


