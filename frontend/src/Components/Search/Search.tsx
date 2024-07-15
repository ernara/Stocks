import React, { useState, ChangeEvent } from 'react';

type Props = {};

const Search: React.FC<Props> = (): JSX.Element => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search..."
            />
        </div>
    );
};

export default Search;
