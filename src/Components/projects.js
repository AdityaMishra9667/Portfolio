import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, Card} from 'react-mdl'

class projects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             activeTab: 0
        }
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                 <div className='projects-grid'>
                    <Grid className="pygame">
                        <Cell col={4}>
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'black', height:'176px', background:'url(https://logodix.com/logo/2058857.png) center'}}>
                                Pygame Project #1
                            </CardTitle>
                            <CardText>
                                Breadth First Search Visualizer
                            </CardText>
                            <CardActions border>
                                <Button colored ripple href='https://github.com/AdityaMishra9667/Pygame-Experiments/blob/master/BFS.py'>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color:'#69bdd2'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>

                        <Cell col={4}>
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'black', height:'176px', background:'url(https://logodix.com/logo/2058857.png) center'}}>
                                Pygame Project #2
                            </CardTitle>
                            <CardText>
                                Pendulum Physics
                            </CardText>
                            <CardActions border>
                                <Button colored ripple href='https://github.com/AdityaMishra9667/Pygame-Experiments/blob/master/Pendulum.py'>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color:'#69bdd2'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>

                        <Cell col={4}>
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'black', height:'176px', background:'url(https://logodix.com/logo/2058857.png) center'}}>
                                Pygame Project #3
                            </CardTitle>
                            <CardText>
                                Cloth Physics
                            </CardText>
                            <CardActions border>
                                <Button colored ripple href='https://github.com/AdityaMishra9667/Pygame-Experiments/blob/master/Cloth.py'>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color:'#69bdd2'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>

                        <Cell col={4}>
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'black', height:'176px', background:'url(https://logodix.com/logo/2058857.png) center'}}>
                                Pygame Project #4
                            </CardTitle>
                            <CardText>
                                Particle Physics
                            </CardText>
                            <CardActions border>
                                <Button colored ripple href='https://github.com/AdityaMishra9667/Pygame-Experiments/blob/master/particles.py'>GitHub</Button>
                            </CardActions>
                            <CardMenu style={{color:'#69bdd2'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>                       
                    </Grid>                     
                 </div>
            )
        }

        else if(this.state.activeTab === 1){
            return(
                <div className='projects-grid'>
                  <Grid className="experiment">
                      <Cell col={4}>
                        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                            <CardTitle style={{color:'white', height:'176px', background:'url(https://miro.medium.com/max/3000/1*m2gDBT_nc-iE7R4AM3sHBQ.jpeg) center'}}>
                            Machine Learning Project #1
                            </CardTitle>
                            <CardText>
                                Cats and Dogs Classification
                            </CardText>
                            <CardActions border>
                                <Button colored ripple>
                                <a href="https://github.com/AdityaMishra9667/Machine-Learning/tree/master/Cats%20and%20Dogs%20Dataset" target="popup">GitHub</a> 
                                </Button>
                            </CardActions>
                            <CardMenu style={{color:'#69bdd2'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                      </Cell>
                  
                        <Cell col={4}>
                            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                                <CardTitle style={{color:'white', height:'176px', background:'url(https://miro.medium.com/max/3000/1*m2gDBT_nc-iE7R4AM3sHBQ.jpeg) center'}}>
                                    Machine Learning Project #2
                                </CardTitle>
                                <CardText>
                                    Face Recognition with OpenCV
                                </CardText>
                                <CardActions border>
                                    <Button colored ripple>
                                    <a href="https://github.com/AdityaMishra9667/Machine-Learning/tree/master/Image%20Detection" target="popup">GitHub</a>                                
                                    </Button>
                                </CardActions>
                                <CardMenu style={{color:'#69bdd2'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>

                        <Cell col={4}>
                            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                                <CardTitle style={{color:'white', height:'176px', background:'url(https://miro.medium.com/max/3000/1*m2gDBT_nc-iE7R4AM3sHBQ.jpeg) center'}}>
                                    Machine Learning Project #3
                                </CardTitle>
                                <CardText>
                                    AI plays Flappy Birds
                                </CardText>
                                <CardActions border>
                                    <Button colored ripple>
                                    <a href="https://github.com/AdityaMishra9667/Machine-Learning/tree/master/FlappyBirdAI" target="popup">GitHub</a>                                
                                    </Button>
                                </CardActions>
                                <CardMenu style={{color:'#69bdd2'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            )
        }        
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Pygame</Tab>
                    <Tab>Machine Learning</Tab>
                </Tabs>
                <div className="hello">
                {this.toggleCategories()}
                    </div>
            </div>
        )
    }
}

export default projects
