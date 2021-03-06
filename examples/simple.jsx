import React, { Component } from 'react';
import Pop from '../src/pop.js';
import Button from 'rs-button';

export default class Example extends Component{
    render() {
        return (
            <div>
                <Pop
					trigger="click"
                    content="这是一个">
                    <Button>Click top</Button>
                </Pop>
                <Pop
                    content="这是一个"
                    title="hello">
                    <Button>Hover top</Button>
                </Pop>

                <hr />

                <Pop
                    place="right"
                    content="这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个"
                    title="hello"
                    trigger="click">
                    <Button>click right</Button>
                </Pop>
                <Pop
                    place="right"
                    content="这是一个"
                    title="hello">
                    <Button>Hover right</Button>
                </Pop>

                <hr />

                <Pop
                    place="bottom"
                    content="这是一个"
                    title="hello"
                    trigger="click">
                    <Button>Click bottom</Button>
                </Pop>
                <Pop
                    place="bottom"
                    content="这是一个"
                    title="hello">
                    <Button>Hover bottom</Button>
                </Pop>

                <hr />

                <Pop
                    place="left"
                    content="这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个这是一个"
                    title="hello"
                    trigger="click">
                    <Button>Click left</Button>
                </Pop>
                <Pop
                    place="left"
                    content="这是一个"
                    title="hello">
                    <Button>Hover left</Button>
                </Pop>
            </div>
        )
    }
};
