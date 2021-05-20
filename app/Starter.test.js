import React from 'react';
import renderer from 'react-test-renderer';
import AppText from './components/AppText';

test("trivially true", () => {
    expect(1).toBe(1);
});

test("AppTest will render", () => {
    const tree = renderer.create(<AppText/>).toJSON();
    console.log(tree.props.style);
    expect(tree.props.style[0].fontSize).toBe(20);
    expect(tree.props.style[0].justifyContent).toBe("center");
    expect(tree.props.style[0].alignItems).toBe("center");
    expect(tree.props.style[0].fontFamily).toBe("Cochin");
});

test("Apptext contains text", () => {
    const tree = renderer.create(<AppText>Text data can be input</AppText>).toJSON();
    expect(tree.props.style[0].fontSize).toBe(20);
    expect(tree.props.style[0].fontFamily).toBe("Cochin");
    expect(tree.children.includes("Text data can be input"));
});

test("SnapShot expect for no changes", () => {
    const tree = renderer.create(<AppText/>).toJSON();
    expect(tree).toMatchSnapshot();
});



