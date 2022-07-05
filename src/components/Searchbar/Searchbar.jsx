import React from 'react';
import { Component } from 'react';
import s from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
    state = {
        search: '',
    }

    handleSearchChange = event => {
        this.setState({ search: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.search.trim() === '') {
            toast.error('Enter something for search');
            return;
        }

        this.props.onSubmit(this.state.search);

        this.setState({ search: '' });
    }

    render() {
        return (
            <header className={s.searchbar}>
                <form className={s.searchForm} onSubmit={this.handleSubmit}>

                    <button type="submit" className={s.searchFormButton}>
                        <FcSearch className={s.iconButton} />
                        <span className={s.searchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={s.searchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.search}
                        onChange={this.handleSearchChange}
                    />
                </form>
            </header>
        );
    }
}