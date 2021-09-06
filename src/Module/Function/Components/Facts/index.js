import React from 'react'

export default function Facts({selected}){



    return <div>
        <h3>Function Facts</h3>

        <u>
            <li>   It is approximately  {"{function character length, see this for more details https://mothereff.in/byte-counter}"} bytes/kilobytes in size</li>
            <li>It has {selected?.rules?.length} associated rules</li>
            <li> {selected?.functions?.search('Fn')>0?' It’s using function analytics library' :' It’s not using function analytics library'}</li>
            <li>  {selected?.functions?.search('$.')>0?'It’s using jquery api library':'It’s not using jquery api library'}</li>
            <li> {selected?.functions?.search('$.ajax')>0? 'Performs ajax promises ':"Does not performs ajax promises"}</li>
            <li>{selected?.functions?.search('../../../api/')>0?'Fetches from DHIS2 API without function analytics':'Does not fetches from DHIS2 API without function analytics'} </li>
            <li>Running on API version: {"{dhis2 version from system info }"}</li>
        </u>

        </div>
}

