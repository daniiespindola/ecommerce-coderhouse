import {Button} from 'react-bootstrap'
import {useState} from 'react'
import './ItemCount.css'


const ItemCount = ({initialCount, stock}) => {

    const [count, setCount] = useState(initialCount ? initialCount : 0);

    const increment = () => {
        if (count === stock){
            return;
        }
        setCount(count + 1);
    }
    const decrement = () => {
        if (count === 0){
            return;
        }
        setCount(count - 1);
    }

        return(
            <>
                <div className="counter d-flex flex-wrap mx-auto contador">
                   
                    <div className="count">
                        <span>{count}</span>
                        <p> contador </p>
                    </div>
                    <div className="d-flex btn-counter ">
                        <Button variant='light' className='font-size-2' onClick={decrement}>-</Button>
                        <Button variant='light' className='font-size-2' onClick={increment}>+</Button>
                    </div>
                </div>
            </>
        )
    
}

export default ItemCount;