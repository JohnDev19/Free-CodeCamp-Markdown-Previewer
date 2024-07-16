// app.jsx
const initialMarkdown = `# Welcome to my Markdown Previewer!

## This is a sub-heading...

[Visit FreeCodeCamp](https://www.freecodecamp.org)

Here's some inline code: \`<div></div>\`

\`\`\`
// This is a code block:
function example() {
  return "Hello, World!";
}
\`\`\`

- This is a list item

> This is a blockquote

![FreeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**This text is bold**
`;

marked.setOptions({
  breaks: true,
  gfm: true,
});

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: initialMarkdown
    };
  }

  handleChange = (e) => {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Markdown Previewer</h1>
        <div className="editor-container">
          <h2>Editor</h2>
          <textarea 
            id="editor" 
            value={this.state.markdown}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="preview-container">
          <h2>Preview</h2>
          <div 
            id="preview"
            dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}
          ></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('app'));