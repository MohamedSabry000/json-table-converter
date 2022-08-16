import React from 'react'
import JsonToHtml from '../json-to-html/JsonToHtml'

export default function JsonToHTMLTable({json}) {
  return (
    <table data-testid="json-to-html-table">
      <JsonToHtml json={JSON.parse(JSON.stringify(json))} />
    </table>
  )
}
