import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import palette from '../palette'
import styles from './styles.styl'
import Icon from '../Icon'

const nameToColor = (name = '') => {
  const colors = [
    palette['azure'],
    palette['melon'],
    palette['blazeOrange'],
    palette['pomegranate'],
    palette['mango'],
    palette['pumpkinOrange'],
    palette['darkPeriwinkle'],
    palette['purpley'],
    palette['lightishPurple'],
    palette['weirdGreen'],
    palette['puertoRico'],
    palette['emerald'],
    palette['seafoamGreen'],
    palette['lavender'],
    palette['brightSun'],
    palette['fuchsia']
  ]
  const key =
    Array.from(name.toUpperCase())
      .map(letter => letter.charCodeAt(0))
      .reduce((sum, number) => sum + number, 0) % colors.length
  return colors[key]
}

export const Avatar = ({
  text,
  textId,
  image,
  size,
  className,
  style,
  disabled
}) => {
  const colored = {
    backgroundColor: `${nameToColor(textId || text)}`
  }

  return (
    <div
      className={cx(
        styles['c-avatar'],
        size !== 'medium' ? styles[`c-avatar--${size}`] : '',
        text ? styles['c-avatar--text'] : '',
        image ? styles['c-avatar--image'] : '',
        disabled ? styles['c-avatar--disabled'] : '',
        className
      )}
      style={text ? Object.assign(colored, style) : style}
    >
      {image && <img src={image} className={styles['c-avatar-image']} alt="" />}
      {!image && text && (
        <span className={styles['c-avatar-initials']}>{text}</span>
      )}
      {!image && !text && <Icon icon="people" />}
    </div>
  )
}

Avatar.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  className: PropTypes.string
}

Avatar.defaultProps = {
  text: '',
  image: '',
  size: 'medium',
  className: ''
}

export default Avatar
