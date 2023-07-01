let terminate=false;
let time;

export async function bubblesort ({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel}){
    terminate=cancel;
    time=10000/speed;
    if(setProperty===true){
        return;
    };
   
    for(let i=0;i<size;i++)
    {
        changeCol(i,"blue");
    }

    changeSortingStatus(1);
    let sorted=0;
    
    for(let i=0;i<size-1;i++)
    {
        sorted=1;
        for(let j=0;j<size-1-i;j++)
        {
            changeCol(j,"#F37878");
            changeCol(j+1,"#F37878");
            await sleep(time);
            if(array[j].val>array[j+1].val)
            {
                swap(j,j+1);
                sorted=0;
            }

            changeCol(j,"blue");
            changeCol(j+1,"blue");
            
            if(terminate===true)return;
        }
        changeCol(size-1-i,"green");
        if(sorted===1){
            for(let i=0;i<size;i++)
            {
                changeCol(i,"green");
            }
            break;
        };
    }
    changeSortingStatus(0);
};

