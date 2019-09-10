/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';

class Plain extends React.Component {
    render() {
        const { text } = this.props;

        return text;
    }
}

Plain.propTypes = {
    text: PropTypes.string.isRequired
};

export default Plain;