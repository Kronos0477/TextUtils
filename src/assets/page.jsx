import React,{useState} from 'react'

export default function Page(props) {
    const  [text, settext] = useState('');

    const handlechange =(e)=>{
        settext(e.target.value)
       
    }
    const handlecapitalize = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext)
        props.alert_func('The Text has been changed')
    }
    const handlelower = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext)
        props.alert_func('The Text has been changed')
    }
    const cleartext = ()=>{
        settext('')
        props.alert_func('The Text has been cleared')
    }
    const CopyText = ()=>{
      navigator.clipboard.writeText(text)
        props.alert_func('The Code has been copied')
    }
  

  return (
      <>
    <div className={`container m-3  text-${props.dark_mode ? 'white':'dark'}`} >
        <h1>TextUtils</h1>
        <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" value={text} onChange={handlechange} style={{height: "200px"} }id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea" className={`text-${props.dark_mode ? 'dark':'dark'}`}>Enter Your Text Here</label>
</div>
<button type="button" disabled={text.length===0} onClick={handlecapitalize} className="btn btn-primary my-3">Capitalize</button>
<button type="button" onClick={handlelower} disabled={text.length===0} className="btn btn-primary m-3">LowerCase</button>
<button type="button" onClick={cleartext} disabled={text.length===0} className="btn btn-primary m-3">Clear Text</button>
<button type="button" onClick={CopyText} disabled={text.length===0} className="btn btn-primary m-3">Copy Text</button>


    </div>
    <div className={`container text-${props.dark_mode ? 'white':'dark'}`}>
        <h2>
            Your Text Summary
        </h2>
        <p>{text.split(/\s+/).filter((element)=> {return element.length !== 0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length !== 0}).length} Minutes Read</p>
    </div>
    </>
  )
}
