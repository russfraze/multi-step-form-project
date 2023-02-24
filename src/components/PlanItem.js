import Card from './UI/Card'
import styles from './PlanItem.module.css'

function PlanItem({ name, yearly, icon, costMo, costYr, id, index, selected }) {
    return (
        <Card outlined={true} selectable={true} id={id} index={index} selected={selected}>
            <div className={`${styles.planItem} ${'flexGroup'}`}>
                {icon}
                <div className={styles.spacing}>
                    <h2>{name}</h2>
                    {yearly ? <p>{`$${costYr}${'/yr'}`}</p> : <p>{`$${costMo}${'/mo'}`}</p>}

                    
                    {yearly ? <h3>2 months free</h3> : ''}
                    
                </div>
            </div>
        </Card>
    )
}

export default PlanItem
