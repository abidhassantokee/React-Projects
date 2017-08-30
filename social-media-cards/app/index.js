var data = {
    cards: [
        {
            photo: 'http://placehold.it/250x150',
            title: 'Card Title 1',
            body: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..',
            footer: 'Last updated 3 minutes ago'
        },
        {
            photo: 'http://placehold.it/250x150',
            title: 'Card Title 2',
            body: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..',
            footer: 'Last updated 3 minutes ago'
        },
        {
            photo: 'http://placehold.it/250x150',
            title: 'Card Title 3',
            body: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..',
            footer: 'Last updated 3 minutes ago'
        }
    ]
}

class CardPhoto extends React.Component {
    render() {
        return (
            <img className="card-img-top" src={this.props.photoSrc} alt="Card Thumbnail"/>
        )
    }
}

class CardBlockTitle extends React.Component {
    render() {
        return (
            <h4 className="card-title">{this.props.cardBlockTitle}</h4>
        )
    }
}

class CardBlockBody extends React.Component {
    render() {
        return (
            <p className="card-text">
                {this.props.cardBlockBody}
            </p>
        )
    }
}

class CardBlock extends React.Component {
    render() {
        return (
            <div className="card-block">
                <CardBlockTitle cardBlockTitle = {this.props.cardTitle}/>
                <CardBlockBody cardBlockBody = {this.props.cardBody}/>
            </div>
        )
    }
}

class CardFooter extends React.Component {
    render() {
        return (
            <div className="card-footer">
                <small className="text-muted">{this.props.footerNote}</small>
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-md-6 col-lg-3">
                <div className="card">
                    <CardPhoto photoSrc = {this.props.photo}/>
                    <CardBlock
                        cardTitle = {this.props.title}
                        cardBody = {this.props.body}
                    />
                    <CardFooter footerNote = {this.props.footer}/>
                </div>
            </div>
        )
    }
}

class Cards extends React.Component {
    printCards() {
        return data.cards.map(function(card){
            return(
                <Card photo={card.photo} title={card.title} body={card.body} footer={card.footer}/>
            )
        });

    }

    render() {
        return (
            <div className="row">
                {this.printCards()}
            </div>
        )
    }
}

ReactDOM.render(
    <Cards/>,
    document.getElementById('cards')
);