const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/AboutPage'>/AboutPage</a></td>
            <td style={tableCellStyle}><a href='/AboutPage'>about page</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Desktop1'>/Desktop1</a></td>
            <td style={tableCellStyle}><a href='/Desktop1'>Desktop - 1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Frame11'>/Frame11</a></td>
            <td style={tableCellStyle}><a href='/Frame11'>Frame 11</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Frame14'>/Frame14</a></td>
            <td style={tableCellStyle}><a href='/Frame14'>Frame 14</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Frame6'>/Frame6</a></td>
            <td style={tableCellStyle}><a href='/Frame6'>Frame 6</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Group10'>/Group10</a></td>
            <td style={tableCellStyle}><a href='/Group10'>Group 10</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Group16'>/Group16</a></td>
            <td style={tableCellStyle}><a href='/Group16'>Group 16</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Group8'>/Group8</a></td>
            <td style={tableCellStyle}><a href='/Group8'>Group 8</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/HomePage'>/HomePage</a></td>
            <td style={tableCellStyle}><a href='/HomePage'> home page</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}