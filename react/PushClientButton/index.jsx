import styles from './styles.styl'

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

import DeviceLaptopIcon from 'cozy-ui/transpiled/react/Icons/DeviceLaptop'

const ButtonClient = props => {
  const { label, href, onClick, className, icon } = props

  return (
    <a
      href={href}
      //eslint-disable-next-line react/jsx-no-target-blank
      target="_blank"
      className={cx(styles['c-btn-client'], className)}
      onClick={onClick}
    >
      <figure>
        <Icon icon={icon || DeviceLaptopIcon} size="32" />
      </figure>
      <span>{label}</span>
    </a>
  )
}

ButtonClient.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

ButtonClient.defaultProps = {
  className: ''
}

export default ButtonClient
