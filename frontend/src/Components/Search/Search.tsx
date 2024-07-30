import React, { useState, ChangeEvent, MouseEvent, SyntheticEvent } from 'react';

interface Props {
    onClick: (e: SyntheticEvent) => void;
    search: string|undefined;
    handleChange : (e:ChangeEvent<HTMLInputElement>) => void

};

const Search: React.FC<Props> = ({
    onClick,
    search, 
    handleChange}): JSX.Element => {

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search..."
            />
            <button onClick={(e) => console.log(e)} />
        </div>
    );
};

export default Search;
