import React from 'react';

export default ({add}) => {
    let input ='';
    return (
        <div>
            <form>

                <input type="text" id="myInput" placeholder="Title..." ref={node => {
                    input = node;
                }} />

                <span className="addBtn" onClick={() => {
                    add(input.value);
                    input.value = '';
                }}>
                Add
            </span>

            </form>

        </div>
    );

}