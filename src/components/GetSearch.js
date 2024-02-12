import { useEffect } from 'react';
import { NumericFormat } from 'react-number-format';

function GetSearch({ netWorth }) {

  function meterToFeet(height) {
    return height ? (height * 3.28084).toFixed(1) + ' ft' : '';
  }

  useEffect(() => {
    console.log("netWorth: " + netWorth.net_worth);
  });  
  
  return (
    <div>
      <header>
        {netWorth.net_worth ? 
          <div className="net-worth">
            <table id="keywords">
              <thead className="net-worth">
                <tr>
                  <th className="header-link">Name</th>
                  <th className="header-link">Occupation</th>
                  <th className="header-link">Age</th>
                  <th className="header-link">Net Worth</th>
                  <th className="header-link">Height</th>
                  <th className="header-link">Nationality</th>
                  <th className="header-link">Birthday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{netWorth.name}</td>
                  <td>{netWorth.occupation ? netWorth.occupation[0] : ''}</td>
                  <td>{netWorth.age}</td>
                  <td className="Money-link">
                    { 
                      <NumericFormat value={netWorth.net_worth} 
                      displayType={'text'} thousandSeparator={true} prefix={'$'} /> 
                    }
                  </td>
                  <td>{meterToFeet(netWorth.height)}</td>
                  <td>{netWorth.nationality}</td>  
                  <td>{netWorth.birthday}</td>      
                </tr>
              </tbody>
            </table>
          </div> 
        : ''}
      </header>
    </div>
  );
}

export default GetSearch;