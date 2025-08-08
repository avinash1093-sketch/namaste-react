const parent = React.createElement('div',
    { id: 'parent' },
    React.createElement('div',
        { id: 'child' },
        [React.createElement('h1',
            {}, "I am the H1 Tag!"
        ),
        React.createElement('h2',
            {}, "I am the H2 Tag!"
        )
        ]
    )
)

const parent1 = React.createElement('div',
    { id: 'parent' },
    [React.createElement('div',
        { id: 'child1' },
        [React.createElement('h1',
            {}, "I am the H1 Tag!"
        ),
        React.createElement('h2',
            {}, "I am the H2 Tag!"
        )
        ]
    ),
    React.createElement('div',
        { id: 'child2' },
        [React.createElement('h3',
            {}, "I am the H3 Tag!"
        ),
        React.createElement('h4',
            {}, "I am the H4 Tag!"
        )
        ]
    )
    ]
)


const heading = React.createElement("h1", {
    id: "heading",
    class: 'h1-01',
    xyz: 'abc'
}, "Hello World from React!");
console.log(parent1);
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent1);