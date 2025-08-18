
// import React from "react";
// import ReactDOM from "react-dom/client";


// const parent = React.createElement('div',
//     { id: 'parent' },
//     React.createElement('div',
//         { id: 'child' },
//         [React.createElement('h1',
//             {}, "I am the H1 Tag!"
//         ),
//         React.createElement('h2',
//             {}, "I am the H2 Tag!"
//         )
//         ]
//     )
// )

// const parent1 = React.createElement('div',
//     { id: 'parent' },
//     [React.createElement('div',
//         { id: 'child1' },
//         [React.createElement('h1',
//             {}, "I am the H1 Tag!"
//         ),
//         React.createElement('h2',
//             {}, "I am the H2 Tag!"
//         )
//         ]
//     ),
//     React.createElement('div',
//         { id: 'child2' },
//         [React.createElement('h3',
//             {}, "I am the H3 Tag!"
//         ),
//         React.createElement('h4',
//             {}, "I am the H4 Tag!"
//         )
//         ]
//     )
//     ]
// )


// const heading = React.createElement("h1", {
//     id: "heading",
//     class: 'h1-01',
//     xyz: 'abc'
// }, "Hello World from React!");
// console.log(parent1);
// const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(parent1);

// // const heading = document.createElement("h1");
// // heading.innerHTML = "Hello World From JavaScript!"
// // const root = document.getElementById("root");
// // root.appendChild(heading)


// //  React Element/ react.createElement --> Object==> Html Element when we rendor to dom

// const heading = React.createElement("h1", { id: "heading" }, "Namaste!");
// console.log(heading);

// // H1 tag using JSX:
// const jsxHeading = <h1 id="heading">Namaste React Using JSX</h1>;

// const number = 10000;

// // React Component
// const HeadingComponent = () => {
//   return (
//     <div>
//       {number}
//       <h1 id="heading">Hello I am React Component</h1>
//     </div>
//   );
// };

// // const HeadingComponent = () => (<h1 id="heading">Hello I am React Component</h1>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);