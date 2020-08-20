import React, { Component } from 'react'
import  {Grid, Cell} from 'react-mdl'

class mainpage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="maingrid">
                   <Cell col={12}>
                       <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                       alt="default"
                       className="default-image"
                       />

                       <div className="banner-text">
                            <h1>Software Engineer</h1>
                            <hr/>

                            <p>C++ | Python | C# | JavaScript | Machine Learning | Tensorflow , Keras | OpenCV | HTML/CSS | React | Unity 3D</p>

                            {/* <LinkedIn> */}
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/aditya-mishra-97797b119/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                            {/* <GitHub> */}
                                <a href="https://github.com/AdityaMishra9667" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                       </div>
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default mainpage
