module Options {
  let component = ReasonReact.statelessComponent("Options");

  let make = (_children) => {
    ...component,
    render: _self => <div>
      {ReasonReact.stringToElement("Options!")}
    </div>
  };
};

ReactDOMRe.renderToElementWithId(<Options />, "root");
