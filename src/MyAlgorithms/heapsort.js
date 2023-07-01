let terminate=false;
let time;
/*
#FCE22A
#E55807
#F37878
*/
export async function heapsort ({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel}){
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

    let colorsByLevel=["#99A98F","#EAB2A0","#C1ECE4","#F2BE22","#884A39","#FF2171","#D3D04F","#675D50","orange"];
    let colorsByIndex=[];
    let level_size=1;
    let curr_color=0;
    for(let i=0,j=0;i<size;i++,j++)
    {
        if(j===level_size)
        {
            level_size*=2;
            curr_color++;
            j=0;
        }
        colorsByIndex.push(colorsByLevel[curr_color]);
    }

    const heapify=async (curr,heap_size)=>{
        if(terminate===true)return;
        let left=2*curr;
        let right=2*curr+1;
        let largest=curr;
        if(left<heap_size&&array[left].val>array[largest].val)
        {
            largest=left;
        }
        if(right<heap_size&&array[right].val>array[largest].val)
        {
            largest=right;
        }
        if(largest!==curr)
        {
            changeCol(curr,"red");
            changeCol(largest,"red");
            await sleep(time);
            swap(curr,largest);

            changeCol(curr,colorsByIndex[curr]);
            changeCol(largest,colorsByIndex[largest]);
            await sleep(time);
            await heapify(largest,heap_size);
        }
    }

    for(let i=Math.floor((size)/2);i<size;i++)changeCol(i,colorsByIndex[i]);
    for(let i=Math.floor((size)/2);i>=0;i--)
    {
        await heapify(i,size);
        changeCol(i,colorsByIndex[i]);
    }
    let heap_size=size;
    
    while(heap_size>0)
    {
        if(terminate===true)return;
        swap(0,heap_size-1);
        changeCol(heap_size-1,"green");
        await sleep(time);
        heap_size--;
        await heapify(0,heap_size);
    }
  
    changeSortingStatus(0);
};

