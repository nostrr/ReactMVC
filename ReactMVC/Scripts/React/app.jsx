class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { welcome: "Добро пожаловать на сайт!" };
    }
    render() {
        return <h1>{this.state.welcome}</h1>;
    }
}

var href = location.origin;

class Href extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <a href={href + '/' + this.props.url}>{this.props.name}</a>
    }
}

class ListHref extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <ul>
                <li><Href name="Index" url="Home/Index" /></li>
                <li><Href name="Content" url="Home/Content" /></li>
            </ul>
        </div>
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: 'Титульные слова' };
    }
    render() {
        return <div><h1>{this.state.title}</h1></div>
    }
}

class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { class: "off", label: 'Нажми' };
        console.log('constructor');

        this.press = this.press.bind(this);
    }
    press(e) {
        let className = (this.state.class == "off") ? "on" : "off";
        this.setState({ class: className });
        alert(e);
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
    }
}

ReactDOM.render(<div>
    <Title />
    <ListHref />
</div>,
    document.getElementById("content")
);

ReactDOM.render(
    <Hello />,
    document.getElementById("hello")
)

ReactDOM.render(
    <ClickButton />,
    document.getElementById("buttonPrim")
)

