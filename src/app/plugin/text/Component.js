import React  from 'react';
import map from 'lodash/collection/map';
import cloneDeep from 'lodash/lang/cloneDeep';
import async from 'async';
import HTMLParser from './HTMLParser';
import isEmpty from 'lodash/lang/isEmpty';
import Actions from 'app/actions/Partition';
import find from 'lodash/collection/find';

import {ProseMirror} from "prosemirror/dist/edit";
import "prosemirror/dist/inputrules/autoinput";
import "prosemirror/dist/menu/inlinemenu";
import "prosemirror/dist/menu/buttonmenu";
import "prosemirror/dist/menu/menubar";

function unwrap(elements) {
    async.each(elements, (el) => {
        // get the element's parent node
        var parent = el.parentNode;

        // move all children out of the element
        while (el.firstChild) {
            parent.insertBefore(el.firstChild, el);
        }

        // remove the empty element
        parent.removeChild(el);
    });
}

export default class Component extends React.Component {
    componentWillMount() {
        this.setState({
            data: map(this.props.sections, (s) => {
                var attrs = map(s.attrs, (v, k) => (k + '="' + v + '"')).join(' ') || '',
                    tag = (s.data.tag || 'p'),
                    elem = (tag + ' ' + attrs).trim();
                return '<' + elem + '>' + s.data.inner + '</' + tag + '>';
            }).join(''),
            type: this.props.type || 'html'
        });
    }

    //shouldComponentUpdate(nextProps, nextState) {
    //    var e = React.findDOMNode(this.refs.area);
    //    return e.innerHTML !== nextState.inner;
    //}

    componentDidMount() {
        var editable = React.findDOMNode(this.refs.area),
            editor = new ProseMirror({
                place: editable,
                menuBar: false,
                inlineMenu: true,
                buttonMenu: true,
                autoInput: true,
                doc: this.state.data,
                docFormat: this.state.type
            });
        this.setState({editor: editor});

        editor.on('change', () => {
            let model = editor.getContent('json');

            // Transforms ProseMirror content model into a section.
            model = map(model.content, (section) => ({plugin: 'text', data: {...model, content: section}}));

            // Tell the store that something changed
            this.props.store.dispatch({
                type: Actions.replace,
                with: model,
                model: 'json'
            });
        });

        //var editor = new Editor(editable, {toolbar: {buttons: ['bold', 'italic', 'anchor', 'h2', 'h3', 'quote']}});
        //this.setState({editor: editor});
        //editor.subscribe('editableInput', (event, editable) => {

        // TODO FIXME upstream https://github.com/yabwe/medium-editor/issues/543
        //unwrap(editable.querySelectorAll(':scope [style]'));

        // Sanitize the current input
        //let sections = HTMLParser.parse(editable.querySelectorAll(':scope > *'), 'placeholder');

        // TODO FIXME this is a sort-of hack to prevent re-rendering the sections on every input change.
        //let shouldUpdate = !isEmpty(find(sections, (s) => s.plugin === 'placeholder'));
        //if (shouldUpdate) {
        //    this.props.store.dispatch({
        //        type: Actions.replace,
        //        // FIXME make this configurable or something
        //        with: sections
        //    });
        //}
        //});
    }

    render() {
        /*jshint ignore:start */
        return <div ref="area"/>;
        /*jshint ignore:end */
    }
}
