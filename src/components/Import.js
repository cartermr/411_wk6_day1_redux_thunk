import React, { useState } from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, IconButton, MenuItem, Menu } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

const Import = (props) => {
    // fill out this component
    const [anchorEl, setAnchorEl] = useState(null)
    const [deleteIndex, setDeleteIndex] = useState(null)
    const open = Boolean(anchorEl)

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleClick = (event) => {
        console.log(props)
        setAnchorEl(event.currentTarget)
        setDeleteIndex(event.currentTarget.id)
    }

    const handleDelete = () => {
        props.deleteMake(deleteIndex)
        setAnchorEl(null)
    }

    return (
        <>
            <p>Import Component</p>
            <h2>{props.makes.length}</h2>
            <Button onClick={props.fetchMakes} variant='contained' color='primary'>Import</Button>
            <Container>
                <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Make</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.makes.map((make, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{make.MakeId}</TableCell>
                                    <TableCell>{make.MakeName}</TableCell>
                                    <TableCell>
                                        <IconButton id={index} onClick={handleClick}>
                                            <MoreVert />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Container>
        </>
    )
}

export default Import