import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    

    renderDish(dish) {
        if (dish!=null) {
            return(
                <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle><h5>{dish.name}</h5></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                </div>
                </div>
            )
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
        
        const commentList = comments.map(i => {
            return(

                <div key={i.id}>
                    <ul className="list-unstyled">
                    <li>{i.comment}</li>
                    </ul>
                    <ul className="list-unstyled">
                    <li>-- {i.author} , 
                    {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(i.date)))}
                    </li>
                    </ul>
                </div>
            )
        })
        return(
            <div> 
                <h4>Comments</h4>
                {commentList}
            </div>
            
        )
    }
    render() {
        const dish = this.props.selectedDish;
        return(        
            <div className ="container">
                {this.renderDish(dish)}
            </div>
            
        );
    }

}

export default DishDetail;