var data = {
    cards: [{
        photo: 'http://placehold.it/250x150',
        title: 'Card Title 1',
        body: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..',
        footer: 'Last updated 3 minutes ago'
    }, {
        photo: 'http://placehold.it/250x150',
        title: 'Card Title 2',
        body: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..',
        footer: 'Last updated 3 minutes ago'
    }, {
        photo: 'http://placehold.it/250x150',
        title: 'Card Title 3',
        body: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..',
        footer: 'Last updated 3 minutes ago'
    }]
};

class CardPhoto extends React.Component {
    render() {
        return React.createElement('img', { className: 'card-img-top', src: this.props.photoSrc, alt: 'Card Thumbnail' });
    }
}

class CardBlockTitle extends React.Component {
    render() {
        return React.createElement(
            'h4',
            { className: 'card-title' },
            this.props.cardBlockTitle
        );
    }
}

class CardBlockBody extends React.Component {
    render() {
        return React.createElement(
            'p',
            { className: 'card-text' },
            this.props.cardBlockBody
        );
    }
}

class CardBlock extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'card-block' },
            React.createElement(CardBlockTitle, { cardBlockTitle: this.props.cardTitle }),
            React.createElement(CardBlockBody, { cardBlockBody: this.props.cardBody })
        );
    }
}

class CardFooter extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'card-footer' },
            React.createElement(
                'small',
                { className: 'text-muted' },
                this.props.footerNote
            )
        );
    }
}

class Card extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'col-xs-12 col-md-6 col-lg-3' },
            React.createElement(
                'div',
                { className: 'card' },
                React.createElement(CardPhoto, { photoSrc: this.props.photo }),
                React.createElement(CardBlock, {
                    cardTitle: this.props.title,
                    cardBody: this.props.body
                }),
                React.createElement(CardFooter, { footerNote: this.props.footer })
            )
        );
    }
}

class Cards extends React.Component {
    printCards() {
        return data.cards.map(function (card) {
            return React.createElement(Card, { photo: card.photo, title: card.title, body: card.body, footer: card.footer });
        });
    }

    render() {
        return React.createElement(
            'div',
            { className: 'row' },
            this.printCards()
        );
    }
}

ReactDOM.render(React.createElement(Cards, null), document.getElementById('cards'));