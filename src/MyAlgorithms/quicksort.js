let terminate=false;
let time;

export async function quicksort ({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel}){
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

    const partition=async (st,end)=>{
        let i=st-1;
        let pivot=array[end].val;

        for(let i=st;i<=end;i++)changeCol(i,"#E55807");
        changeCol(end,"red");
        await sleep(time);

        for(let j=st;j<end;j++)
        {
            if(terminate===true)return;
            changeCol(j,"#F37878")
            await sleep(time);
            if(array[j].val<pivot)
            {
                i++;
                changeCol(i,"#FCE22A")
                swap(i,j);
            }
            if(i!==j)changeCol(j,"#E55807");

        }
        changeCol(end,"blue");
        changeCol(i+1,"red");
        swap(i+1,end);
        await sleep(time);
        for(let i=st;i<=end;i++)changeCol(i,"blue");
        return i+1;
    }

    const sort=async (st,end)=>{
        if(end<=st)return;
        let pivot=await partition(st,end);
        if(terminate===true)return;

        await sort(st,pivot-1);
        if(terminate===true)return;
        for(let i=st;i<=pivot;i++)changeCol(i,"green");

        await sort(pivot+1,end);
        if(terminate===true)return;
        for(let i=pivot+1;i<=end;i++)changeCol(i,"green");
    }
        
    await sort(0,size-1);
    changeSortingStatus(0);
};

