import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
import Education from './Education'
import Experience from './Experience'

class resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                                src="https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em', textAlign:'center'}}>Aditya Mishra</h2>
                        <h4 style={{color:'rgb(52, 164, 255)', textAlign:'center'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%',marginLeft:'115px'}}/>
                        <p style={{textAlign:'center'}}>
                            I like to learn new technologies and enjoy learning them. Seeking a full time job
                            in the field of Software Engineering or Machine Learning where I could
                            learn something new everyday and apply my skills and knowledge to create
                            something new and beneficial or entertaining
                        </p>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%', marginLeft:'115px'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2015}
                            endYear={2019}
                            collegeName="VIT"
                            collegeDescription="Graduated from Vellore Institute of Technology (Vellore Campus) with a CGPA of 7.31"
                        />

                         <Education 
                            startYear={2014}
                            endYear={2015}
                            collegeName="LBS Sr Sec School"
                            collegeDescription="Completed 12th grade from Lal Bahadur Shastri Senior Secondary school with 66%"
                        />
                        
                        <Education 
                            startYear={2011}
                            endYear={2012}
                            collegeName="Bloom Public School"
                            collegeDescription="Completed 10th grade from Bloom public school with CGPA of 8.0"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Experience 
                        skill="C++"
                        progress={88}
                        />

                        <Experience 
                        skill="Python"
                        progress={90}
                        />

                        <Experience 
                        skill="JavaScript"
                        progress={72}
                        />

                        <Experience 
                        skill="C#"
                        progress={75}
                        />

                        <Experience 
                        skill="React"
                        progress={65}
                        />

                        <Experience 
                        skill="Tensorflow/Keras"
                        progress={70}
                        />

                        <Experience 
                        skill="Unity 3D"
                        progress={74}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default resume
