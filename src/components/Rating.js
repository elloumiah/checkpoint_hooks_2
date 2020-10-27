import React, {useState} from 'react';
import { Rate } from 'antd';


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


const Rating = ({rate, testRating, filterByRate}) => {

  const [value, setValue] = useState(rate);
  const handleChangeValue = (val) => {
    setValue(val);
    filterByRate(val)
}

 return (
      <span>
      { (!testRating) ? (
        <div>
          <Rate disabled onChange={handleChangeValue} value={rate} />
          {value ? <span className="ant-rate-text">{desc[rate-1]}</span> : ''}
        </div>
      ) : (
         <div>
          <Rate tooltips={desc} onChange={handleChangeValue} value={value} />
        </div>
      )}
      </span>
    );
}

export default Rating;



// import React, {useState} from 'react'
// import { Rate } from 'antd';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// const Rating = ({testRating,rate,filterByRate}) => {

//     const [value, setValue] = useState (rate)


//   const handleChange = val => {
//     setValue(val);
//     filterByRate(val);

//   };

//     return (
//       <span>
//           {  testRating ? (
//                 <div>
//                     <Rate tooltips={desc} onChange={handleChange} value={value} />
//                     {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
//                 </div>
//               ) : (
//                   <div>
//                     <Rate tooltips={desc} disabled value={value} />
//                     {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
//                   </div>
//               )
//           }
//       </span>
//     );
//   }

//   export default Rating