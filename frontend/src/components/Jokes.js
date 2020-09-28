import React, { useState } from 'react';
// import classnames from 'classnames';
// import { Link } from 'gatsby';
import { graphql, useStaticQuery } from "gatsby"
const Joke = () => {

	// const {
	// 	example: {
	// 		jokes: {
	// 			id, 
	// 			type,
	// 			setup,
	// 			punchline
	// 		}
	// 	}
	// }
	const test = useStaticQuery(graphql`
    query {
		example {

			jokes {
				id
				type
				setup
				punchline
			}
		}
    }
  `)


	// const [count, setCounter]  = useState(1);
	
	console.log(test)
const jokes = test.example.jokes;
// function test () {
//     setCounter(count + 1)
// }

    return (
			
     <article>
      {jokes.map(({setup, punchline}) => {
             return (<div>{setup}<div>{punchline}</div></div>)
	})}	
     </article>
    );
};

export default Joke; 