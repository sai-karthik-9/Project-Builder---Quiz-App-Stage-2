import React, { Component } from 'react';
import '../App.css';
import questions from './quizQuestion.json';

export default class QuizComponent extends Component {
    constructor(props){
      super(props);
      this.state={
        questions:questions,
        currentQuestion:{},
        nextQuestion:{},
        prevQuestion:{},
        currentQuestionIndex:0,
      }
    }

    componentDidMount(){
      this.display(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.prevQuestion);
    }

    display=(questions,currentQuestion,nextQuestion,prevQuestion)=>{
      let {currentQuestionIndex}=this.state
      if(this.state.questions.length!==0){
      questions=this.state.questions;
      currentQuestion=questions[currentQuestionIndex];
      nextQuestion=questions[currentQuestionIndex+1];
      prevQuestion=questions[currentQuestionIndex-1];

      this.setState({
        currentQuestion,
        nextQuestion,
        prevQuestion,
      })
    }
    }

    nextbtn=()=>{
      if(this.state.nextQuestion !== undefined){
        this.setState(prevState=>({currentQuestionIndex:prevState.currentQuestionIndex+1}),()=>{this.display(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.prevQuestion)})
      }
    }

    prevbtn=()=>{
      if(this.state.prevQuestion !== undefined){
        this.setState(prevState=>({currentQuestionIndex:prevState.currentQuestionIndex-1}),()=>{this.display(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.prevQuestion)})
      }

    }

    quitbtn(){
      if(window.confirm("Are you sure you Want to quit?")){
        window.location.reload(false)
      }  
    }

  render() {
    const {currentQuestion}=this.state;
    return (
        <div className='container'>
          <h2>Question</h2>

          <div>
            <span className='questionNo'>1 of 15</span>
            <h2>{currentQuestion.question}</h2>
          </div>

          <div className='optionBox'>
            <p className='option'>{currentQuestion.optionA}</p>
            <p className='option'>{currentQuestion.optionB}</p>
          </div>

          <div className='optionBox'>
            <p className='option'>{currentQuestion.optionC}</p>
            <p className='option'>{currentQuestion.optionD}</p>
          </div>

          <div className='buttonBox'>
            <button className='btn pbtn' onClick={this.prevbtn}>Previous</button>
            <button className='btn nbtn' onClick={this.nextbtn}>Next</button>
            <button className='btn qbtn' onClick={this.quitbtn}>Quit</button>
          </div>

        </div>
    )
  }
}
