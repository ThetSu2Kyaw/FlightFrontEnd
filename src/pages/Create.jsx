import React from 'react';
import '../assets/scss/Create.scss';

export default function Create() {
    return (
        <div className='create'>
            <form className='create-form'>
                <h2>Add A Book</h2>
                <div>
                    <input type="text" placeholder="Name" />
                </div>
                <div>
                    <input type="text" placeholder="Description" />
                </div>
                <div>
                    <input type="text" placeholder="Categories" />
                </div>
                <div className='btn'>
                    <button>Create</button>
                </div>
            </form>
        </div>
    )
}
