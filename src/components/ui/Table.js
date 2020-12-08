import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';
import { Clear, Search, FirstPage, LastPage, ChevronRight, ChevronLeft, ArrowDownward, Delete, Edit } from '@material-ui/icons';

export const Table = ({ data, columns, actionDelete }) => {

    const tableIcons = {
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
        Delete: forwardRef((props, ref) => <Delete {...props} ref={ref}/>),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    }
    
    const { list } = data;
    

    return (

        <div style={{width: '100%'}}>
            <MaterialTable
                icons={tableIcons}
                columns={
                    columns.map( (column) =>( 
                        { title: column.title, field: column.field}
                     ))
                }

                data = {
                    list.map((user) => (
                        {
                            name: user.name, 
                            lastname: user.last_name,
                            email: user.email,
                            role: user.role,
                            status: user.status,
                            _id: user._id,
                        }
                    ))
                }

                options = {{
                    search: false,
                    pageSize: 7, //initial page size (row per page)
                    emptyRowsWhenPaging: true, //In case of less data row fix the table
                    pageSizeOptions:[7], //row selection options,
                    actionsColumnIndex: columns.length //Position of actions Columns
                    
                }}
                title="User List"

              

                actions = {[
                    rowData => (
                        {   icon: Delete,
                            tooltip: 'Delete',
                            onClick: (event, rowData) => {
                                actionDelete(rowData._id)
                            }
                        }),
                    rowData => (
                        { icon: Edit,
                        tooltip: 'Edit',
                       }),
                    
                    
                ]}
            />
        </div>

    );


}