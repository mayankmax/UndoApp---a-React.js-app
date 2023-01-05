import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../manualStyle/Body.css';

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  
  getLength() {
    return this.count;
  }
  
  push(item) {
    // document.getElementById("wordcount").innerHTML = item;
    this.items.push(item);
    this.count = this.count + 1;
  }
  
  pop() {
    if(this.count > 0) {
      this.count = this.count - 1;
    }
    
    return this.items.pop();
  }
  
  peek()
  {
      // return the top most element from the stack
      // but does'nt delete it.
      return this.items[this.items.length - 1];
  }
}

function Body() {

  var s = new Stack();
   

  const [textname , setName] = useState('');



  var i=0;
  // function to update state of name with
  // value enter by user in form
  const handleChange =(e)=>{
    setName(e.target.value);
    
    var myText = e.target.value.trim();
    //var wordsArray = myText.split(/\s+/g+" ");
    var output = "";
    //var wordsArray = myText.split(" ");
    for(;i<myText.length;i++)
    {
      if(myText[i] === " ")
      {
        s.push(output);
        output = "";
      }
      output +=myText[i];
    }
    
    // var words = wordsArray.length;
    // s.push(wordsArray);
   
  }

  // below function will be called when user
  // click on submit button .
  const handleSubmit=(e)=>{

    // var a = s.peek();

    // s.pop();

    
    
      // display alert box with user
      // 'name' and 'email' details .
     
    e.preventDefault();

  }

  return (
    <Container id = "form1">
      <Row>
        <Col>
        <Form onSubmit={(e) => {handleSubmit(e)}}>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Start Writing.....</Form.Label>
                <Form.Control as="textarea" value={textname} required onChange={(e) => {handleChange(e)}} rows={3} id ="form2" />
            </Form.Group>
        
            <div className="mb-2">
                <Button variant="primary" size="lg" type="submit" value="Submit">
                  Undo Me
                </Button>
            </div>
            
       </Form>
       <span id="wordcount"></span>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;