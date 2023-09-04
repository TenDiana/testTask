'use client'
import React, {useState, useEffect} from 'react';
import './ComplexHistogram.css';
import list from './data'


const MAX_VALUES = ['10000', '8000', '6000', '4000', '2000', '0'];
const HEIGHT_MULTIPLIER = 0.03;

const optionToDataMap = {
  year: Object.entries(list.year),
  'half-year': Object.entries(list.halfYear),
  month: Object.entries(list.month),
};

const ComplexHistogram = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState([]);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;

    if (optionToDataMap[selectedValue]) {
      setSelectedOption(selectedValue);
      setData(optionToDataMap[selectedValue]);
    } else {
      throw new Error('non-existent option');
    }
  };

  useEffect(() => {
    setData(Object.entries(list.month));
    setSelectedOption('month');
  }, []);

  return (
    <div className='histogram-block'>
      <select
        className='select-list'
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="month">За последний месяц</option>
        <option value="year">За последний год</option>
        <option value="half-year">За последние 6 месяцев</option>
      </select>
      <div className='histogram'>
        <div className='y-axis-bars'>
          {MAX_VALUES.map((item) => (
            <div
              className="y-axis-bar"
              style={{ height: `${item * HEIGHT_MULTIPLIER}px` }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className='data-bar'>
          {data?.map(([item, value]) => (
            <div className='bar-group' >
              <div className="bar" style={{ height: `${value * HEIGHT_MULTIPLIER}px` }} data-value={value} />
              {selectedOption === 'month' ?
                (
                item % 5 === 0 || item === '1' ? (
                  <div className='bar-item'>{item}</div>
                  ) : null
                )
                :
                (
                  <div className='bar-item'>{item}</div>
                )
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplexHistogram;

