import {Header} from "./MyComponents/Header.js";
import {Body} from "./MyComponents/Body";
import React, {useState, useEffect} from 'react';
import {bubblesort} from './MyAlgorithms/bubblesort'
import { selectionsort } from "./MyAlgorithms/selectionsort";
import { insertionsort } from "./MyAlgorithms/insertionsort";
import { quicksort } from "./MyAlgorithms/quicksort";
import { mergesort } from "./MyAlgorithms/mergesort";
import { heapsort } from "./MyAlgorithms/heapsort";

function App() {

  const [size, setSize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [array, setArray] = useState([]);
  const [sortingStatus, setSortingStatus] = useState(0);
  
  const randomize=()=>{
      let arr=[];
       for(let i=0;i<size;i++)
       {
        arr.push({
          
          val:Math.floor(Math.random() * 991 +50),
          col:"blue",
          index: i
        });
       }
      setArray(arr);
      
  }

  const changeSize=(n)=>{
    setSize(n);
  }

  const changeSpeed=(sp)=>{
    setSpeed(sp);
  }


  const stop=()=>{
    let cancel=true;
    let setProperty=true;
    bubblesort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
    selectionsort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
    insertionsort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
    quicksort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
    mergesort({setProperty,size,speed,array,changeCol,changeValue,sleep,changeSortingStatus,cancel});
    heapsort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
    setSortingStatus(0);
  }


  const swap=(index1,index2)=>{
    let arr = [...array]; // Create a copy of the original array
    let temp = arr[index1].val;
    arr[index1].val = arr[index2].val;
    arr[index2].val = temp;

    setArray(arr);
  }

  const changeSortingStatus=(status)=>{
    setSortingStatus(status);
  }

  const changeCol=(index,color)=>{
    let arr = [...array]; // Create a copy of the original array
    arr[index].col = color;
    setArray(arr);
  }

  const changeValue=(index,value)=>{
    let arr = [...array]; // Create a copy of the original array
    arr[index].val = value;
    setArray(arr);
  }

  const sleep=(ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms));
  }
  
  useEffect(() => {
    randomize();
    //eslint-disable-next-line
  }, [size]);

  useEffect(() => {
    let cancel=false;
    let setProperty=true;
    bubblesort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
    selectionsort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
    insertionsort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
    quicksort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
    mergesort({setProperty,size,speed,array,changeCol,changeValue,sleep,changeSortingStatus,cancel});
    heapsort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
    //eslint-disable-next-line
  }, [speed]);


  const bubbleSort=()=>{
    let cancel=false;
    let setProperty=false;
    bubblesort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
  }

  const selectionSort=()=>{
    let cancel=false;
    let setProperty=false;
    selectionsort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
  }

  const insertionSort=()=>{
    let cancel=false;
    let setProperty=false;
    insertionsort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
  }

  const quickSort=()=>{
    let cancel=false;
    let setProperty=false;
    quicksort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
  }

  const mergeSort=()=>{
    let cancel=false;
    let setProperty=false;
    mergesort({setProperty,size,speed,array,changeCol,changeValue,sleep,changeSortingStatus,cancel});
  }

  const heapSort=()=>{
    let cancel=false;
    let setProperty=false;
    heapsort({setProperty,size,speed,array,changeCol,swap,sleep,changeSortingStatus,cancel});
  }
  window.onload = randomize;


  return (
    <>
      <Header randomize={randomize} changeSize={changeSize} changeSpeed={changeSpeed} stop={stop} bubbleSort={bubbleSort} selectionSort={selectionSort} quickSort={quickSort} insertionSort={insertionSort} mergeSort={mergeSort} heapSort={heapSort} sortingStatus={sortingStatus}/>
      <Body size={size} speed={speed} array={array}/>
    </>
  );
}

export default App;
