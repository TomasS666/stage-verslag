import React, { useState } from 'react';
// import classnames from 'classnames';
// import { Link } from 'gatsby';

const Article = ({title, content}) => {


    const [count, setCounter]  = useState(1);

function test () {
    setCounter(count + 1)
}

    return (
     <article>
         <h2>{ title }</h2>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
        <button id="counter"  onClick={test}>
            {count}
        </button>
     </article>
    );
};

export default Article; 