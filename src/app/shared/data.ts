import { Item } from './models/item';

export const Data = ( () => {
    let tempData = [];
    for(let i = 0; i < 10; i++){
        tempData.push(<Item>{
            id: i,
            name: ( (index) => {
                let random = Math.floor(Math.random() * 4);
                let name;
                switch(random){
                    case 0:
                      name = "fname " + index;
                      break;
                    case 1:
                      name = "fnname " + index;
                      break;
                    case 2:
                      name = "bname " + index;
                      break;
                    case 3:
                      name = "bnname " + index;
                      break;
                }
                return name;
            })(i),
            enabled: (i%2==0)?true:false
        });
    }
    return tempData as Item[];
})();