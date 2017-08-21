/**
 * Created by KostyaGromov on 21.08.2017.
 */
var Note = React.createClass({
    render: function() {
        return (
            <div className="note"> Note </div>
        );
    }
});

var NoteEditor = React.createClass({
    render: function () {
        return (
            <div className="note-editor"> NoteEditor </div>
        );
    }
});

var NotesGrid = React.createClass({
    render: function () {
        return (
            <div className="note-grid">
                {
                    this.props.notes.map(function (note) {
                        return <Note key={note.id} color={note.color}> {note.text} </Note>;
                    })
                }
            </div>
        );
    }
});

var NotesApp = React.createClass({
    getInitialState: function () {
        return {
            notes: [
                {
                id: 0,
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing softw",
                color: "#ffd700"
            }, {
                id: 1,
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing softw",
                color: "#ffb6c1"
                }
            ]
        }
    },
    render: function () {
        return (
            <div className="notes-app">
                {/*<NoteEditor />*/}
                <NotesGrid notes={this.state.notes} />
            </div>
        );
    }
});



ReactDOM.render(
    <NotesApp />,
    document.getElementById('content')
);