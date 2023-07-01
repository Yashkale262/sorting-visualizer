import React from 'react'
import './mycss.css'



export const Header = ({randomize,changeSize,changeSpeed,bubbleSort,selectionSort,insertionSort,quickSort,mergeSort,heapSort,sortingStatus,stop}) => {
  
  return (
    <div className='head'>
        <div className='heading'>Sorting Visualiser</div>
        <div className='bottomHead'>
            <div className='bottomHead1'>
                <button type="button" className={`head_button btn btn-success btn-sm ${(sortingStatus===1) ? 'disabled' : ''}`} onClick={randomize}>New Array</button>
                <button type="button" className={`head_button btn btn-danger btn-sm ${(sortingStatus===0) ? 'disabled' : ''}`} onClick={stop}>Stop</button>
                <label className='rangelabel' htmlFor="sizeArray">Size</label>
                <input className='rangebar' type="range" disabled={(sortingStatus===1)} id="sizeArray" name="" min="10" max="100" onChange={(event)=>{changeSize(event.target.value)}}/>
                <label className='rangelabel' htmlFor="speed" >Speed </label>
                <input className='rangebar' type="range" id="speed" name="" min="10" max="1000" onChange={(event)=>{changeSpeed(event.target.value)}}/>
              </div> 
              <div className='bottomHead2'> 
                <button type="button" className={`sortbtn btn btn-outline-light btn-sm ${(sortingStatus===1) ? 'disabled' : ''}`} onClick={bubbleSort}>Bubble Sort</button>
                <button type="button" className={`sortbtn btn btn-outline-light btn-sm ${(sortingStatus===1) ? 'disabled' : ''}`} onClick={insertionSort}>Insertion Sort</button>
                <button type="button" className={`sortbtn btn btn-outline-light btn-sm ${(sortingStatus===1) ? 'disabled' : ''}`} onClick={selectionSort}>Selection Sort</button>
                <button type="button" className={`sortbtn btn btn-outline-light btn-sm ${(sortingStatus===1) ? 'disabled' : ''}`} onClick={mergeSort}>Merge Sort</button>
                <button type="button" className={`sortbtn btn btn-outline-light btn-sm ${(sortingStatus===1) ? 'disabled' : ''}`} onClick={quickSort}>Quick Sort</button>
                <button type="button" className={`sortbtn btn btn-outline-light btn-sm ${(sortingStatus===1) ? 'disabled' : ''}`} onClick={heapSort}>Heap Sort</button>
            </div>
        </div>
        

    </div>
  )
}


