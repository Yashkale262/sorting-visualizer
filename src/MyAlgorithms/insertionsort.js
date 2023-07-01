let terminate=false;
let time;

export async function insertionsort ({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel}){
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

    changeCol(0,"green");
    for(let i=1;i<size;i++)
    {
        changeCol(i,"#F37878");
        await sleep(time);
        let j=i-1;
        while(j>=0&&array[j].val>array[j+1].val)
        {
            swap(j,j+1);
            changeCol(j,"#F37878");
            changeCol(j+1,"green");
            await sleep(time);
            j--;
            if(terminate===true)return;
        }
        changeCol(j+1,"green");
        await sleep(time);
        
        
    }
    changeSortingStatus(0);
};

