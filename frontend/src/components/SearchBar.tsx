import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchQuery, setSearchQuery] = useState('');

    const keywords = [
        '総合科学部', '総合科学部棟', '総合科学部講義室', 'そうかとう', "L102", '工学部', '工学部第3類', '工学部第3類A4棟', '工学部講義室', '統合生命科学研究科', '先端物質科学研究科', '先端物質科学研究科講義室', '教育学部', '教育学部K棟', '教育学部講義室', '文学部', '文学部棟', '文学部講義室', 'ぶんがくぶ'
    ]
        ;

    const filteredKeywords = searchQuery
        ? keywords.filter(keyword => keyword.includes(searchQuery))
        : [];

    const handleSearchChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
        setSearchQuery(newValue || '');
        onSearch(newValue || '');
    };

    return (
        <div style={{ margin: '10px' }}>
            <Autocomplete
                freeSolo
                options={filteredKeywords}
                inputValue={searchQuery}
                onInputChange={handleSearchChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        fullWidth
                        placeholder="学部、建物、講義室で検索(e.g., 総合科学部）"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
        </div>
    );
}

export default SearchBar;
