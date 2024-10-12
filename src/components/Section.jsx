import React from "react";
import PropTypes from 'prop-types';

const Section = ({ title , children }) => {
    return (
        <section>
            <h1>{title}</h1>
            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,  // title trebuie să fie un string
    children: PropTypes.node.isRequired,  // children poate fi orice tip de nod React
};

export default Section;