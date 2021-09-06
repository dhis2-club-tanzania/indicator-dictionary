import React from 'react'

export default function Facts({selected}){



    return <div>
        <h3>Function Facts</h3>

        <u>
            <li>   It is approximately  {"{function character length, see this for more details https://mothereff.in/byte-counter}"} bytes/kilobytes in size</li>
            <li>It has {"{ rules count}"} associated rules</li>
            <li> It’s using function analytics library {"{If function string contains “Fn.” as substring}"}</li>
            <li> It’s using jquery api library {"{ If function string contains “$.” as substring}"}</li>
            <li>Performs ajax promises {"{If function string contains “$.ajax” as substring}"}</li>
            <li>Fetches from DHIS2 API without function analytics {"{ If function string contains “../../../api/” as substring}"}</li>
            <li>Running on API version: {"{dhis2 version from system info }"}</li>
        </u>


        </div>
}

