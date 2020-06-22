import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

interface Props {
  teamTableData?: string[]
}

const TeamTableHeaders = (props: Props) => {
  const data = props.teamTableData

  return(
    <TableHead className='team-table-header'>
      <TableRow className='team-table-header-row'>
        {data.map((title)=> {
          // REFACTOR better key
          // REFACTOR better method (forEach()?)
          return <TableCell
              key={title}
          >{title}</TableCell>
        })}
      </TableRow>
    </TableHead>
  )
}

export default TeamTableHeaders;