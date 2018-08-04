class Mirror extends React.Component {
  componentDidMount() {
    this.editor = CodeMirror.fromTextArea(document.getElementById('sqlPane'), {
      mode: 'text/x-pgsql',
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: false,
      matchBrackets: true,
      autofocus: true,
      lineWrapping: true,
      theme: 'monokai',
    });

    this.editor.replaceRange('\n', { line: 2, ch: 0 }); // create newline for editing
    this.editor.setCursor(2, 0);
  }

  getSQL() {
    return this.editor.getDoc().getValue();
  }

  render() {
    return (
      <textarea id="sqlPane" className="form-control" value="SELECT * FROM states" readOnly></textarea>
    )
  }
}