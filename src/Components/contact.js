import React, { Component } from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Aditya Mishra</h2>
                        <img 
                        src="https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png"
                        alt="avatar"
                        style={{height:'150px'}}
                        />                        
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        7868878907/7904068875</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                                        adityamishra9667@gmail.com</ListItemContent>
                                </ListItem>
                            </List>
                        </div>                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default contact
