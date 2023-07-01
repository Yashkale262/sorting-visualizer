//#FCE22A
//#E55807

let terminate=false;
let time;

export async function selectionsort ({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel}){
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

    
    for(let i=0;i<size-1;i++)
    {
        let min_index=i;
        changeCol(i,"#16FF00");
        for(let j=i+1;j<size;j++)
        {
            changeCol(j,"#F37878");
            await sleep(time);
            if(array[j].val<array[min_index].val)
            {
                changeCol(j,"#E55807");
                if(min_index!==i)changeCol(min_index,"blue");
                min_index=j;
                await sleep(time);
            }
            else{
                changeCol(j,"blue");
            }
            
            if(terminate===true)return;
        }
        swap(min_index,i);
        changeCol(i,"green");
        if(min_index!==i)changeCol(min_index,"blue");
    }
    changeCol(size-1,"green");
    changeSortingStatus(0);
};

