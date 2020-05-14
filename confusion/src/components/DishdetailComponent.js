import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, Label, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val)  => !(val) || (val.length <= len);
const minLength = (len) => (val)  => (val) && (val.length >= len);


    
    function RenderDish({dish}) {
        console.log('DishDetail render invoked');
        if (dish!=null) {
            return(
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle><h5>{dish.name}</h5></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            )
        }
        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}){
        if(comments!=null){
            const commentList = comments.map((i) => {
                return(
                    <div>
                        <ul className="list-unstyled">
                        <li>{i.comment}</li>
                        </ul>
                        <ul className="list-unstyled">
                        <li>-- {i.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(i.date)))}
                        </li>
                        </ul>
                    </div>
                )
            });
            return(
                <div> 
                    <h4>Comments</h4>
                    {commentList}
                    <CommentForm/>
                </div>
                
            );
        }
        else{
            return (
            <div>
                <CommentForm/>
            </div>
            );
        }
        
        
        
    }

    class CommentForm extends Component {
        constructor(props){
            super(props);
            this.state ={
                isModalOpen: false
            };
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
        handleSubmit(values) {
            console.log("Current State is:  "+ JSON.stringify(values));
            alert("Current State is: " + JSON.stringify(values));
        }
        
        render() {
            return(
                <div>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-pencil fa-lg"></span> Submit Comment
                    </Button>
                    <Modal isOpen = {this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="container">
                            <Row className="form-group">
                                <Label for = "select">Rating</Label>
                                <Control.select model = ".select" name = "select"
                                    className = "form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label for = "username">Your Name</Label>
                                <Control.text model=".username" id="username" name="username"
                                placeholder="Your Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}/>
                                <Errors
                                    className = "text-danger"
                                    model = ".username"
                                    show = "touched"
                                    messages = {{
                                        required: 'Required',
                                        minLength: ' Must be at least 3 characters',
                                        maxLength: ' Must be 15 characters or less'
                                    }}/>
                            </Row>
                            <Row className="form-group">
                                <Label for = "message">Comment</Label>
                                <Control.textarea model =".message" id = "message" name = "message"
                                row = "6"
                                className = "form-control"/>
                            </Row>
                            <Row className="form-group">
                                <Button type = "submit" color="primary">Submit</Button>
                            </Row>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </div>

            );
        }
    }
    
    const DishDetail = (props) => {
        if(props.dish!=null){
            return(   
                <>     
                <div className ="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className = "row">
                        <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                            <RenderDish dish = {props.dish}/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                            <RenderComments comments = {props.comments} />
                            
                        </div>
                    </div>
                </div>
                
                
                </>
    
            );
        }
        else {
            return(
                <div>

                </div>
            )
        }
        
    }
        
    


export default DishDetail;