import { Fragment } from 'react'
import { MonthProps } from '../../dtos/month'
import { Day } from '../Day'
import { Grid } from './style'

export function Month({ month }: MonthProps) {
    return (
        <Grid>
            {month.map((row, index) => 
                <Fragment key={index}>
                    {row.map((day, i) =>
                        <Day day={day} key={i} />
                    )}
                </Fragment>
            )}
        </Grid>
    )
}