import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    
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
                </div>
                
            );
        }
        else{
            return (
            <div>
            </div>
            );
        }
        
        
        
    }
    
    const DishDetail = (props) => {
        if(props.dish!=null){
            return(        
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