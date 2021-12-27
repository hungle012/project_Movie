import React, { useState } from "react";
import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

const TextFieldCustom = styled(TextField)({
    '& input + fieldset': {
        borderColor: '#fbbd61',
        borderWidth: 2,
    },
    '& input:valid:hover + fieldset': {
        borderColor: '#fbbd61',
        borderWidth: 2,
    },
    '& input:invalid:hover + fieldset': {
        borderColor: '#fbbd61',
        borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
        borderWidth: 2,
        borderColor: '#fbbd61',
    },
    '& input:invalid:focus + fieldset': {
        borderWidth: 2,
        borderColor: '#fbbd61'
    },
    '& label': {
        color: '#fbbd61',
    },
    '& label.Mui-focused ': {
        color: '#fbbd61',
    }
});

export default function SearchFilm({ placeholder, data }) {
    const [filteredDataFilm, setFilteredDataFilm] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.tenPhim.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredDataFilm([]);
        } else {
            setFilteredDataFilm(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredDataFilm([]);
        setWordEntered("");
    };

    const leave = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        if(searchWord){
            setFilteredDataFilm([]);
        }
    };
    return (
        <div className="search container">
            <div className="searchInputs">
                <TextFieldCustom
                    label="Tìm Kiếm Phim"
                    fullWidth
                    variant="outlined"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                    // onMouseLeave={leave}
                    onMouseMove={handleFilter}
                />
                <div className="searchIcon">
                    {filteredDataFilm.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredDataFilm.length != 0 && (
                <div className="dataResult">
                    {filteredDataFilm.slice(0, 15).map((value, key) => {
                        return (
                            <a className="dataItem" href={`/detail/${value.maPhim}`} target="_blank " key={key}>
                                <div className="hinhAnh"><img src={value.hinhAnh} alt="..." /></div>
                                <div className="film">
                                    <span className="name__film">
                                        {value.tenPhim}
                                    </span>
                                    <span className="time">
                                    119 phút - 10 IMDb - 2D/Digital
                                    </span>
                                </div>
                                
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    )
}
