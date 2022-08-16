import React, { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import JsonToHtml from '../json-to-html/JsonToHtml';


export default function Upload() {
  const [files, setFiles] = useState("");

  const print = useRef();
  const handlePrint = useReactToPrint({
    content: () => print.current,
  })

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);

    };
  };

  return (
    <>
      <h1 style={{textAlign: "center"}}>Upload Json file</h1>
      <div className='input-file-container'>
        <input type="file" onChange={handleChange} />
      </div>
      <br />
      {/* {"uploaded file content -- " + files} */}
      <br />
      <section ref={print}>

      <JsonToHtml json={JSON.parse(JSON.stringify(files))} />
      </section>
      <br />
      <div className="button-container">
        <button onClick={handlePrint}>Print</button>
      </div>
    </>
  )
}
