import React from 'react'
import data from "./data";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

console.log(data);
function Review() {
    const [index, setIndex] = React.useState(0);
    const { image, job, name, text } = data[index];

    function checkNumber(number) {
        if (number > data.length - 1) {
            return 0;
        }
        if (number < 0) {
            return data.length - 1;
        }
        return number;
    }
    function prevIndex() {
        setIndex(checkNumber(index + 1));
    }

    /* 
    - to update setIndex using callback function:
    function prevIndex() {
        setIndex(prevIndex => checkNumber(prevIndex + 1));
    } 
    or
    function prevIndex() {
        setIndex(prevIndex => {
            let newIndex = prevIndex + 1;
            checkNumber(newIndex))};
    } 
    */

    function nextIndex() {
        setIndex(checkNumber(index - 1));

    }
    function randomIndex() {
        let randomNumber = Math.floor(Math.random() * data.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }
    return (
        <section className='review-container'>
            <img className='review-image' src={image} alt={name} />
            <h4 className='review-name'>{name}</h4>
            <p className='review-job'>{job}</p>
            <p className='review-text'>{text}</p>
            <div className="review-buttons">
                <button className='left-btn' onClick={prevIndex}>
                    <FaArrowCircleLeft />
                </button>
                <button className='right-btn' onClick={nextIndex}>
                    <FaArrowAltCircleRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomIndex}>surprise me</button>
        </section>
    )
}

export default Review