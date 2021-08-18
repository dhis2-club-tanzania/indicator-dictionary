import {DataTableRow, DataTableCell,CircularLoader} from '@dhis2/ui'
import {useDataQuery} from "@dhis2/app-runtime";

const query={
   programIndicator:{
       resource:"programIndicators",
       id:({id})=>id,
       params:{
           fields:["id","displayName","aggregationType","analyticsType","analyticsPeriodBoundaries[id,analyticsPeriodBoundaryType,boundaryTarget]","filter","programIndicatorGroups[id,displayName]","legendSets[id,displayName]"]
       }

   }
}



export default function Row(props){

    const programIndicator=props.programInd
    const id=programIndicator.id

    const {loading, error, data}   = useDataQuery(query, {variables: {id}})

    if(loading){
        return <CircularLoader />
    }
    if(error){
        return <i>Something went wrong</i>
    }

    function OtherCells(prog){
        return <>
            <DataTableCell bordered>
                {prog?.filter}
            </DataTableCell>
            <DataTableCell bordered>
                {prog?.aggregationType}
            </DataTableCell  >
            <DataTableCell bordered>
                {prog?.analyticsType}
            </DataTableCell>
            <DataTableCell bordered>
                <ol>
                    {prog?.analyticsPeriodBoundaries.map((boundary)=>{
                        return (<li key={boundary.id} >{boundary?.analyticsPeriodBoundaryType}</li>)
                    })}
                </ol>

            </DataTableCell>
            <DataTableCell bordered>
                <ol>
                    {prog?.legendSets.map((legend)=>{
                        return (<li key={legend.id}>{legend?.displayName}</li>)
                    })}
                </ol>
            </DataTableCell>
            <DataTableCell bordered>
                <ol>
                    {prog?.programIndicatorGroups.map((group)=>{
                        return (<li key={group.id}>{group?.displayName}</li>)
                    })}
                </ol>
            </DataTableCell>

        </>
    }



    return (
        <DataTableRow>
            <DataTableCell bordered>
                {programIndicator?.val}
            </DataTableCell  >
            <DataTableCell bordered>
                {programIndicator?.location}
            </DataTableCell>
            {OtherCells(data?.programIndicator)}
        </DataTableRow>
    )
}

