import React,{useState} from 'react';

export default function Directions() {
    // const [list, setList] = useState([]); //[{count:1,text:"步驟內容"},{count:2,text:"步驟內容2"}]
    // const [count, setCount]= useState(1);
    // const [text, setText] = useState("");
    // const addText=()=>{
    //     let item={
    //         count:setCount(prevCount=>{
    //             prevCount+1
    //         }),
    //         text:text
    //     }
    // }
    const [step ,setStep] = useState(1);
    const [inputList, setInputList] = useState([{ 
        img: "", 
        direction: ""
    }]);
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };
  
      // handle click event of the Remove button
      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
        setStep((prev) => prev -1);
      };
     
      // handle click event of the Add button
      const handleAddClick = () => {
        setInputList([...inputList, { img: "", direction: ""}]);
        setStep(prev => prev +1); //品項編號
      };

    return (
        <>
            <span className="sub-title">步驟</span>
            {inputList.map((x,i) => {
                return(
                    <div className="steps">
                        <div className="step-btns">
                            <button className="step-btn" onClick={handleAddClick}>新增</button>
                            {inputList.length !== 1 &&<button className="step-btn" onClick={() => handleRemoveClick(i)}>刪除步驟</button>}
                            <button className="step-btn">移動步驟</button>
                        </div>
                        <div className="step-item">
                            <div className="step-item-img-container">
                                <img className="step-item-img" alt={step} />
                            </div>
                            <div className="step-item-info">
                                <p className="step-item-number">{step}</p>
                                <input 
                                    className="step-item-inputtext" 
                                    placeholder="請輸入步驟說明(100字以內)" 
                                    name="directions"
                                    value={x.direction}
                                    onChange={e => handleInputChange(e,i)}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    )
}
