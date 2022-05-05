//Star Icon from: https://fontawesome.com/icons/star?s=solid

import React from 'react'

function Rating({ value, value2 }) {
    return (
        <div className="rating">  
            <i style={{ color:'#f8e825'}}
                    className={
                        value >= 1
                            ? 'fas fa-star'
                            : value >= 0.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }>
            </i>
            <i style={{ color: '#f8e825' }}
                className={
                    value >= 2
                        ? 'fas fa-star'
                        : value >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
            </i>
            <i style={{ color: '#f8e825' }}
                className={
                    value >= 3
                        ? 'fas fa-star'
                        : value >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
            </i>
            <i style={{ color: '#f8e825' }}
                className={
                    value >= 4
                        ? 'fas fa-star'
                        : value >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
            </i>
            <i style={{ color: '#f8e825' }}
                className={
                    value >= 5
                        ? 'fas fa-star'
                        : value >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
            </i>
            <i style={{ padding: '0.2rem'}}>  { value2 } </i>
        </div>
    )
}

export default Rating