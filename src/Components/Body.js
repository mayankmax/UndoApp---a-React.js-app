import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../manualStyle/Body.css';

class Stack {
  //let top;
  constructor() {
    this.inputLength = 0;
    this.items = [];
    this.top = 0;
    
  }
  
  getLength() {
    return this.top;
  }
  
  push(item) {
    // document.getElementById("wordcount").innerHTML = item;
    
    this.items.push(item);
    this.top = this.top + 1;
  }
  
  pop() {
    if(this.top > 0) {
      this.top = this.top - 1;
    }
    
    return (this.items.pop());
  }
  
  peek()
  {
      // return the top most element from the stack
      // but does'nt delete it.
      return(this.items[this.top - 1]);
  }
}

function Body() {

  const state = {button:1};

  var s = new Stack();
  var Redo  = new Stack();
  var i=0;
  const [textname , setName] = useState('');

  var myText = textname.trim();
    
    //var wordsArray = myText.split(/\s+/g+" ");
    var output = "";
    //var wordsArray = myText.split(" ");
    for(;i<myText.length;i++)
    {
      if(textname[i] === ' ')
      {
        console.log(output);
        //let temp = toString(output);
        s.push(output);
        output = "";
      }
      else
      output = output+myText[i];
    }
    s.push(output);
  // below function will be called when user
  // click on submit button .
  const handleSubmit=(e)=>{

    e.preventDefault();

    if (state.button === 1) {
      var a = s.peek();
     var c = a.length;
     Redo.push(a);
     s.pop();
     var rekensom  = document.getElementById('form2').value;
     document.getElementById('form2').value=rekensom.substring(0,rekensom.length-c-1);
      document.getElementById("wordcount").innerHTML = a;
    }
    if (state.button === 2) {

      var b = Redo.peek();
      //var c = a.length;
      s.push(b);
      Redo.pop();
      var rekensom  = document.getElementById('form2').value;
      //document.getElementById('form2').value=rekensom.substring(0,rekensom.length-c-1);
       document.getElementById("wordcount1").innerHTML = b;
      
    }

     //console.log(textname);
     
    
      // display alert box with user
      // 'name' and 'email' details .
     
    

  }

  return (
    <Container id = "form1">
      <Row>
        <Col>
        <Form onSubmit={(e) => {handleSubmit(e)}}>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Start Writing.....</Form.Label>
                <Form.Control as="textarea" value={textname} required onChange={ e => setName(e.target.value)} rows={3} id ="form2" />
            </Form.Group>
        
            <div className="mb-2">
                <Button variant="primary" size="lg" onClick={() => (state.button = 1)}
        type="submit"
        name="btn1"
        value="Undo Me">
                  Undo Me
                </Button>
                <Button variant="primary" size="lg" onClick={() => (state.button = 2)}
        type="submit"
        name="btn2"
        value="Redo Me">
                  ReDo Me
                </Button>
            </div>
            
       </Form>
       <span id="wordcount"></span>
       <span id="wordcount1"></span>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;