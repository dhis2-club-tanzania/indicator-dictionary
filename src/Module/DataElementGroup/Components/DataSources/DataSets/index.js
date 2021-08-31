
import {useDataQuery} from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import PropTypes from "prop-types";
import {useEffect} from 'react'
import Error from "../../../../../../Shared/Componets/Error/ErrorAPIResult";
import Loader from "../../../../../../Shared/Componets/Loaders/Loader";


export default  function DataSets({name}){




    return (<div>
        <h4>{name}  </h4>
        <p>{i18n.t("Sources")}

        </p>

        <h5>{i18n.t("Datasets")} </h5>
        <ul>
            { data?.sources?.dataSetElements?.map((dt)=>{

              return( <li key={dt?.dataSet?.id}><b> {dt?.dataSet?.displayName}</b> {i18n.t("submitting {{variables1}} after every {{variables2}} days ",{variables1:dt?.dataSet?.periodType,variables2:dt?.dataSet?.timelyDays})} </li>)

            })}
        </ul>


    </div>)

}



//
// DataSets.propTypes={
//     id:PropTypes.string.isRequired
// }