import Card from './UI/Card'

function PlanItem({ name, yearly, icon, costMo, costYr, id, index, selected }) {
    return (
        <Card outlined={true} selectable={true} id={id} index={index} selected={selected}>
            <div className={'flexGroup'}>
                {icon}
                <div>
                    <h2>{name}</h2>
                    {yearly ? <p>{costYr}</p> : <p>{costMo}</p>}

                    

                    
                </div>
            </div>
        </Card>
    )
}

export default PlanItem
