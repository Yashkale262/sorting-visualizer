let terminate=false;
let time;

export async function mergesort ({setProperty,size,speed,array,changeCol,changeValue,sleep,changeSortingStatus,cancel}){
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

    const sort=async (st,end)=>{
        if(terminate===true)return;
        if(st===end)return;
        let mid=Math.floor((st+end)/2);
        await sort(st,mid);
        await sort(mid+1,end);
        if(terminate===true)return;
        for(let i=st;i<=mid;i++)changeCol(i,"#F7EC09");
        for(let i=mid+1;i<=end;i++)changeCol(i,"#F7EC09");
        await sleep(time);
        let i=st;
        let j=mid+1;
        changeCol(i,"#F37878");
        changeCol(j,"#F37878");
        let sorted_arr=[];
        while(i<=mid&&j<=end)
        {
            
            if(array[i].val<array[j].val)
            {
                
                await sleep(time);
                sorted_arr.push(array[i].val);
                i++;
                if(i<=mid)
                {
                    changeCol(i,"#F37878");
                }
            }
            else{
                await sleep(time);
                sorted_arr.push(array[j].val);
                j++;
                if(j<=end)
                {
                    changeCol(j,"#F37878");
                }
            }
            if(terminate===true)return;
        }
        while(i<=mid)
        {
            await sleep(time);
            sorted_arr.push(array[i].val);
            i++;
            if(i<=mid)
            {
                changeCol(i,"#F37878");
            }
            if(terminate===true)return;
        }
        while(j<=end)
        {
            await sleep(time);
            sorted_arr.push(array[j].val);
            j++;
            if(j<=end)
            {
                changeCol(j,"#F37878");
            }
            if(terminate===true)return;
        }
        for(let i=st;i<=end;i++)
        {
            await sleep(time);
            changeCol(i,"green");
            changeValue(i,sorted_arr[i-st]);
            if(terminate===true)return;
        }
        await sleep(time);
        for(let i=st;i<=end;i++)changeCol(i,"blue");
    }
    
    await sort(0,size-1);
    if(terminate===true)return;
    for(let i=0;i<size;i++)changeCol(i,"green");
    changeSortingStatus(0);
};

