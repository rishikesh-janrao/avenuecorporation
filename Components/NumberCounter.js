import React, { useEffect, useState } from 'react';
import styles from '../styles/NumberCounter.module.css';

function NumberCounter({ count, description, isPositive, delay }) {
  const [reqCounter, setReqCounter] = useState(0);
  let interval = null;
  const startCounter = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(() => {
      let updatedCounter = reqCounter++;
      if (reqCounter <= count) setReqCounter(updatedCounter + 1);
      else clearInterval(interval);
    }, delay);
  };
  useEffect(startCounter, []);
  const formatNumber = (counter) => {
    const k = counter > 999;
    const tenK = counter > 9999;
    let formattedText = "";
    if(k){
        formattedText = (""+counter).charAt(0)+","+(""+counter).slice(1,(""+counter).length);
        return formattedText;
    }
    else if(tenK){
        formattedText = (""+counter).slice(0,2)+","+(""+counter).slice(2,(""+counter).length);
        return formattedText;
    }
    else{
        return counter
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <span>{formatNumber(reqCounter)}</span>
        {isPositive ? '+' : '-'}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

export default NumberCounter;
