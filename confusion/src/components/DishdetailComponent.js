import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    render() {
        return(
            <div className="row">
                {this.renderDish(this.state.selectedDish)}
            </div>
        );
    }

}

export default DishDetail;