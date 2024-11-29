import React from 'react';

function Links({ title, linksData }) {
    return (
        <div>
            <h3 className='text-grey-color-60 font-medium mb-2'>{title}</h3>
            <ul>
                {
                    linksData.map((link, index) => <li key={index}>
                        <a className='block py-2 sm:hover:underline' href={link.href}>{link.text}</a>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Links;