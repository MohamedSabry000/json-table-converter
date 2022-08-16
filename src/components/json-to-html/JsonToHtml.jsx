import { useEffect, useState } from "react";

export default function JsonToHtml({json}) {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log(json)
    json && typeof json !== 'object' ? setData(JSON.parse(json)) : setData(json);
    console.log(data)
  }, [json]);

  const renderData = (d) => {
      if (d && typeof d === 'object') {
        console.log(typeof d);
        return (
          <td>
            <JsonToHtml json={d}/>
          </td>
        )
      }
      return (
        <td>
          <span dangerouslySetInnerHTML={{ __html: d }} />
        </td>
      )
  }

  return (
      <table>
        <tbody>
        {Object.keys(data).map((k, i) => (
          <tr key={i}>
            {!Array.isArray(data) && <td>{k.replace(/_/g, ' ')}</td>}

            {renderData(data[k])}
          </tr>
        ))}
        </tbody>
      </table>
  )
}
