import React from 'react';

const Container = ({ children }) => {
    return (
        <div class="container flex mx-auto">
        { children }
        </div>
    );
};

export default Container;