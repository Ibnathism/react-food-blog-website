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
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const commentList = comments.map(i => {
            var date = new Date(i.date);
            let formatted_date = months[date.getMonth()] +" "+ date.getDate()+", "+  date.getFullYear();
            return(

                <div key={i.id}>
                    <ul className="list-unstyled">
                    <li>{i.comment}</li>
                    </ul>
                    <ul className="list-unstyled">
                    <li>-- {i.author} , {formatted_date}</li>
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
            <div>
                {this.renderDish(dish)}
            </div>
        );
    }

}

export default DishDetail;